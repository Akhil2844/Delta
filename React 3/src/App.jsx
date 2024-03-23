import './App.css'
import Title from "./components/Title"
import Description from './components/Description';
import ProductTab from './components/ProductTab';
import MsgBox from './components/MsgBox';

function App() {
   return (
     <div>
       { /* <Title/>
        <Description/>
        <Title/>
   <Description/> */  }

   <MsgBox username="Akhil" textcolor="yellow"/>
   <MsgBox username="This is your React App" textcolor="blue"/>

   <ProductTab/>
     </div>
   ) ;
   
   
   //<button>Hello World</button>// <p>Hello World</p>  //<h1>Hello World</h1>
}

export default App
