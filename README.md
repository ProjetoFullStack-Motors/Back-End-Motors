<h1 align="center">:file_cabinet: API de Gerenciamento de Anúncios de Carros e Usuários(Comprador e Anunciante)</h1>

## :memo: Descrição
Bem-vindo à descrição da API de Anúncios de Carros! Esta API oferece uma plataforma dinâmica e interativa para conectar anunciantes e compradores, permitindo que os anunciantes criem anúncios de carros emocionantes e os compradores explorem uma ampla variedade de opções. Com recursos abrangentes e uma variedade de rotas, nossa API visa proporcionar uma experiência completa para todos os usuários envolvidos.

## :books: Funcionalidades

* <b>Cadastro de Usuário e Endereço</b>:
Os usuários podem se cadastrar na plataforma e fornecer informações pessoais, incluindo seu endereço.

* <b>Autenticação e Login</b>:
A autenticação segura garante que os usuários registrados possam fazer login com segurança em suas contas, garantindo acesso aos recursos exclusivos da plataforma, se anunciante, criar anúncios e se comprador ter acesso ao contato por whatsapp do anunciante de determinado anúncio.

* <b>Criação de Anúncios por Anunciantes</b>:
Os anunciantes têm a capacidade de criar anúncios detalhados para os carros que desejam vender. Eles podem adicionar descrições, imagens, detalhes técnicos e outras informações relevantes.

* <b>Exploração de Anúncios</b>:
Os compradores e visitantes não cadastrados podem explorar a lista completa de anúncios de carros disponíveis. Eles podem visualizar as informações básicas sobre os carros e os detalhes dos anunciantes.

* <b>Filtragem Avançada</b>:
A função de filtragem permite que os usuários ajustem as opções de busca de acordo com suas preferências. Isso facilita a busca por modelos específicos, faixas de preço ou outros critérios relevantes.

* <b>Detalhes do Anúncio</b>:
Os usuários podem visualizar todos os detalhes de um anúncio específico, incluindo imagens, descrição, especificações técnicas e comentários de outros usuários.

* <b>Criação de Comentários</b>:
Os usuários têm a capacidade de adicionar comentários aos anúncios que despertaram seu interesse. Isso permite interações entre compradores e anunciantes, onde os compradores podem fazer perguntas, obter mais informações e expressar sua opinião.

* <b>Interação com Anúncios</b>:
Além dos comentários, os usuários podem continuar a interagir com os anúncios por meio de perguntas diretas aos anunciantes e ao expressar interesse em determinados veículos por meio do whatsapp caso tenha uma conta de comprador.

* <b>Gestão de Conta</b>:
Os usuários têm controle sobre suas informações pessoais e de contato. Eles podem editar seus perfis, endereços e informações de contato sempre que necessário. Além disso, eles podem excluir suas contas se desejarem.

* <b>Edição e Exclusão de Anúncios</b>:
Os anunciantes têm a flexibilidade de editar e atualizar seus anúncios, bem como removê-los da plataforma quando o veículo for vendido ou por qualquer outra razão.

* <b>Acesso aos Anúncios de um Anunciante</b>:
Os usuários podem acessar todos os anúncios de um anunciante específico, permitindo uma visão mais ampla do inventário de carros disponíveis de um único vendedor.

## :wrench: Tecnologias utilizadas
* Typescript;
* NodeJs;
* Express;
* TypeORM;
* Zod;
* Cors;
* Pg;
* Dotenv;
* BcryptJs;
* Jsonwebtoken;
* Express-async-errors;
* Reflect-metadata;
* Nodemailer;
* E seus types localizados no arquivo package.json.

## :rocket: Rodando o projeto

* Primeiramente é necessário é necessário clonar o repositório;
* Realizar a criação de um arquivo .env na raiz (copie o conteúdo do .env.example para o .env criado);
* Crie um banco de dados no postgres e configure o DATABASE_URL com as informações do banco de dados criado.
* Depois insira o seguinte comando no terminal ao iniciar o projeto para instalar todas as dependências necessárias:

