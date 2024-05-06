require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const { conn, Customer, Cart, Product, Order, Category, Favorite, Review } = require("./db");
const sequelize = conn;

const productsData = [
      {
        "name": "top con recorte",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997769/ybcjk5i37qsxpsge4j6s.jpg",
        "size": "5",
        "color": "negro",
        "priceEfectivo": 11000,
        "priceCuotas": 14050,
        "enable": true,
        "quantity": "2",
        "supplier": "pink panther",
        "Categories": ["tops", "new in"]
      },
      {
        "name": "top tiras cruzadas",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997771/j4obyrttt1qkh22qv7h9.jpg",
        "size": "2",
        "color": "azul",
        "priceEfectivo": 10200,
        "priceCuotas": 13280,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["tops"]
      },
      {
        "name": "top tank dynamic",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997778/or9zslt4g8tixiuhhq6k.png",
        "size": "2",
        "color": "estampado",
        "priceEfectivo": 9000,
        "priceCuotas": 11000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["tops", "sale"]
      },
      {
        "name": "sudadera de mesh",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997748/z0mtjoulgnifqfu9kowa.jpg",
        "size": "1",
        "color": "verde",
        "priceEfectivo": 12500,
        "priceCuotas": 14500,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["remeras", "sale"]
      },
      {
        "name": "musculosa mesh",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997749/lrafyndvdjgni5ktqenz.png",
        "size": "3",
        "color": "rosado",
        "priceEfectivo": 12900,
        "priceCuotas": 16800,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["remeras"]
      },
      {
        "name": "musculosa secado rapido",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997734/rdzkfu7jpnae2k2guttv.jpg",
        "size": "1",
        "color": "negro",
        "priceEfectivo": 10200,
        "priceCuotas": 13280,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["remeras", "new in"]
      },
      {
        "name": "remera mangas largas",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997735/s1wq0vywwq1twdsuio3p.jpg",
        "size": "3",
        "color": "bordo",
        "priceEfectivo": 16500,
        "priceCuotas": 21450,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["remeras", "sale"]
      },
      {
        "name": "remera mangas largas",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997735/kmgotmwaalqwuduevmei.png",
        "size": "4",
        "color": "negro",
        "priceEfectivo": 18500,
        "priceCuotas": 21450,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["remeras", "sale"]
      },
      {
        "name": "buzo termopolar deportivo",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997668/g8zfq5j4vizbo0oo5sh7.jpg",
        "size": "2",
        "color": "verde",
        "priceEfectivo": 20000,
        "priceCuotas": 23000,
        "enable": true,
        "quantity": "2",
        "supplier": "pink panther",
        "Categories": ["new in"]
      },
      {
        "name": "buzo termopolar deportivo",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997668/gwu0kvpuhadguqfb2pvx.jpg",
        "size": "3",
        "color": "beige",
        "priceEfectivo": 21000,
        "priceCuotas": 24000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["new in"]
      },
      {
        "name": "buzo & calza corta",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997336/swtbu6yjemu8lv2ljtuc.png",
        "size": "4",
        "color": "lila",
        "priceEfectivo": 60000,
        "priceCuotas": 69000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["conjuntos", "calzas"]
      },
      {
        "name": "buzo friza & calza larga",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997333/zv5ly8pmls5bo4am6eqy.jpg",
        "size": "2",
        "color": "verde",
        "priceEfectivo": 70000,
        "priceCuotas": 79000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["conjuntos", "calzas"]
      },
      {
        "name": "calza capri labyrinth",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997635/qm0ggo7siym8haahv9s9.jpg",
        "size": "3",
        "color": "rojo",
        "priceEfectivo": 20000,
        "priceCuotas": 23000,
        "enable": true,
        "quantity": "2",
        "supplier": "pink panther",
        "Categories": ["calza"]
      },
      {
        "name": "calza nebulola estampada",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997635/exvnoeiwnptr4iuzcopy.jpg",
        "size": "1",
        "color": "azul",
        "priceEfectivo": 15000,
        "priceCuotas": 17000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["calzas", "sale"]
      },    
      {
        "name": "ciclista reversible",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1714997636/wubxe1q7rif0xmc8acxu.png",
        "size": "2",
        "color": "azul",
        "priceEfectivo": 21000,
        "priceCuotas": 24000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["calzas", "new in"]
      },
      {
        "name": "falda pantalón",
        "photo": "https://res.cloudinary.com/dtjizedfr/image/upload/v1715000582/itf7iifjlp103ip5guhr.png",
        "size": "3",
        "color": "azul",
        "priceEfectivo": 21000,
        "priceCuotas": 24000,
        "enable": true,
        "quantity": "1",
        "supplier": "pink panther",
        "Categories": ["falda pantalón", "new in"]
      }
]

const categoriesData = [
      {
        "name": "calzas",
        "isActive": true,
        "subcategories": ["biker", "capri", "corta", "larga"]
      },
      {
        "name": "new in",
        "isActive": true,
        "subcategories": ["otoño", "invierno"]
      },
      {
        "name": "tops",
        "isActive": true,
        "subcategories": ["bretel ancho", "con tazas", "manga larga", "nike"]
      },
      {
        "name": "sale",
        "isActive": true,
        "subcategories": []
      },
      {
        "name": "remeras",
        "isActive": true,
        "subcategories": ["musculosas", "remeras", "sudaderas"]
      },
      {
        "name": "falda pantalón",
        "isActive": true,
        "subcategories": ["campana", "recta"]
      },
      {
        "name": "conjuntos",
        "isActive": true,
        "subcategories": ["cortos", "largos"]
      },
      {
        "name": "about us",
        "isActive": true,
        "subcategories": []
      }
        
];


async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log(`Creando PRODUCTS en HOST ${DB_HOST}, DATABASE ${DB_NAME}`);
    
    const categoriesMap = {};
    for (const categoryData of categoriesData) {
      const category = await Category.create(categoryData);
      categoriesMap[categoryData.name] = category;
    }

    for (const productData of productsData) {
      const product = await Product.create(productData);
    }

    const products = await Product.findAll();
    for (const product of products) {
      const productData = productsData.find(item => item.name === product.name);
      for (const categoryName of productData.Categories) {
        const category = categoriesMap[categoryName];
        await product.addCategory(category);
      }
    }

    console.log('Datos insertados correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar datos en la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();

