const backend='https://jazebarber.netlify.app';
export default {async fetch(request,env){
 const url=new URL(request.url);
 if(url.pathname.startsWith('/api/')){
  const route=url.pathname;
  if(!['/api/availability','/api/bookings','/api/cancel'].includes(route))return Response.json({error:'Rota não encontrada.'},{status:404});
  const expected=route==='/api/availability'?'GET':'POST';if(request.method!==expected)return Response.json({error:'Método não permitido.'},{status:405});
  const origin=request.headers.get('origin');if(expected==='POST'&&origin&&origin!==url.origin)return Response.json({error:'Origem não permitida.'},{status:403});
  if(Number(request.headers.get('content-length')||0)>4096)return Response.json({error:'Dados inválidos.'},{status:413});
  try{
   const headers=new Headers({'Content-Type':'application/json'});
   const body=expected==='POST'?await request.text():undefined;
   if(body&&body.length>4096)return Response.json({error:'Dados inválidos.'},{status:413});
   const response=await fetch(backend+route+url.search,{method:expected,headers,body,redirect:'manual'});
   if(response.status>=300&&response.status<400)throw new Error('Unexpected upstream redirect');
   const data=await response.json();
   if(typeof data.cancelUrl==='string'&&data.cancelUrl.startsWith(backend+'/cancelar?'))data.cancelUrl=url.origin+data.cancelUrl.slice(backend.length);
   return Response.json(data,{status:response.status,headers:{'Cache-Control':'no-store'}});
  }catch{return Response.json({error:'Não foi possível acessar a agenda. Tente novamente.'},{status:503});}
 }
 return env.ASSETS.fetch(request);
}};
