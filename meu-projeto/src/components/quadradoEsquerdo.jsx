import QdsEsquerdo from "./qdsEsquerdo";
export default function Qesquerdo() {
    
    
    const grade = [
        3, 7, 10, 20, 25, 32, 43, 50
    ]

    const itens = [];

    for (let i = 0; i < 64; i++){
        if (i % 8 === 0) {
            itens.push(<br id={i}/>)
        }
        const ligar = grade.includes(i)
            
        itens.push(<QdsEsquerdo luz={ligar}/>)
    }
    
    return (
        <div>

            <h1>Quadrado Esquerdo</h1>
            {itens}
            

        </div>
    );
}