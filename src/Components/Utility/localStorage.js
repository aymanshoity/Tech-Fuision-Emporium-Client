const getStoredProduct=()=>{
    const storedProduct=localStorage.getItem('product')
    if(storedProduct){
        return JSON.parse(storedProduct)
    }
    return [];
}

const saveProduct=id=>{
    const storedProduct=getStoredProduct()
    const exist=storedProduct.find(productID=> productID===id)
    if(!exist){
        storedProduct.push(id)
        localStorage.setItem('product',JSON.stringify(storedProduct))
    } 
}
export {saveProduct,getStoredProduct}