```
npm install
```
* Ainda no terminal, após o comando acima rode as migrações existentes na pasta migrations para criar as tabelas no seu banco de dados com o seguinte comando:

```
npm run migrate
```

* Por fim, para rodar o projeto:

```
npm run dev
```
<b>Após os passos acima, caso queira testar as funcionalidades da api acessem</b>:  https://front-end-motors.vercel.app/
<br>
<b>Ou pelo insomnia</b>:
<br>
<br>
<a href="https://insomnia.rest/run/?label=Back-End-Motors&uri=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1uy61InEwfTgMlQP-_y5wY53RslPHpbXu%2Fview%3Fusp%3Dsharing" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<b>Caso queiram consumir API o link base do deploy é</b>: https://motorsm6.onrender.com

## :soon: Endpoints:

A API tem um total de <b>15</b> endpoints, sendo em volta principalmente do usuário - podendo cadastrar seu perfil, fazer login e cadastrar seus anúncios, caso seja um anunciante e caso comprador ter acesso ao contato com o anunciante do anúncio desejado.


## :unlock: Rotas que não precisam de autenticação


<h2 align ='center'> Criação de usuário </h2>


`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@mail.com",
	"password": "123456",
	"cpf": "12345678910",
	"cellphone": "31999999999",
	"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
	"birthdate": "2000/01/01",
        "userImage": "Uma url com sua imagem",
	"role": "seller",
	"address": {
		"cep": "12345678",
		"state": "MG",
		"city": "Tão Tão Distante",
		"street": "rua primeira",
		"addressNumber": 123,
		"addressComplement": "casa"
	}
}
```
<b>Obs</b>: 
* Os usuários podem ser apenas "seller" ou "buyer";
* Email, CPF e cellphone devem ser únicos;
* De início só pode haver um endereço com os mesmos dados cadastrados na API;
* A imagem de perfil e o complemento de endereço são opcionais.

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@mail.com",
	"cpf": "12345678910",
	"cellphone": "31999999999",
	"birthdate": "2000/01/01",
	"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
	"userImage": "Uma url com sua imagem",
	"role": "seller",
	"created_at": "1693336326329",
	"address": {
		"cep": "12345678",
		"state": "MG",
		"city": "Tão Tão Distante",
		"street": "rua primeira",
		"addressNumber": 123,
		"addressComplement": "casa"
	}
}
```


<h2 align = "center"> Login </h2>


`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "johndoe@mail.com",
  "password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZ2VyQG1haWwuY29tIiwiaWF0IjoxNjkwMjUxMDcxLCJleHAiOjE2OTAzMzc0NzEsInN1YiI6Ijg4MmYxYWJlLTBmNGUtNGRhOC1hZDc5LTlhNmNmMmJmODdjMiJ9.1Z-TC0ohIf3Xm_6D7ykilk_FPRdznzxVpc-I0oGxOeA",
}
```

<h2 align = "center"> Recuperar senha do usuário </h2>


`POST /recoverPass - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "johndoe@mail.com",
}
```

<b>Obs</b>:
* Para usar esta rota deve-se configurar os campos SERVICE, EMAIL_USER e EMAIL_PASSWORD no arquivo .env (como explicado acima existe um .env.example no repositório) com os dados do serviço de email escolhido;
* Um email será enviado para o email solicitado com uma nova senha, que poderá ser alterada na edição de perfil quando o usuário estiver logado.

Caso dê tudo certo, a resposta será assim:

`POST /recoverPass - FORMATO DA RESPOSTA - STATUS 201`

```json
"Email sended"
```


<h2 align = "center"> Listar todos os anúncios </h2>


`GET /salesAd - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim, o data trará um array de anúncios de no máximo 12 por página:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"prevPage": null,
	"nextPage": "http://localhost:3000/salesAd?page=2",
	"count": 1,
	"data": [
		{
			"id": "044310f2-196c-4b55-afd1-ee1360711ccc",
			"brand": "toyota",
			"model": "corola",
			"year": "2018",
			"mileage": 46026,
			"engine": "flex",
			"isGoodPrice": true,
			"price": 11300,
			"color": "cinza",
			"description": "Lorem Ipsum",
			"status": true,
			"created_at": "1692915682151",
			"salesImages": [
				{
					"id": "e21933a9-b30e-4532-858a-4afb9c07cee6",
					"imageUrl": "img1"
				},
				{
					"id": "10fd994a-e1ac-4f75-906f-fadc375e4ed9",
					"imageUrl": "img2"
				},
				{
					"id": "df0c7bb1-ab11-43fc-8a2d-bdc77f83a52d",
					"imageUrl": "img3"
				}
			],
			"user": {
				"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
				"firstName": "John",
				"lastName": "Doe",
				"userImage": "Uma imagem de perfil",
				"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
				"role": "seller",
				"cellphone": "31999999999",
				"email": "johndoe@mail.com",
				"birthdate": "2000-01-01",
				"cpf": "12345678910"
			  }
		  },
    ]
}
```


<h2 align = "center"> Filtrar anúncios </h2>


`POST /salesAd/filter - FORMATO DA REQUISIÇÃO`

```json
{
	 "color": "cinza"
}
```

<b>Obs</b>:
* Pode-se filtrar por: brand, model, color, year, engine, mileage e price (todos simultâneos se desejar).

Caso dê tudo certo, a resposta será assim:

`POST /salesAd/filter - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"prevPage": null,
	"nextPage": "http://localhost:3000/salesAd?page=2",
	"count": 1,
	"data": [
		{
			"id": "044310f2-196c-4b55-afd1-ee1360711ccc",
			"brand": "toyota",
			"model": "corola",
			"year": "2018",
			"mileage": 46026,
			"engine": "flex",
			"isGoodPrice": true,
			"price": 11300,
			"color": "cinza",
			"description": "Lorem Ipsum",
			"status": true,
			"created_at": "1692915682151",
			"salesImages": [
				{
					"id": "e21933a9-b30e-4532-858a-4afb9c07cee6",
					"imageUrl": "img1"
				},
				{
					"id": "10fd994a-e1ac-4f75-906f-fadc375e4ed9",
					"imageUrl": "img2"
				},
				{
					"id": "df0c7bb1-ab11-43fc-8a2d-bdc77f83a52d",
					"imageUrl": "img3"
				}
			],
			"user": {
				"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
				"firstName": "John",
				"lastName": "Doe",
				"userImage": "Uma imagem de perfil",
				"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
				"role": "seller",
				"cellphone": "31999999999",
				"email": "johndoe@mail.com",
				"birthdate": "2000-01-01",
				"cpf": "12345678910"
			  }
		  },
    ]
}
```


<h2 align = "center"> Listar um anúncio </h2>


`GET /salesAd/:id - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim:

