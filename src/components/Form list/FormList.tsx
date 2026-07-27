import React from 'react'
import type { LinkItem } from '../../Links'
import { LinkCard } from '../Cards Props/LinkCard'
import styles from '../Form/Form.module.css'

interface LinkListProps {
    links : LinkItem[];
    onEdit : (id: number) => void
    onDelete: (id: number) => void
}

export const LinksList: React.FC<LinkListProps> = ({links, onEdit, onDelete}) => {
  return (
    <div>
      <div className={styles.cardsItems}>
        {links.map((listItem) =>(
           <LinkCard key={listItem.id}  
           link={listItem}
           onEdit={onEdit}
           onDelete={onDelete}
            />
        ))}
      </div>
    </div>
  )
}

export default LinksList