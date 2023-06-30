import { useState } from 'react'

export default function mouse() {
    // React Hooks
    /*
    const arrayX = useState(0)
    let x = arrayX[0]
    const alterarX = arrayX[1]
    */

    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const style = {
        backgroundColor: 'red',
        color: 'pink',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }
    return (
        <>
            <div style={style} onMouseMove={quandoMover}>
                <div>Eixo X: {x}</div>
                <div>Eixo Y: {y}</div>
            </div>
        </>
    )
}
