const Inputcom1=({inputValue1,setInputValue1})=>{
return(
    <div className="input-group mb-3">
    <input 
    value={inputValue1}
    onInput={(e) => setInputValue1(e.target.value)}
    type="text" 
    className="form-control" 
    placeholder="enter first number " aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  </div>

)
};

const Inputcom2=({inputValue2,setInputValue2})=>{
    return(
        <div className="input-group mb-3">
        <input 
        value={inputValue2}
        onInput={(e) => setInputValue2(e.target.value)}
        type="text" 
        className="form-control" 
        placeholder="enter second number " aria-label="Recipient's username" aria-describedby="button-addon2"></input>
      </div>
    
    )
    };
export {Inputcom1,Inputcom2};