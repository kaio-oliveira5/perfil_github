import style from './Perfil.module.css';

// export default () => { pode ser usado qualquer uma dessas funções.
// export default function() {

//  essa função precisa fazer o export no final.
const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={style.header}>
            <img className={style.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={style.name}> 
                {nomeUsuario}
            </h1>
        </header>
    )
// }
}

export default Perfil;