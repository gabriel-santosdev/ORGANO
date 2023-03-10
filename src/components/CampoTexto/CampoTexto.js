import styles from './CampoTexto.module.css'


const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...` 



    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    
    return (
        <div className={styles.campo_texto}>

            <label>
                {props.label}
            </label>
            <input 
            value={props.valor} 
            onChange={aoDigitado}
            required={props.obrigatorio} 
            placeholder={placeholderModificada}
            />

        </div>

    )
}

export default CampoTexto 