`GET /salesAd/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
			"id": "044310f2-196c-4b55-afd1-ee1360711ccc",
			"brand": "toyota",
			"model": "corola",
			"year": "2018",
			"mileage": 46026,
			"engine": "flex",
			"isGoodPrice": true,
			"price": 11300,
			"color": "cinza",
			"description": "Lorem Ipsum",
			"status": true,
			"created_at": "1692915682151",
			"salesImages": [
				{
					"id": "e21933a9-b30e-4532-858a-4afb9c07cee6",
					"imageUrl": "img1"
				},
				{
					"id": "10fd994a-e1ac-4f75-906f-fadc375e4ed9",
					"imageUrl": "img2"
				},
				{
					"id": "df0c7bb1-ab11-43fc-8a2d-bdc77f83a52d",
					"imageUrl": "img3"
				}
			],
			"user": {
				"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
				"firstName": "John",
				"lastName": "Doe",
				"userImage": "Uma imagem de perfil",
				"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
				"role": "seller",
				"cellphone": "31999999999",
				"email": "johndoe@mail.com",
				"birthdate": "2000-01-01",
				"cpf": "12345678910"
			  },
}

```


<h2 align = "center"> Listar todos os anúncios de um anunciante </h2>


`GET /salesAd/users/:userId - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim, o data trará um array de anúncios de no máximo 12 por página:

`GET /salesAd/users/:userId - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"prevPage": null,
	"nextPage": "http://localhost:3000/salesAd?page=2",
	"count": 1,
        "user": {
          "id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
          "firstName": "John",
          "lastName": "Doe",
          "userImage": "Uma imagem de perfil",
          "description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
          "role": "seller",
          "cellphone": "31999999999",
          "email": "johndoe@mail.com",
          "birthdate": "2000-01-01",
          "cpf": "12345678910"
          "address": {
            "id": "66cb3d93-4831-4301-bf56-5dcba8092557",
            "cep": "12345679",
            "state": "MG",
            "city": "Tão Tão Distante",
            "street": "rua primeira",
            "addressNumber": 124,
            "addressComplement": "casa",
            "created_at": "1692915631587"
          },
        },
	"data": [
		{
			"id": "044310f2-196c-4b55-afd1-ee1360711ccc",
			"brand": "toyota",
			"model": "corola",
			"year": "2018",
                        "mileage": 46026,
			"engine": "flex",
			"isGoodPrice": true,
			"price": 11300,
			"color": "cinza",
			"description": "Lorem Ipsum",
			"status": true,
			"created_at": "1692915682151",
			"salesImages": [
				{
					"id": "e21933a9-b30e-4532-858a-4afb9c07cee6",
					"imageUrl": "img1"
				},
				{
					"id": "10fd994a-e1ac-4f75-906f-fadc375e4ed9",
					"imageUrl": "img2"
				},
				{
					"id": "df0c7bb1-ab11-43fc-8a2d-bdc77f83a52d",
					"imageUrl": "img3"
				}
			],
}
```


## :lock: Rotas que precisam de autenticação


<h2 align = "center"> Criar um anúncio </h2>


`POST /salesAd - FORMATO DA REQUISIÇÃO`

```json
{
		"model": "bolt2 ev premier 203cv (elétrico)",
		"brand": "volkswagem",
		"year": "2017",
	        "mileage": 70000,
		"engine": "flex",
		"price": 125000,
		"color": "cinza",
	        "isGoodPrice": true,
		"description":"Opcionais: Porta-copos, Farol de neblina, Direção Elétrica, Comando de áudio no volante, Banco bi-partido, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.",
		"salesImages":[
			{
				"imageUrl": "img1"
			},
			{
				"imageUrl": "img2"
			},
			{
				"imageUrl": "img3"
			}
	]
}
```

<b>Obs</b>:
* isGoodPrice é uma verificação caso o produto seja 5% ou mais abaixo do valor da tabela fipe do veículo anunciado.

Caso dê tudo certo, a resposta será assim:

`POST /salesAd - FORMATO DA RESPOSTA - STATUS 201`

```json

{
	"id": "8b0556c7-f16c-4ce1-9b71-0b3ed6619c9c",
	"created_at": "1693345494504",
	"brand": "volkswagem",
	"model": "bolt2 ev premier 203cv (elétrico)",
	"color": "cinza",
	"engine": "flex",
	"description": "Opcionais: Porta-copos, Farol de neblina, Direção Elétrica, Comando de áudio no volante, Banco bi-partido, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.",
	"year": "2017",
        "mileage": 70000,
	"price": 12500000,
	"status": true,
        "isGoodPrice": true,
	"salesImages": [
		{
			"id": "dc07fda9-02de-48b6-835d-8960754e9571",
			"imageUrl": "img1",
			"created_at": "1693345494526"
		},
		{
			"id": "f508f789-def0-4531-ba12-72d9d9cf3e0d",
			"imageUrl": "img2",
			"created_at": "1693345494541"
		},
		{
			"id": "b4455aae-8c1c-42eb-bbae-520ef74dbd3a",
			"imageUrl": "img3",
			"created_at": "1693345494550"
		}
	]
}

```


<h2 align = "center"> Editar um anúncio </h2>


`PATCH /salesAd/:id - FORMATO DA REQUISIÇÃO`

```json
{
	"brand": "volkswagen",
	"model": "fox",
	"year": "2022",
	"mileage": "1000",
	"engine": "flex",
	"isGoodPrice": "true",
	"status": "true",
	"color": "red",
	"price": 9000000,
	"description":"Opcionais: Porta-copos, Farol de neblina, Direção Elétrica, Comando de áudio no volante, Banco bi-partido, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.",
 "salesImages":[
			{
				"id": "1bca6b6e-dc88-40eb-8a05-39de94250cff",
				"imageUrl": "imagem 2 update 1"
			},
	 		{
				"id": "2572c47b-416a-4e6d-ad83-aea320c6cbf8",
				"imageUrl": "imagem 3 update 2"
			},
	 		{
				"id": "bfef5d23-5e1e-4b91-821b-48310bc39d56",
				"imageUrl": "img1 update 3"
			}
	]
}
```

<b>Obs</b>:
* Todos os dados são opcionais;
* Em salesImages deve ser enviado o id da imagem caso queira editá-la.

Caso dê tudo certo, a resposta será assim:

`PATCH /salesAd/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "188f1423-faa5-4c83-b4f5-bda0b18ce075",
	"created_at": "1693228426047",
	"brand": "volkswagen",
	"model": "fox",
	"color": "red",
	"engine": "flex",
	"description": "Opcionais: Porta-copos, Farol de neblina, Direção Elétrica, Comando de áudio no volante, Banco bi-partido, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.",
	"year": "2021",
	"mileage": 1000,
	"price": 9000000,
	"status": true,
	"isGoodPrice": true,
	"salesImages": [
		{
			"id": "bfef5d23-5e1e-4b91-821b-48310bc39d56",
			"created_at": "1693228426063",
			"imageUrl": "img1 update 3"
		},
		{
			"id": "1bca6b6e-dc88-40eb-8a05-39de94250cff",
			"created_at": "1693228426069",
			"imageUrl": "imagem 2 update 1"
		},
		{
			"id": "2572c47b-416a-4e6d-ad83-aea320c6cbf8",
			"created_at": "1693228426058",
			"imageUrl": "imagem 3 update 2"
		}
	]
}
```


<h2 align = "center"> Deletar um anúncio </h2>


`DELETE /salesAd/:id - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim:

