

const SingleBrand = () => {
    const {brand}=useParams()
    const loadedData = useLoaderData();
    
    const [products, setProducts] = useState(loadedData)
    console.log({brand},loadedData,products)
    return (
        <div>
            <h2>Hello:</h2>
            <h2>Hello:</h2>
            <h2>Hello:</h2>
        </div>
    );
};

export default SingleBrand;