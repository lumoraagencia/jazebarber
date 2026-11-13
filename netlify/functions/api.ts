import {getStore} from '@netlify/blobs';import {allServices,isOpenDate,isValidSlot,slots} from '../../lib/catalog';
const reply=(data:any,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
const hash=async(t:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)))).map(x=>x.toString(16).padStart(2,'0')).join('');
export async function handle(request:Request,store:any){
 const url=new URL(request.url),route=url.pathname.split('/').filter(Boolean).pop();
 if(request.method==='GET'&&route==='availability'){const date=url.searchParams.get('date')||'';if(!isOpenDate(date))return reply({error:'Escolha uma data a partir de hoje.'},400);const entries=await Promise.all(slots.map(t=>store.get(`slots/${date}/${t}`,{type:'json'})));return reply({occupied:entries.filter(x=>x&&!x.cancelled).map(x=>x.time)});}
 if(request.method!=='POST')return reply({error:'Rota não encontrada.'},404);
 const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return reply({error:'Origem não permitida.'},403);
 if(Number(request.headers.get('content-length')||0)>4096)return reply({error:'Dados inválidos.'},413);
 let b:any;try{b=await request.json();}catch{return reply({error:'Dados inválidos.'},400);}if(!b||typeof b!=='object')return reply({error:'Dados inválidos.'},400);
 if(route==='bookings'){
  const service=allServices.find(x=>x.id===b.serviceId),name=typeof b.name==='string'?b.name.trim():'',phone=typeof b.phone==='string'?b.phone.replace(/\D/g,''):'';
  if(!service||name.length<2||name.length>80||!/^\d{10,11}$/.test(phone)||typeof b.date!=='string'||typeof b.time!=='string'||!isValidSlot(b.date,b.time))return reply({error:'Confira o serviço, a data, o horário e seus dados.'},400);
  const key=`slots/${b.date}/${b.time}`,old=await store.getWithMetadata(key,{type:'json'});if(old&&!old.data.cancelled)return reply({error:'Esse horário acabou de ser reservado. Escolha outro.'},409);
  const id=crypto.randomUUID(),token=crypto.randomUUID()+crypto.randomUUID().replaceAll('-',''),cancelHash=await hash(token);const record={id,date:b.date,time:b.time,serviceId:service.id,name,phone,cancelHash,createdAt:Date.now(),cancelled:false};
  await store.setJSON('tokens/'+cancelHash,{key,id});
  const saved=await store.setJSON(key,record,old?{onlyIfMatch:old.etag}:{onlyIfNew:true});if(!saved.modified)return reply({error:'Esse horário acabou de ser reservado. Escolha outro.'},409);
  return reply({id,cancelUrl:`${url.origin}/cancelar?id=${token}`,service:service.name,price:service.price,date:b.date,time:b.time,name,phone},201);
 }
 if(route==='cancel'){
  if(typeof b.id!=='string'||!/^[a-f0-9-]{68}$/.test(b.id))return reply({error:'Link de cancelamento inválido.'},400);
  const h=await hash(b.id),pointer=await store.get('tokens/'+h,{type:'json'});if(!pointer)return reply({cancelled:false});const current=await store.getWithMetadata(pointer.key,{type:'json'});if(!current||current.data.id!==pointer.id||current.data.cancelled)return reply({cancelled:false});
  const result=await store.setJSON(pointer.key,{id:pointer.id,date:current.data.date,time:current.data.time,cancelled:true},{onlyIfMatch:current.etag});return reply({cancelled:result.modified});
 }
 return reply({error:'Rota não encontrada.'},404);
}
export default async(request:Request)=>{try{return await handle(request,getStore({name:'jaze-bookings',consistency:'strong'}));}catch{return reply({error:'Não foi possível acessar a agenda. Tente novamente.'},503);}};
