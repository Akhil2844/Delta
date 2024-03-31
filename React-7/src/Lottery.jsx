import "./Lottery.css"
import { useState } from "react"
import Ticket from "./Ticket.jsx";
import { getTicket,sum } from "./helper"

export default function Lottery({n=3,winCondition})
{
  let [ticket,setticket]=useState(getTicket(n))
  let isWinning=winCondition(ticket);
  let buyTicket=()=>
  {
    setticket(getTicket(3));
  }
    return(
        <div>
            <h2>Lottery Game</h2>
              <Ticket ticket={ticket}></Ticket>
            <br />
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won! "}</h3>
        </div>
    )
}