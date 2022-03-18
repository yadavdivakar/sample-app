//import Person from"./Car";
//import { useState, useEffect} from "react";
//import InputComponent from "./components/InputComponent";
//import ShowInput from "./components/ShowInput";
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import About from "./Pages/About"
//import Home from "./Pages/Home"
//import Contact from "./Pages/Contact";
//import Car from "./Pages/Car";
import FormBox from "./components/FormBox/FormBox";
import "./App.css"
import Login from "./components/login/Login"
import SignUp from "./components/SignUp";





function App() {
  
  /*const [Animal, setAnimal] = useState ("");
  
  const [name, setName] = useState("")

  function updateCat() {
    setAnimal("https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg")
  }
    

  function updateDog() {
    setAnimal("https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/580540_mjznrj.jpg")
  }
  
      

  function newChange(e) {
    setName(e.target.value)

  }

  const [val, setVal] = useState('')


  function handleChange(event) {
    setVal(event.target.value)
  };

*/
  return (
     
    <div className="App">

      
      

          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<FormBox></FormBox>} ></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/SignUp" element={<SignUp></SignUp>} ></Route>
            </Routes>
          </BrowserRouter>
      
      
      
      
      

      
    
      </div>

    );

}

/*
const fruits = [    
  {      name: 'Apple',      units: 3,      price: 0.25,    },    
  {      name: 'Mango',      units: 6,      price: 0.35,    },    
  {      name: 'Banana',      units: 4,      price: 0.15,    },  
];

fruits.map(myfunction);

function myfunction(fruit, index) {
  return `${index+1}. ${fruit.units} units of ${fruit.name} cost ${fruit.price * fruit.units} `
}


<h2>Hello</h2>
      <Footer></Footer><br></br>
      <div>
        <Person personName="john" personAge="25"></Person>
      </div><br></br>

      
      <button onClick={updateCat}>show cat</button><br></br>

      <button onClick={updateDog}>show Dog</button><br></br>
      
      <div>
        <label>Enter your name:</label>

        <input type="text" value={name} onChange={newChange}></input>

      </div>

      <h1>{name}</h1>


      <img src={Animal} width="50%"></img>

      <InputComponent val={val} handleChange={handleChange}></InputComponent><br></br>

      <ShowInput val={val}></ShowInput>

*/

export default App;

