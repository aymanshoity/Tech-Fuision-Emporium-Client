

const AllBrands = () => {
    return (
        <div className="lg:w-[1280px] mx-auto my-20">
            <h2 className="underline underline-offset-8 lg:text-4xl text-center">Our Brands</h2>
            {/* all Brands */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-20">
                {/* Apple */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ZgGbVFg/xavier-wendling-e2d-Dvd-H3l-IY-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body my-10">
                        <h2 className="card-title">Apple</h2>
                        
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default AllBrands;