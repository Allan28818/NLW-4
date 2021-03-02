<h1>Pesquisa de NPS</h1>

<img src = "https://ik.imagekit.io/jp1xbaqmsn6/20210302_171712_0-UXSIF2A.png">

---

## Índice:
- Sobre;
- O que é NPS;
- Como clonar o projeto;
- Como iniciar a API;
- Como iniciar o front-end;
- Para que serve a hash;
- Como criar um usuário;
- Como criar uma pesquisa;
- Como enviar um e-mail; 
  - Como visualizar e responder um e-mail  
- Painel de controle;
- Tecnologias usadas;
- Referências;
---
## Sobre:
Este foi um projeto feito para auxiliar pessoas que querem fazer um pesquisa por satisafação com envio de e-mail personalizado, de forma rápida e fácil. Aqui todas as respostas podem ser respondidas pelo [Ethereal email](https://ethereal.email/) e os dados da pesquisa podem ser consultados no painel de controle da aplicação. Este projeto tem testes automatizados e toda a API foi desenvolvida na NLW da [Rocketseat](https://rocketseat.com.br/).

---

## O que é NPS:
Se você não foi informado sobre o assunto, deve estar curioso(a) para saber do que se trata. NPS, da sigla inglesa, *Net Promoter Score* , é um tipo de pesquisa feita para sabermos o percentual de aprovação ou serviço de uma pessoa ou empresa. E isso foi feito primariamente por uma revista chamada [*The one number you need to grow*](https://hbr.org/2003/12/the-one-number-you-need-to-grow), veja mais sobre esse assunto em [Wikipédia](https://pt.wikipedia.org/wiki/Net_Promoter_Score).

---

## Como clonar o projeto:
Caso tenha interesse nesse projeto, você pode obtê-lo clonando o repositório com o [Git](https://git-scm.com/), rodando o seguinte comando em seu prompt de comando:
```bash
#Clona o projeto pela URL
$ git clone https://github.com/Allan28818/NLW-4.git
```

---

## Como iniciar a API:
Quando for usar o projeto, tente iniciar primeiro a API para quando o front-end for iniciado os dados já estarem disponíveis para uma requisição mais rápida, mas se quiser iniciar o front-end primeiro, tudo certo só terá que atualizar algumas páginas no front-end. Agora para iniciar a API, o seu terminal tem que estar na pasta dento da pasta da API, que é ```NLW-4/API```. Depois que já estiver na pasta da API, rode o comando a seguir:
```bash
# Use esse caso esteja com npm:
$ npm run dev
# Ou esse se estiver usando yarn:
$ yarn dev
```
---

## Como iniciar o front-end:
Como recomendado [aqui](#-como-iniciar-a-api), com a API no ar, basta entrar na pasta do front-end em outro terminal, que é ```NLW-4/front-end```, e em seguida rodar o comando abaixo:

```bash
# Para quem usa npm:
$ npm run start
# Para quem usa yarn:
$ yarn start
```
---

## Para que serve a hash:
Se você entrar no projeto, você verá hashes em algumas partes da aplicação, mas afinal, quando usaremos e para que serve essa hash?

As hashes são usadas para identificar as pesquisas criadas, então para qualquer operção que envolva pesquisa, você precisará da hash, que nada mais é do que o id da pesquisa no banco de dados.

---

## Como criar um usuário:
Para criar o usuário, certifique-se de que a API  está no ar para que possamos entrar em contato com o servidor para fazer essa operação. Depois você poderá entrar na aba *Create an user*, fornecer um nome para seu usuário e um e-mail, caso o e-mail já exista, aparecerá um recado na página lhe informando do fato.

<img src = "https://media.giphy.com/media/NCtgW9HiLWiU81vpPz/giphy.gif">

----

## Como criar uma pesquisa:
Para criar uma pesquisa, entre na aba *Create a survey*, forneça um título e uma descrição para a sua pesquisa, depois, salve a hash da sua pesquisa para usar no painel de controle, ou veja a hash da sua pesquisa na lista de pesquisas.

<img src = "https://media.giphy.com/media/E2u5tWf2f5cZoWQdzs/giphy.gif">

---

## Como enviar um e-mail:
Para enviar um e-mail, você pode ir na aba *Send an e-mail* e colocar o e-mail de um usuário que já exista e colocar a hash de uma pesquisa também existente. Depois só enviar e esperar um pouco para o e-mail ser enviado.

- ### Como visualizar o e-mail:
Quando você mandar o e-mail, aproximadamente 3,98 segundos depois, no terminal onde a API está rodando você pode clicar no link e acessar a caixa de e-mail simbólica, que pode ser substituída por uma real, por serviços como o da [Amazon](https://aws.amazon.com/pt/getting-started/hands-on/send-an-email/), mas retomando o assunto, basta acessar o link copiando e colando no navegador ou dando Ctrl + click em cima do link, e lá na página, você pode avaliar a pesquisa de 1 até 10, 1 sendo péssimo e 10 ótimo. E você será redirecionado(a) para uma página com [JSON](https://www.json.org/json-en.html), então, você terá acesso as respostas da pesquisa indo no painel de controle.

<img src = "https://media.giphy.com/media/7QkATM5hvlfalyUmUg/giphy.gif">

---

## Painel de controle:
No painel de controle, que fica na aba *Controll panel*, você poderá ver as respostas da sua pesquisa sendo positiva (*promoters*), nula ou passiva (*passive*), ruim (*detractors*). E você também verá o seu nps, que quanto mais alto, melhor. E tudo isso será visto atrvés da hash da pesquisa, que deve ser fonecida no input;

<img src = "https://media.giphy.com/media/teg2lWPUQSLvhqraLF/giphy.gif">


## Tecnologias usadas:
Nesse projeto usamos:
- [TypeScript](https://www.typescriptlang.org/);
- [Node.js](https://nodejs.org/en/);
- [Express](https://expressjs.com/pt-br/);
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS);
- [Nodemailer](https://nodemailer.com/about/);
- [Typeorm](https://typeorm.io/#/);
- [Sqlite3](https://www.sqlite.org/index.html);
- [React](https://pt-br.reactjs.org/docs/getting-started.html);

 e muito mais...

## Referências:
- [Rocketseat](https://rocketseat.com.br/);
- [Wikipédia](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal);
- [AWS](https://aws.amazon.com/free/?trk=ps_a134p000003yhPXAAY&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_BR&sc_publisher=google&sc_category=core-main&sc_country=BR&sc_geo=LATAM&sc_outcome=Acquisition&sc_detail=aws&sc_content=Brand_Core_aws_e&sc_matchtype=e&sc_segment=454435137069&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|BR|EN|Text&s_kwcid=AL!4422!3!454435137069!e!!g!!aws&ef_id=Cj0KCQiA4feBBhC9ARIsABp_nbXz14uCXdJXNfz-CY0muuyATKFWGs9Errkd3ONDm1Mxg7QKYq0rG64aApvUEALw_wcB:G:s&s_kwcid=AL!4422!3!454435137069!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc);
- [Giphy](https://giphy.com/create/gifmaker);
- [Imagekit](https://imagekit.io/dashboard#media-library);