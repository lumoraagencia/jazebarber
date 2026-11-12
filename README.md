# Jaze Barber

Site em português com catálogo, animação por rolagem e agenda compartilhada em Cloudflare D1.

## Desenvolvimento

Requer Node.js 22.13 ou superior. Instale com `npm ci` e execute `npm run dev`. As bibliotecas usam o runtime de Cloudflare Workers por meio do Vinext.

## Atendimento

Terça a domingo, 08h–19h, fuso America/Sao_Paulo. Segunda-feira fechado. Horários de início a cada 15 minutos, de 08h a 18h45. Serviços e regras ficam em `lib/catalog.ts`.

## Reservas

A sequência é horário, data, contato e resumo. O banco aplica índice único para data + horário. A API só confirma após a gravação. O WhatsApp abre com a mensagem preparada, e o cliente ainda precisa enviá-la. O cancelamento exige confirmação em uma página própria; visitas ou prévias do link não cancelam sozinhas. Apenas o hash do token de cancelamento é armazenado.

A versão Sites começa com acesso privado. Para receber clientes sem login de proprietário, o dono deve alterar explicitamente o acesso do site para público. Isso é uma configuração de hospedagem, não uma alteração no código.

## Banco e publicação

A identidade do projeto está em `.openai/hosting.json`, com binding D1 `DB`. A migração inicial está em `drizzle/0000_fair_blackheart.sql`. A publicação pelo Sites aplica a migração hospedada. Banco local de testes e banco hospedado são separados.

## Verificação realizada

- TypeScript sem erros.
- Compilação de produção.
- Teste real de concorrência: uma reserva confirmada e outra recusada para a mesma data e horário.
- Persistência, cancelamento, liberação imediata, token inválido, datas passadas e validação dos campos.
- Fluxo completo no navegador, catálogo, menu, navegação e ausência de overflow em 1440, 390 e 320 pixels.
- WhatsApp interceptado durante os testes: nenhuma mensagem de teste foi enviada.

## Imagens

Veja `ASSETS.md` para as origens e os prompts. Os preços do catálogo foram preservados; o modelo de jaqueta bege usa “A consultar” porque seu preço não foi informado. A seção Sobre usa texto de apresentação, sem inventar datas, prêmios ou uma biografia factual.
