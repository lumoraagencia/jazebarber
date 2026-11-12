import sys,subprocess
from pathlib import Path
from PIL import Image,ImageFilter
import numpy as np
from PIL import ImageDraw
ff=r'C:\Users\Lenovo\Documents\Codex\2026-11-11\seja-ext\work\py-tools\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v9.0.2.exe'
out=Path('public/frames');out.mkdir(exist_ok=True)
p=subprocess.Popen([ff,'-v','error','-i','public/maquina-original.mp4','-vf','fps=12,scale=640:640','-f','rawvideo','-pix_fmt','rgb24','pipe:1'],stdout=subprocess.PIPE)
i=0
while True:
 raw=p.stdout.read(640*640*3)
 if len(raw)!=640*640*3:break
 rgb=np.frombuffer(raw,dtype=np.uint8).reshape(640,640,3)
 lo=rgb.min(axis=2); hi=rgb.max(axis=2)
 candidate=(lo>208)&((hi.astype(int)-lo.astype(int))<25)
 seed=np.zeros((640,640),bool);seed[0,:]=candidate[0,:];seed[-1,:]=candidate[-1,:];seed[:,0]=candidate[:,0];seed[:,-1]=candidate[:,-1]
 mask=Image.fromarray(np.uint8(candidate)*255).copy()
 for xy in [(0,0),(639,0),(0,639),(639,639),(320,0),(320,639),(0,320),(639,320)]:
  if mask.getpixel(xy)==255:ImageDraw.floodfill(mask,xy,128)
 bg=np.array(mask)==128
 # Remove exterior neutral background while preserving highlights enclosed by the actual product.
 alpha=Image.fromarray(np.uint8(~bg)*255).filter(ImageFilter.GaussianBlur(.45))
 im=Image.fromarray(rgb);im.putalpha(alpha);im.save(out/f'{i:03d}.webp',quality=90,method=4)
 i+=1
p.wait()
print('Frames:',i)
for n in range(i,123):
 import shutil
 shutil.copyfile(out/f'{i-1:03d}.webp',out/f'{n:03d}.webp')
for key in range(1,8):
 file=Path(f'public/assets/cut{key}.webp');im=Image.open(file);box=im.getchannel('A').getbbox();im.crop(box).save(file,quality=92)
print('Assets cropped to alpha bounds')


