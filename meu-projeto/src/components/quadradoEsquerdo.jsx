import QdsEsquerdo from "./qdsEsquerdo";
export default function Qesquerdo() {
    
    
    const itens = [];
    for (let i = 0; i < 8; i++){
        itens.push(<QdsEsquerdo/>)
    }
    
    return (
        <div>

            <h1>Quadrado Esquerdo</h1>
            {itens}

            {/* <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/>
            <QdsEsquerdo/> */}
            

        </div>
    );
}