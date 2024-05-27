
import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Card from './Components/Card'

function App() {

  const response=[
    {
      itemName:"Nirma",
      itemDay:10,
      itemMonth:"June",
      itemYear:"1998"
    },

    {
      itemName:"surfexcel",
      itemDay:20,
      itemMonth:"July",
      itemYear:"2008"
    },

    {
      itemName:"Tide",
      itemDay:30,
      itemMonth:"August",
      itemYear:"2018"
    }
  ]
  return (
    <>
     {/* <Item name="Nirma"></Item>
    <ItemDate day="10" month="June" year="1998"></ItemDate>

    <Item name="Surfexcel"></Item>
    <ItemDate day="20" month="July" year="2008"></ItemDate>

    <Item name="Tide"></Item>
    <ItemDate day="30" month="August" year="2018"></ItemDate> */}
<Card>
    <Item name={response[0].itemName}>Hello Akhil this side</Item>
    <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate  day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate  day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    
    <br />
    <div className="akhil"> Hello Jee</div>

</Card>
   
   
    </>
  )
}

export default App
