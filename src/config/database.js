import Sequelize from 'sequelize'

const database = {

    connection: () => {
      return new Sequelize('mecanicapp', 'root', '', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
              max: 5,
              idle: 30000,
              acquire: 60000,
            }
          });
    },

    models: ['users', 'roles']

}



module.exports =  database;

  // let db = {}
  // db.conn = connection;
  // db.importModels = () => {
  //   let user = connection().import("../models/user.js");
  //   let role = connection().import("../models/role.js");
  // }
 
  // module.exports = db;
  














// export default new Sequelize('mecanicapp', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//     pool: {
//       max: 5,
//       idle: 30000,
//       acquire: 60000,
//     }
//   });

 
  // const dir = path.join(__dirname + 'models')
  // fs.readdirSync(dir).forEach( fileName => {
  //   const modelDir = path.join(__dirname + fileName);
  //   const model = sequelize.import(modelDir);
  //   database.models[model.name] = model;
  // });

  // Object.keys(database.models).forEach(key =>{
  //   database.models[key].associate(database.models)
  // })

  // return database
