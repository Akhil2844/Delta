import Lottery from "./Lottery.jsx"
import './App.css'
import TicketNum from "./TicketNum.jsx"
import Ticket  from "./Ticket.jsx"
import { sum } from "./helper.js"

function App() {
  
let winCondition=(ticket)=>
{
return sum(ticket)===15;
}
  return (
    <>
     <Lottery n={3} winCondition={winCondition}></Lottery>
     {/* <TicketNum num={5}/>
     <TicketNum num={4}/>
     <TicketNum num={2}/> */}
     {/* <Ticket ticket={[0,1,2]}></Ticket> */}
    </>
  )
}

export default App
