export default function Price({oldPrice,newPrice})
{
    let oldStyles=
    {
        textDecorationLine:"Line-through",
    }
    let newStyles=
    {
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"20px",
         borderBottomRightRadius:"20px"
    }
    return(
        <div className="components" style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
   
}