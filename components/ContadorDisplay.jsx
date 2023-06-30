export default function ContadorDisplay(props) {
    return (
        <div
            style={{
                height: '100px',
                width: '100px',
                borderRadius: '100px',
                backgroundColor: '#222',
                color: '#fff',
                fontSize: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {props.numero}
        </div>
    )
}
