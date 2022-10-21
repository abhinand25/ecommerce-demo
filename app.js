const {read, create} = require('./db');
const {read, create,deletes} = require('./db');

//get product
const getProduct = async () => {
 try{
  const products = await read('product');
  console.log('products:',products)
  console.log('products:',products);
 } catch (error) {
  console.log('error: ', error);
   }
   name: 'wireless keyboard',
   price: 800,
}
await create('product/3',product) 
await create('product/3',product);
catch (error) {
console.log('error: ', error)
}

createProduct(); //create call

//delete product
const deleteProduct = async () => {
    try{
      const product = await deletes('product/3/price');
      console.log('delete:',product);
    } catch(error) {
        console.log('error:',error);
    }
}

deleteProduct();