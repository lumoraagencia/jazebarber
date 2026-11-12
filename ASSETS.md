# Jaze Barber — arquivos de imagem

Todas as fotografias de cortes, a logo e o retrato do barbeiro vieram do DOCX fornecido pelo usuário. Não há imagens de banco de imagens.

- `public/logo.jpg`: `word/media/image1.jpeg`, sem alterações.
- `public/barbeiro.png`: `word/media/image2.png`, sem alterações. Mantidos o fundo azul e o card de Instagram.
- `public/assets/cut1.webp`: retrato `image8.png`, recorte de fundo.
- `public/assets/cut2.webp`: retrato `image9.png`, recorte de fundo.
- `public/assets/cut3.webp`: retrato `image10.png`, recorte de fundo.
- `public/assets/cut4.webp`: retrato `image12.jpeg`, recorte de fundo.
- `public/assets/cut5.webp`: retrato `image11.png`, recorte de fundo.
- `public/assets/cut6.webp`: retrato `image13.jpeg`, recorte de fundo.
- `public/assets/cut7.webp`: modelo de jaqueta bege `image3.png`, recorte de fundo.
- `public/assets/hero.webp`: nova cena gerada pela ferramenta integrada ImageGen. A referência REISS orientou somente a composição; sua imagem e texto não são publicados.
- `public/maquina-original.mp4`: vídeo fornecido pelo usuário, preservado. `public/frames/*.webp` são quadros derivados deste vídeo, com máscara de transparência. Não é outra animação.
- `public/fonts`: Barlow Condensed Bold e Manrope, obtidas de google/fonts, licenças OFL inclusas.

## Prompt de recorte usado para cada um dos sete retratos
Use case: background-extraction. Remove ONLY the photographic background from this supplied portrait. Preserve this exact real person, face, hairstyle, hairline, beard, skin, clothing, pose and all visible body proportions as faithfully as possible. Do not invent a haircut or change the appearance. Keep original orientation and framing. Clean precise organic edges around hair and clothes. Output one isolated subject on actual transparent alpha background, no shadow, no text, no collage. For any barber cape or chair touching the person retain the cape but remove surroundings. The result will overlay a cream editorial card.

## Prompt da cena de abertura
Create a premium fashion-editorial photographic website hero, wide 1536x1024. Reference image 1 is COMPOSITION ONLY: elegant seated man in a black cantilever chair in a minimal light grey studio, extensive empty space. Do NOT reproduce original REISS image, face, logo or any lettering. Create a NEW scene: an elegant young adult Brazilian man in tailored black trousers and black shirt seated naturally, with a male barber standing behind him actually trimming the side of his hair using the Wahl Senior clipper shown in reference image 2. Barber in plain black clothes, face of seated client fully visible, natural hand anatomy and convincing haircut action. Full body chair and people centered in lower 70% of frame, top 30% empty light warm-grey for HTML heading overlay, lots of horizontal negative space. Monochrome editorial lighting, subtle realistic studio shadows. No text, no logos, no frames, no UI. This is a new scene inspired by composition only.
## Atualização solicitada em 11/11/2026
- Animação substituída pelo arquivo image_20261111_220938.mp4, com fundo preto original. Os 123 quadros servidos são derivados desse vídeo (12 fps, últimos quadros repetidos para manter o controle existente).
- Hero usa hero-v2.webp, edição localizada por ImageGen: corrigir somente a máquina e a pegada para Wahl Senior, preservando personagens, cena, enquadramento e tratamento. Referência image4.jpg do DOCX.
- Card da jaqueta bege removido do catálogo.
- Botão flutuante de WhatsApp substituído por botão 3D cromado com o texto solicitado “não fique urso”; destino preservado.

## Ajustes de revisão por comentários do navegador
Hero-v3.webp: correção localizada da anatomia das mãos do barbeiro por ImageGen, preservando a cena e a máquina. Título Conheça a Jaze; contatos do rodapé vermelhos com ícones claros e ícone de e-mail; frase do rodapé em Barlow, linha única; preços removidos apenas dos cards de catálogo.

## Reconstrução localizada da pegada na hero
hero-v4.webp: mão e máquina recriadas por ImageGen a partir de hero-v3.webp, com ampliação da região defeituosa e referência da Wahl Senior. Pegada nova, aparelho mais vertical, dedos envolvendo o cabo e pulso contínuo. Conferência ampliada em work/hand-rebuilt-detail.png. Nenhuma outra alteração de interface.
