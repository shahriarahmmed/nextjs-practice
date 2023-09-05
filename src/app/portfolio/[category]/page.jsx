import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Velit est dolor 
             alias? Blanditiis, dolorem laudantium
              cupiditate qui fuga quis temporibus 
              maiores debitis neque nam aliquam 
              quisquam suscipit, at totam saepe 
              optio voluptates magnam in ipsa 
              eligendi accusamus. Distinctio, est 
              provident.</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Minimal Single Product</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet 
            consectetur adipisicing elit. 
            Sequi inventore, voluptate in 
            ullam, praesentium, consectetur 
            ipsam expedita consequuntur 
            impedit minima blanditiis fuga 
            illum minus excepturi distinctio
            repellendus. Labore, sed quos 
            doloribus iure in non distinctio
            esse quam! Libero, maiores dolorum?</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Category