import CampoTexto from "../CampoTexto/CampoTexto";
import styles from  './Formulario.module.css'


const Formulario = () => {

    return (
        <section className={styles.formulario}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )

}

export default Formulario 