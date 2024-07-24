import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";


const PostCard = ({ post }) => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={post.img}
                        alt='' fill className={styles.img} />
                </div>


            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.desc}</p>
                <Link href={`/passeios/${post.slug}`} className={styles.link}>LEIA MAIS</Link>

            </div>
        </div>

    )
};

export default PostCard;