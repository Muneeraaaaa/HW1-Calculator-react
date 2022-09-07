import logo from './logo.svg';
import './App.css';
import { Inputcom1,Inputcom2 } from './Inputcom';
import {AddButton,MulButton,DivButton,SubButton,ModButton} from './Buttons';
import { useRef, useState } from 'react';
import Result from './Result';



function App() {


  const [result, setresult] = useState(0);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');


const inside1="Enter first number ";
const inside2="Eneter second number ";
const add="+";
const muli="*";
const sub="-";
const div="/";
const mod="%"


const addclick=()=>{
  const add=parseInt(inputValue1)+parseInt(inputValue2)
  setresult(add)
  
  console.log(add)

  // const newresult=parseInt(inputvalue1)-parseInt(inputvalue2)

}


const muliclick=()=>{
  const muli=parseInt(inputValue1)*parseInt(inputValue2)
  setresult(muli)
  console.log(muli)
}

const subclick=()=>{
  const sub=parseInt(inputValue1)-parseInt(inputValue2)
  setresult(sub)
}

const divclick=()=>{
  const div=parseInt(inputValue1)/parseInt(inputValue2)
  setresult(div)
}

const modclick=()=>{
  const mod=parseInt(inputValue1)%parseInt(inputValue2)
  setresult(mod)
}






  return (
<>
<div className="container text-center ">
  <div className="row">
    <div className="col fs-1">
      claculate 
    </div>
  </div>


  <div className="row">
    <div className="col">
   <Inputcom1 
   inputValue1={inputValue1}
   setInputValue1={setInputValue1} 
   />
    </div>

    <div className="col">
      <Inputcom2
      inputValue2={inputValue2}
      setInputValue2={setInputValue2}
    
      />
    </div>
  </div>


  <div className="row">
    <div className="col ">

    <AddButton 
    sign={add}
    addclick={addclick}
    />
 
    </div>
    <div className="col">
    <MulButton 
    sign={muli}
    muliclick={muliclick}
    />
 
    </div>
    <div className="col">
    <DivButton sign={div}
    divclick={divclick}
    />

    </div>
    <div className="col">
    <SubButton sign={sub}
    subclick={subclick}
    />
 
    </div>
    <div className="col">
    <ModButton sign={mod}
    modclick={modclick}
    />
    </div>
  </div>

  <div className="row">
    <Result 
    result={result}
    />
  </div>

</div>

</>
  );
}

export default App;
