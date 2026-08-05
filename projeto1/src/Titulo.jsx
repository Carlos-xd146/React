import { useState } from "react";
function Titulo({ cor }) {
    const [texto, setTexto] = useState("Um titulo do estado inicial");
    const [inputText, serImputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text"/>
            <button onClick={()=>{setTexto("Mudei via botao")}}>Mudar</button>
            <button onClick={clicou}>mudou input</button>
        </div>
    )
}

export default Titulo