import Lista from "@/components/Lista"
import Item from "@/components/Item"

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item #01" />
                <Item conteudo="item #02" />
                <Item conteudo="item #03" />
            </Lista>
        </div>
    )
}