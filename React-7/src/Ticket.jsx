import React from 'react';
import "./Ticket.css"
import TicketNum from './TicketNum.jsx';

export default function Ticket({ticket }) {
  return (
    <div className='ticket'>
        <p>Ticket</p>
      {ticket.map((num, index) => (
        <TicketNum key={index} num={num} />
      ))}
    </div>
  );
}
