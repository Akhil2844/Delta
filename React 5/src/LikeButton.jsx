import { useState } from "react"

function init()
{
    console.log("init was excuted");
    return Math.random();
}
export default function LikeButton()
{
    let [IsLiked,setIsLiked]=useState(init());

    let [Count,setCount]=useState(0);

    let toggleLiked=()=>{
         setIsLiked(!IsLiked);
        //  setCount(Count+1);
         setCount(Count+1);
         console.log("Component was rendered")

        //  callback

        // setCount((currCount)=>
        // {
        //     return currCount+1;
        // })

        // setCount((currCount)=>
        // {
        //     return currCount+1;
        // })

        // setCount(25);
    }
    let styles={color:"red"}

  
    return(
        <div>
            <p>Clicks: {Count}  </p>

                <p onClick={toggleLiked} >
                    {
                        IsLiked ? (<i className="fa-solid fa-heart" style={styles}></i>):
                        (<i className="fa-regular fa-heart"></i>)
                    }
             
            </p>
        </div>
    )
}