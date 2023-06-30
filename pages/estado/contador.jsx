import ContadorDisplay from '@/components/ContadorDisplay'
import { useState } from 'react'

export default function contador() {
    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <h1>Contador</h1>
            <ContadorDisplay numero={numero}></ContadorDisplay>
            <div>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </div>
    )
}
