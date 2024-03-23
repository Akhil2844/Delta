export default function MsgBox({username,textcolor})

{
    const style={color:textcolor};

    return(
        <div>
            <h2 style={style}>Heloo,{username}</h2>
        </div>
    )
}