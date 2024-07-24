import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost, getPasseioTemp } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };


// export const generateMetadata = async ({ params }) => {
//     const { slug } = params;
//     const post = await getPost(slug)
//     return {
//         title: post.title,
//         description: post.desc,
//     };
// }


const SinglePostPage = async ({ params }) => {

    console.log(params)

    const { slug } = params;

    // FETCH DATA WITH AN API
    const passeio = await getPasseioTemp(slug);
    console.log(passeio)

    // FETCH DATA WITHOUT AN API
    // const post = await getPost(slug);

    return (

        <div className={styles.container}>
            {passeio.img && <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src={passeio.img}
                    alt=''
                    fill
                />
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{passeio.title}</h1>
                <div className={styles.detail}>
                    <div className={styles.content}>
                        {passeio.desc}
                    </div>

                </div>
                <div className={styles.desclonga}>
                    {passeio.longdesc}
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Valor:</span>
                    <span className={styles.detailValue}>R$ {passeio.price}</span>
                </div>
                <button className={styles.btn}>Reserve já!</button>

            </div>
        </div>


    )
}

export default SinglePostPage;