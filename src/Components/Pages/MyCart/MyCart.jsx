import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedProduct=useLoaderData()
    console.log(loadedProduct)
    
    return (
        <div>
            <h2>Look at my cart</h2>
        </div>
    );
};

export default MyCart;