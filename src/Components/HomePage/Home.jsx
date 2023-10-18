import AllBrands from "./AllBrands";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <h2>welcome to the brand shop</h2>
            <Banner></Banner>
            <AllBrands></AllBrands>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;