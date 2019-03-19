import Sequelize from 'sequelize'

module.exports = new Sequelize('mecanicapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    }
  });

 
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
