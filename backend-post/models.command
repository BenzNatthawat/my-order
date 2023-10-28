npx sequelize-cli model:generate --name poster --attributes title:string,image:string
npx sequelize-cli seed:generate --name poster

npx sequelize-cli model:generate --name post --attributes name:string,post:text,score:float
npx sequelize-cli seed:generate --name post