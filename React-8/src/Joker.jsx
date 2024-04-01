import { useEffect, useState } from "react";
export default function Joker()
{
    const url="https://official-joke-api.appspot.com/random_joke";
    let[joke,setJoke]=useState({});
    
    const getNewJoke=async()=>{
        let response=await fetch(url);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
        return jsonResponse
     
    }

    useEffect(()=>{async function getfirstjoke()
    {
        let response=await fetch(url);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }
       
    },[])
    return(
        <div>
            <h3>Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}