import Banner from "componentes/banner";
import styles from './inicio.module.css';
import posts from 'json/posts.json';
import PostCard from "componentes/postCard";


export default function Inicio() {
    return (

        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                          <PostCard post={post}/>
                    </li>
                ) )}
            </ul>
       </main>
       
    )
}