import './Item.css';  

function Item(props)
{
const itemName=props.name;
    return(<>
    <p className="Nirma">{itemName}</p>
    {props.children}
    </>)

}
export default Item;