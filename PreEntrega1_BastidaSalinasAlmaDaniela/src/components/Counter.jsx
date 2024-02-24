import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const stock = 10;
    const onAdd = (expr) => {
        if(expr === "+"){
            if(value < stock){
                setValue(value + 1)
            }
            if (value === stock){
                setValue(value = 1)
            }
        }else{
            if(value <= stock){
                setValue (value - 1)
            }
        }
    }

    return(<>
    <div className="flex items-center justify-center my-auto mt-28">
    <button onClick={()=>onAdd("-")} disabled={value === 0}> - </button>
    <div>{value}</div>
    <button onClick={()=>onAdd("+")} disabled={value === stock}>+</button>
    <button onClick={()=> alert("Agregado al carrito")}>Agregar al carrito</button>
    </div>
    </>)
}

export default Counter;