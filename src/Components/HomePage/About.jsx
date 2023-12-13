

const About = () => {
    return (
        <div className="lg:w-[1280px] mx-auto my-20 p-6">
            <h2 className='text-4xl text-center my-10 underline underline-offset-8'>About Us</h2>
            <div className="hero min-h-screen bg-fixed " style={{ backgroundImage: 'url(https://i.ibb.co/nRk1r2f/watch.png)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content  ">
                    <div className="flex flex-col lg:flex-row items-center justify-around gap-6">


                        <div className="text-left max-w-md text-white">
                            <h1 className="mb-5 text-3xl  ">Hello there,</h1>
                            <p className="mb-5 text-xl ">We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss.</p>

                            <div className="flex justify-center lg:justify-start">
                                <button className="btn   text-xl">Get Started</button>
                            </div>

                        </div>

                        <div>
                            <img className="w-[400px] h-[250px] rounded-lg mr-8" src="https://i.ibb.co/nRk1r2f/watch.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;