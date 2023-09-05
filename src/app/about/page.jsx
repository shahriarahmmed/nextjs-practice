import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
          ></Image>
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>Handicrafting award wining digital experience</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Ipsum doloremque, dolore
            vero porro placeat optio fugit accusantium?
            Ut pariatur vero hic asperiores mollitia, illo
            minus beatae libero maiores nihil ea consequatur
            officiis at quae in eveniet itaque inventore iusto
            laboriosam ipsa porro aliquid? Repudiandae fugit
            enim a ea accusamus, nostrum id recusandae rerum
            culpa vero autem, earum quos laudantium nesciunt 
            voluptatem,
            <br></br>
            <br></br> 
            quisquam explicabo exercitationem corrupti 
            eveniet at. Possimus delectus amet distinctio ipsum minima
            nulla nisi quam quasi quo iste vel commodi fuga dolor repudiandae
            asperiores ut, illo neque natus modi id, 
            necessitatibus quas! Dicta veniam nisi totam amet
            beatae excepturi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam harum suscipit error magni earum sint
            quibusdam, cum amet quae dicta iusto. Nemo in 
            facilis maiores reprehenderit voluptatibus 
            quisquam accusamus similique dolorem earum sint
            totam minima magnam id, animi vel inventore.
            <br></br>
            <br>
            </br> - Creative Illustration 
            <br></br>
            <br></br> - Dynamic Websites 
            <br></br>
            <br></br> - Fast and Handy Mobile App
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  )
}

export default About
