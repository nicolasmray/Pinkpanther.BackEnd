require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

  // const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
  //     logging: false, // set to console.log to see the raw SQL queries
  //     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  //   }
  // )

const sequelize = new Sequelize( `${DB_PORT}` )

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: DB_HOST, // Your database host (provided by Render)
//   username: DB_RENDER_USER, // Your database username
//   password: DB_RENDER_PASSWORD, // Your database password
//   database: DB_RENDER_NAME,
// })

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Customer, Cart, Product, Order, Category } = sequelize.models;

Customer.belongsToMany(Cart, { through: "CustomerCart" });
Cart.belongsToMany(Customer, { through: "CustomerCart" });

Product.belongsToMany(Cart, { through: "ProductCart" });
Cart.belongsToMany(Product, { through: "ProductCart" });

Category.hasMany(Product, { foreignKey: "idCategory", as: "products" });
Product.belongsTo(Category, { foreignKey: "idCategory", as: "products" });

Order.belongsTo(Cart);
Cart.hasOne(Order);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
