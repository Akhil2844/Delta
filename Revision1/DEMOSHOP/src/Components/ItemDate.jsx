import "./ItemDate.css"

function ItemDate(props)
{

    const day=props.day;
    const month=props.month;
    const year=props.year;
   return( <div>
    <div className="date">
        <span>{day}</span>
        <span> {month}</span>
        <span> {year}</span>
    </div>
   </div>)
}

export default ItemDate