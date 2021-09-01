const node_environment = process.env.NODE_ENV || 'development'

if (node_environment === 'development') {
  
  require('dotenv').config()

}

module.exports = {

  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": process.env.DB_DIALECT 

}


  // "username": "leo_giulia",
  // "password": "horo1234",
  // "database": "horo-db",
  // "host": "horo-database.cmemu12u3gaw.sa-east-1.rds.amazonaws.com",
  // "port": "3306",
  // "dialect": "mysql"

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
