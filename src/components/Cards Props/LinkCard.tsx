import React from 'react'
import type {LinkItem} from '../../Links'
import styles from './CardProps.module.css'

type link_dt ={
    link : LinkItem ;
}

export const LinkCard: React.FC <link_dt> = ({link}) => {

  return (
    <div className={styles.cardContainer}>
        <h1>{link.title}</h1>
        <p>{link.link}</p>
        <p>{link.description}</p>
        <p>{link.tags}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default LinkCard
