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
          <h1>{link.title}</h1>
          <p>{link.link}</p>
          <p>{link.description}</p>
          <p>{link.tags}</p>  
      </div>  
      <button onClick={() => onEdit(link.id)}>Edit</button>
      <button onClick={() => onDelete(link.id)}>Delete</button>
    </div>
  )
}

export default LinkCard
