import styles from './postModelo.module.css';

export default function PostModelo({  fotoCapa, titulo, children }) {
    return (
      <article className={styles.PostModeloContainer}>
        <div 
            className={styles.fotoCapa} 
            style={{backgroundImage: `url(${fotoCapa})`}}
        ></div> 

        <h2 className={styles.titulo}>
            {titulo}
        </h2>

        <div className={styles.postConteudoContainer}>
            {children}
        </div>
      </article>
    )
  }
  