`DELETE /salesAd/:id - FORMATO DA RESPOSTA - STATUS 204`

Sem corpo de resposta.


<h2 align = "center"> Editar um usuário </h2>


`PATCH /users/update/:id - FORMATO DA REQUISIÇÃO`

```json
{
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@mail.com",
	"password": "123456",
	"cpf": "12345678910",
	"cellphone": "31999999999",
	"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
	"birthdate": "2000/01/01",
        "userImage": "Uma url com sua imagem",
	"role": "seller",
}
```
<b>Obs</b>: 
* Todos os dados são opcionais.

Caso dê tudo certo, a resposta será assim:

`PATCH /users/update/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
	"firstName": "John",
	"lastName": "Doe",
	"email": "johndoe@mail.com",
	"cpf": "12345678910",
	"cellphone": "31999999999",
	"birthdate": "2000/01/01",
	"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
	"userImage": "Uma url com sua imagem",
	"role": "seller",
	"created_at": "1693336326329"
}
```


<h2 align = "center"> Edição de endereço </h2>


`PATCH /address - FORMATO DA REQUISIÇÃO`

```json
{
		"cep": "12345678",
		"state": "MG",
		"city": "Tão Tão Distante",
		"street": "rua primeira",
		"addressNumber": 124,
		"addressComplement": "casa"
}
```

