import Product from "./Product.jsx"

function ProductTab()
{
    let styles={
        display:"flex",
        flexWrap:"nowwrap",
        // justifyContent:"center",
        // alignItems:"center",
        flexDirection: "row"
    }
    return(
        <div style={styles}>
           
            <Product title="Logitech MX Master" index={0}/>
            <Product title="Apple Pencil (2nd Gen)" index={1}/>
            <Product title="Zebronics Zeb-transformer" index={2}/>
            <Product title="Petronics Toad 23" index={3}/>

        </div>
    );

}

export default ProductTab;