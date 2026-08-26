import QdsEsquerdo from "./qdsEsquerdo";
export default function Qdireito() {


    const itens2 = []
     for (let i = 0; i < 64; i++){
        if (i % 8 === 0) {
            // itens2.push(<QdsEsquerdo luz={true}/>)
            itens2.push(<br/>)
            // itens2.push(<QdsEsquerdo luz={true}/>)
        }
        itens2.push(<QdsEsquerdo/>)
        
    }

    return (
        <div>

            <h1>Quadrado Direito</h1>
            {itens2}

        </div>
    );
}