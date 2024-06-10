import styles from './sobreMim.module.css';
import fotoCapa from "assets/sobre_mim_capa.png";
import PostModelo from 'componentes/postModelo';
import fotoSobreMim from "assets/minha_foto.png";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
                <h3 className={styles.subtitulo}>
                     Olá, eu sou Maitê!
                </h3>

                <img
                    src={fotoSobreMim}
                    alt="Foto Maitê"
                    className={styles.fotoSobreMim}
                    />
             <p  className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluna de Front-end na Alura e estou feliz de te ver por aqui.
             </p>
    
             <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Enfermagem na Universidade Federal de Uberlândia (UFU), me formei e logo em seguida retornei como docente. 
             </p>
    
             <p className={styles.paragrafo}>
                Com isso tive minha experiência na docência e aprendi muito enquanto ministrava as aulas.
             </p>
    
             <p className={styles.paragrafo}>
                Passou o tempo, formei família e me dediquei 9 anos exclusivamente a ela. 
             </p>
    
             <p className={styles.paragrafo}>
                Minha história com programação começou quando fui convidada pelo grupo Oracle Next Education a estudar programação. Eu aprendi o básico de várias linguagens, como HTML, CSS, JavaScript. Eu estou gostando muito de estudar programação, e estudo ReactJs hoje.
                
             </p>
             
             <p className={styles.paragrafo}>
             Desde então, tem sido aprendizados atrás de aprendizados. A Alura é uma escola excelente! Hoje sou muito feliz de ter a oportunidade de estudar e me aprofundar cada vez mais!
             </p>
        </PostModelo>
    )
}
