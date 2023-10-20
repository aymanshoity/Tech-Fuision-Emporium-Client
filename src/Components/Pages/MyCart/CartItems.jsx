import { Link } from "react-router-dom";


const CartItems = ({ item }) => {
    const { photo, name, brand, type, price, ratings, _id} = item
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-10 flex flex-col lg:flex-row">
                <div>
                    <figure><img src={photo} className="h-[350px] " /></figure>
                </div>
                <div className="card-body my-6">
                    <h2 className="card-title">{brand}</h2>
                    <p>Product Name: <span className="text-blue-600 font-bold">{name}</span></p>
                    <p>Device:{type}</p>
                    <p>Price: <span className="text-blue-600 font-bold">{price} $</span></p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="card-actions ">
                        <Link className="btn bg-blue-600 text-white">delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;