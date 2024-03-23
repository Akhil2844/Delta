import Product from "./Product.jsx"

function ProductTab()
{
    return(
        <div>
            <Product title="Laptop" price={60000}  />
            <Product title="Phone" price={20000}  />
            <Product title="Pen" price={100}/>

        </div>
    );

}

export default ProductTab;