require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;


const sequelize = new Sequelize( `${DB_PORT}` )



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


const { Customer, Cart, Product, Order, Category, Favorite } = sequelize.models;


Customer.belongsToMany(Cart, { through: "CustomerCart" });
Cart.belongsToMany(Customer, { through: "CustomerCart" });

Product.belongsToMany(Cart, { through: "ProductCart" });
Cart.belongsToMany(Product, { through: "ProductCart" });


Category.belongsToMany(Product, { through: "CategoryProduct", });
Product.belongsToMany(Category, { through: "CategoryProduct",  });

Order.belongsToMany(Cart ,{through: "OrderCart"});
Cart.belongsToMany(Order, {through: "OrderCart"});

Customer.belongsToMany(Favorite, {through: "FavoriteCustomer"});
Favorite.belongsToMany(Customer , {through: "FavoriteCustomer"});

Product.belongsToMany(Favorite, { through: "productFavorite" });
Favorite.belongsToMany(Product, { through: "productFavorite" });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
