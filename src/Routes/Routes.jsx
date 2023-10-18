import { createBrowserRouter } from "react-router-dom";
import Roots from "../Components/Roots";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/HomePage/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";
import MyCart from "../Components/Pages/MyCart/MyCart";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";



const Routes = createBrowserRouter([
    {path:'/',
    element:<Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>,},
        {path:'/addProduct',element:<AddProduct></AddProduct>},
        {path:'/myCart',element:<MyCart></MyCart> },
        {path:'/login',element: <Login></Login> },
        {path:'/register',element:<Register></Register> }

    ]
}
    
])
    


export default Routes;