import Product from "./Product.jsx"

function ProductTab()
{
    let options=["hitech","durable","fast"];
    // let options=[<li>hi-tech</li>,<li>durable</li>,<li>fast</li>]
    // let options2={a:"hitech",b: "durab",c:"akhil"};
  
    return(
        <div>
            <Product title="Laptop" price="60,000"  features={options} features2={{a:"hitech",b: "durab",c:"akhil"}} />
            {/* <Product title="Phone" price="20,000"  />
            <Product title="Pen" price={100}/> */}

        </div>
    );

}

export default ProductTab;