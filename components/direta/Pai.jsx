import Filho from "./Filho"

export default function Pai(props) {
    return ( 
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Fernanda" familia={props.familia}/>
            <Filho nome="Robson" familia={props.familia}/>
            <Filho nome="Cheila"  {...props}/>
        </div>
    )
}