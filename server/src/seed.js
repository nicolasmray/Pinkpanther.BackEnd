require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const { conn, Customer, Cart, Product, Order, Category, Favorite, Review } = require("./db");
const sequelize = conn;

const productsData = [
      {
        "name": "top deportivo",
        "photo": "https://http2.mlstatic.com/D_NQ_NP_700436-MLA54122093073_032023-O.webp",
        "size": "5",
        "color": "verde esmeralda",
        "priceEfectivo": 10800,
        "priceCuotas": 14050,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "top deportivo bretel ancho",
        "photo": "https://acdn.mitiendanube.com/stores/001/137/972/products/7969d381-47fe-4f2a-8007-67f4dda6e5f2-1193a49da20d78f88b17037842097405-1024-1024.jpeg",
        "size": "1, 2",
        "color": "marron",
        "priceEfectivo": 10200,
        "priceCuotas": 13280,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "sudadera",
        "photo": "https://dcdn.mitiendanube.com/stores/001/131/681/products/3-1402-4ed4da8fedb902b51216983327223071-1024-1024.jpeg",
        "size": "1",
        "color": "naranja",
        "priceEfectivo": 10800,
        "priceCuotas": 14050,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "remera con manga corta",
        "photo": "https://acdn.mitiendanube.com/stores/003/200/878/products/1633113599_43252ae92efbebde09224f4b42c5d4e1-1403071-4e61e0e03c6d9fe79f16848690358032-1024-1024.jpeg",
        "size": "3",
        "color": "negro",
        "priceEfectivo": 12900,
        "priceCuotas": 16800,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "musculosa pupera",
        "photo": "https://http2.mlstatic.com/D_NQ_NP_640293-MLA73835424775_012024-O.webp",
        "size": "unico",
        "color": "negro",
        "priceEfectivo": 10200,
        "priceCuotas": 13280,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "top sublimado red",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2kVPOPzVYJZHFrqljJ-SB5Jra80X0jWm3UyFzeXa8w&s",
        "size": "3",
        "color": "celeste y verde",
        "priceEfectivo": 16500,
        "priceCuotas": 21450,
        "enable": false,
        "quantity": "1"
      },
      {
        "name": "calza corta",
        "photo": "https://acdn.mitiendanube.com/stores/001/308/516/products/calza-corta1-3c32563f410f2e79af16141961024915-640-0.jpeg",
        "size": "2",
        "color": "negro",
        "priceEfectivo": 13800,
        "priceCuotas": 19950,
        "enable": true,
        "quantity": "2"
      },
      {
        "name": "biker",
        "photo": "https://acdn.mitiendanube.com/stores/701/011/products/biker-flores-piopy1-3ec90adb9fbb9bebae16305022914715-640-0.jpg",
        "size": "2, 4",
        "color": "sublimado flores",
        "priceEfectivo": 14700,
        "priceCuotas": 19100,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "capri",
        "photo": "https://www.vandalia.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/8/0/8092_1.jpg",
        "size": "3",
        "color": "fucsia con negro",
        "priceEfectivo": 16500,
        "priceCuotas": 21450,
        "enable": true,
        "quantity": "1"
      },
      {
        "name": "falda pantalon recta",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEnatLhZ_tQ7p_CjxCbu8h5a-IZQIG7jj_eN0RdVwGA&s",
        "size": "1, 3",
        "color": "negro",
        "priceEfectivo": 11400,
        "priceCuotas": 14850,
        "enable": true,
        "quantity": "2"
      },
      {
        "name": "short algodon",
        "photo": "https://http2.mlstatic.com/D_NQ_NP_667840-MLA47166699102_082021-O.webp",
        "size": "1",
        "color": "rojo",
        "priceEfectivo": 10200,
        "priceCuotas": 13280,
        "enable": true,
        "quantity": "1"
      },    
      {
        "name": "calza larga",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9nJWwwgHZwkXr2NXbej_gqQVa_K5k9-b0V8T3TSjag&s",
        "size": "2",
        "color": "bordo",
        "priceEfectivo": 38000,
        "priceCuotas": 49400,
        "enable": true,
        "quantity": "1"
      }
]


async function seedDatabase() {
  try {
    await sequelize.sync({ alter: true });
    console.log(`Creando PRODUCTS en HOST ${DB_HOST}, DATABASE ${DB_NAME}`)
    await Product.bulkCreate(productsData);

    console.log('Datos insertados correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar datos en la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
