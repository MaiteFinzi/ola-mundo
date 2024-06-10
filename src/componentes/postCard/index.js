import { Link } from 'react-router-dom';
import styles from './post.module.css';
import BotaoPrincipal from 'componentes/botaoPrincipal';

export default function PostCard({post}) {
    console.log('Post:', post);

    if (!post || !post.id) {
        return null; // ou retornar um componente alternativo
    }

    return (
        <Link to={ `/posts/${post.id}`}>
               <div className={styles.post}>
                 <img
                   className={styles.capa}
                   src={`/assets/posts/${post.id}/capa.png`}
                   alt='Imagem de capa do post'
              />

                  <h2 className={styles.titulo}>{post.titulo}</h2>

                  <BotaoPrincipal>Ler</BotaoPrincipal> 
                </div>
        </Link>
        
    );
}