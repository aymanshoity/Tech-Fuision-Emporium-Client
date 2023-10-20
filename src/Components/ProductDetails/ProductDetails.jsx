
import {  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { saveProduct } from "../Utility/localStorage";



const ProductDetails = () => {
    const { id}  = useParams()
    const loadedProduct = useLoaderData()
    
    const {photo, name, brand, type, price, ratings,details} = loadedProduct
    console.log(id,loadedProduct)

    const handleAddToCart=(id)=>{
         console.log(id)
         saveProduct(id)
         Swal.fire('Product Added Successfully!')
         
         
    }
    return (
        <div className="lg:w-[1280px] mx-auto my-20 p-6">
            <div className="card w-full bg-base-300 shadow-xl">
                <figure><img src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Brand Name: {brand} </h2>
                    <h2> <b>Product Name:</b> <span className="text-blue-600 font-bold">{name}</span></h2>
                
                    <p><b>Device :</b>{type}</p>
                    <p><b>Details:</b> {details}</p>
                    <p><b>Price :</b>{price}$</p>
                    <p><b>Rating Star:</b> {ratings}</p>
                    <div className="card-actions ">
                        <button onClick={()=>handleAddToCart(id)} className="btn bg-blue-600 text-white">Add to Cart</button>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDetails;