const { Product } = require('../db');

//eliminar producto
const deleteProduct = async (id) => {
    //busco el producto en la base de datos
    const findProduct = await Product.findOne({
        where: {
            id: id
        },
    })
    if(!findProduct){
        throw new Error('No se encontro el producto')
    } else{
        await findProduct.destroy()
    }
    return findProduct
}

module.exports = deleteProduct;