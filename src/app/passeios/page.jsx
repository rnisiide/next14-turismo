import PostCard from "@/components/postCard/postCard";
import styles from "./passeios.module.css";
import { getPasseios, getPasseiosTemp } from "@/lib/data";


// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {

  // FETCH DATA FROM DATASET
  const passeios = await getPasseiosTemp();

  // FETCH DATA WITHOUT AN API
  //const passeios = await getPasseios();



  return (

    <div className={styles.container}>
      {passeios.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>

      ))}

    </div>


  )
}

export default BlogPage;