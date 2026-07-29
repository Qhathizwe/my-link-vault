import React from 'react'
import type {LinkItem} from '../../Links'
import styles from './CardProps.module.css'

type link_dt ={
    link : LinkItem ;
    onEdit:(id:number) => void
    onDelete: (id: number) => void
}

export const LinkCard: React.FC <link_dt> = ({link, onEdit, onDelete}) => {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cards}>      
          <h1 className={styles.title}>{link.title}</h1>
          <p className={styles.link}>{link.link}</p>
          <p className={styles.description}>{link.description}</p>
          <p className={styles.tags}>{link.tags}</p>  
      </div>  
      <button onClick={() => onEdit(link.id)}>Edit</button>
      <button onClick={() => onDelete(link.id)}>Delete</button>
    </div>
  )
}

export default LinkCard
