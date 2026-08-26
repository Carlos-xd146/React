import './qdsEsquerdo.css'

export default function QdsEsquerdo(luz) {
    let classeLuz = ''
    if (luz['luz']) {
        classeLuz = 'luz'
    }

    return (
        <div className={`quadro ${classeLuz}`}>
        </div>
    );

}