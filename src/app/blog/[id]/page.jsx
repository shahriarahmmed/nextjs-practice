import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import {notFound} from "next/navigation"


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Unde aliquam facere 
            ut explicabo architecto aspernatur 
            magni cupiditate nisi, aperiam repudiandae
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16864829/pexels-photo-16864829.jpeg?auto="
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Doe</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost