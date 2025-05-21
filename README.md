npm install sequelize@ sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact

npx sequelize-cli init

comando para gerar um model Sequelize (e o respectivo arquivo de migration) com o nome Pessoa e os atributos especificados, usando o Sequelize CLI.
npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

comando para rodar a migração:
npx sequelize-cli db:migrate

comando para gerar de seed
npx sequelize-cli seed:generate --name demo-pessoa
esse comando gerou o arquivo [data]-demo-pessoa.js com um método para popular o bd, mas a parte que popula vem comentada.
eu descomentei e preenchi com os elementos que a instrutora forneceu na pasta arquivos-base

comando para usar o seeder de pessoas gerado no comando anterior:
npx sequelize-cli db:seed:all

agora nós vamos criar a tabela categorias
npx sequelize-cli model:generate --name Categoria --attributes titulo:string

criando a tabela Curso
npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly

criando a tabela Matricula
npx sequelize-cli model:generate --name Matricula --attributes status:string

comando para rodar as migrações após a criação das tabelas cursos, matriculas e categorias e suas respectivas relações:
npx sequelize-cli db:migrate

comando para criar o seed de categorias:
npx sequelize-cli seed:generate --name demo-categorias
ele cria o arquivo. depois, nós vamos inserir o conteúdo que está nos arquivos base e rodar pra inserir os registros.
devemos criar os seeds na ordem correta(ordem em que foram criadas as tabelas, de acordo com as relações: se a tabela A depende da tabela B e a tabela B não depende de nenhuma outra, devemos criar a tabela B primeiro)

agora cursos:
npx sequelize-cli seed:generate --name demo-cursos

agora matrículas:
npx sequelize-cli seed:generate --name demo-matriculas

comando pra rodar os seeds: (lembrar de criar na ordem correta)
npx sequelize-cli seed:generate --name demo-categorias

npx sequelize-cli seed:generate --name demo-cursos

npx sequelize-cli seed:generate --name demo-matriculas

COMANDO PARA DESFAZER AS MIGRATES, DELETANDO TODAS AS TABELAS:
npx sequelize-cli db:migrate:undo:all
