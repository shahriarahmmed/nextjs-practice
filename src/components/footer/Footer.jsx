import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Shahriar. All rights reserve</div>
        <div>
          <div className={styles.social}>
            <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Shahriar Facebook"></Image>
            <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Shahriar Instagramk"></Image>
            <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Shahriar Twitter"></Image>
            <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Shahriar Youtube"></Image>
          </div>
        </div>
    </div>
  )
}

export default Footer