function handleClick(event) {
  console.log("Akhil");
  console.log(event);
}

function Bye() {
  console.log("Bye");
}

function handleMouse()
{
    console.log("Mouse Hover")
}

function handleDoubleclick()
{
 console.log("Double Clicked")
}
export default function Button() {
  return (
    <div>
        {/* handling click events*/}

      <button onClick={handleClick}>Click me</button>
      <p onClick={Bye}>This is written by me</p>

      {/* handling click events*/}
      <p onMouseOver={handleMouse}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        porro, illo accusamus dolorum impedit deleniti dolores, quis eius sit
        incidunt dolor nisi perspiciatis voluptates?
      </p>
      <button onDoubleClick={handleDoubleclick}>Double click me</button>
    </div>
  );
}