<b>Obs</b>:
* Nessa rota o endereço é buscado pelo id de usuário por trás dos panos.

Caso dê tudo certo, a resposta será assim:

`PATCH /address - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "8b8f50b5-cd9d-42b1-ad2d-21d5c2d93066",
	"created_at": "1693415422288",
	"cep": "12345678",
	"state": "MG",
	"city": "Tão Tão Distante",
	"street": "rua primeira",
	"addressNumber": 124,
	"addressComplement": "casa"
}
```


<h2 align = "center"> Deletar um usuário </h2>


`DELETE /users/delete/:id - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim:

`DELETE /users/delete/:id - FORMATO DA RESPOSTA - STATUS 204`

Sem corpo de resposta.


<h2 align = "center"> Criação de comentário </h2>


`POST /comments/salesAd/:salesAdId - FORMATO DA REQUISIÇÃO`

```json
{
  "comment": "Muito bom!",
}
```

Caso dê tudo certo, a resposta será assim:

`POST /comments/salesAd/:salesAdId - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "82165027-64e9-4c6c-b45e-db3704fed6e3",
	"comment": "Muito bom!",
	"created_at": "1693402251300",
        "user": {
        		"id": "c4ac3311-5715-4a87-99ec-813265f0cead",
        		"firstName": "John",
        		"lastName": "Doe",
        		"email": "johndoe@mail.com",
        		"cpf": "12345678920",
        		"cellphone": "31999999929",
        		"birthdate": "2000-01-01",
        		"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
        		"userImage": "Uma url com sua imagem",
        		"role": "seller",
        		"created_at": "1693401326477"
        },
	"salesAd": {
		"id": "5935d252-7ca6-4eb2-a1af-dd7b68b0193c",
		"brand": "toyota",
		"model": "corola",
		"year": "2014",
		"mileage": 99573,
		"engine": "electric",
		"isGoodPrice": true,
		"price": 2535000,
		"color": "azul",
		"description": "Lorem Ipsum",
		"status": true,
		"created_at": "1693401380168",
		"user": {
			"id": "c4ac3311-5715-4a87-99ec-813265f0cead",
			"firstName": "John",
			"lastName": "Doe",
			"email": "johndoe@mail.com",
			"cpf": "12345678920",
			"cellphone": "31999999929",
			"birthdate": "2000-01-01",
			"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
			"userImage": "Uma url com sua imagem",
			"role": "seller",
			"created_at": "1693401326477"
		}
	}
}
```


<h2 align = "center"> Edição de comentário </h2>


`PATCH /comments/:id - FORMATO DA REQUISIÇÃO`

```json
{
  "comment": "Muito ruim!",
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /comments/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "82165027-64e9-4c6c-b45e-db3704fed6e3",
	"comment": "Muito ruim!",
	"created_at": "1693402251300",
	"user": {
		"id": "c4ac3311-5715-4a87-99ec-813265f0cead",
		"firstName": "John",
		"lastName": "Doe",
		"email": "johndoe@mail.com",
		"cpf": "12345678920",
		"cellphone": "31999999929",
		"birthdate": "2000-01-01",
		"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
		"userImage": "Uma url com sua imagem",
		"role": "seller",
		"created_at": "1693401326477"
	}
	"salesAd": {
		"id": "5935d252-7ca6-4eb2-a1af-dd7b68b0193c",
		"brand": "toyota",
		"model": "corola",
		"year": "2014",
		"mileage": 99573,
		"engine": "electric",
		"isGoodPrice": true,
		"price": 2535000,
		"color": "azul",
		"description": "Lorem Ipsum",
		"status": true,
		"created_at": "1693401380168",
		"user": {
			"id": "c4ac3311-5715-4a87-99ec-813265f0cead",
			"firstName": "John",
			"lastName": "Doe",
			"email": "johndoe@mail.com",
			"cpf": "12345678920",
			"cellphone": "31999999929",
			"birthdate": "2000-01-01",
			"description": " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Distinctio nobis reprehenderit, a voluptatem porro quisquam natus. Nobis, corrupti delectus sapiente, ea iure nulla tempora labore fugit iusto ducimus explicabo magnam?",
			"userImage": "Uma url com sua imagem",
			"role": "seller",
			"created_at": "1693401326477"
		}
	}
}
```

<h2 align = "center"> Deletar um comentário </h2>

`DELETE /comments/:id - FORMATO DA REQUISIÇÃO`

Sem corpo de requisição.

Caso dê tudo certo, a resposta será assim:

`PATCH /comments/id - FORMATO DA RESPOSTA - STATUS 204`

Sem corpo de resposta.


