import Inputcom from "./Inputcom";
const AddButton=({sign,addclick})=>{
return(
<>

    <button onClick={addclick} type="button" className="btn btn-secondary">{sign}</button>
</>
);

};

const MulButton=({sign,muliclick})=>{
    return(
    <>
    
        <button onClick={muliclick} type="button" className="btn btn-secondary">{sign}</button>
    </>
    );
    
    };

 const DivButton=({sign,divclick})=>{
        return(
        <>
        
            <button onClick={divclick} type="button" className="btn btn-secondary">{sign}</button>
        </>
        );
        
        };
        const SubButton=({sign,subclick})=>{
            return(
            <>
            
                <button onClick={subclick} type="button" className="btn btn-secondary">{sign}</button>
            </>
            );
            
            };

            const ModButton=({sign,modclick})=>{
                return(
                <>
                
                    <button onClick={modclick} type="button" className="btn btn-secondary">{sign}</button>
                </>
                );
                
                };


export {AddButton,MulButton,DivButton,SubButton,ModButton};

