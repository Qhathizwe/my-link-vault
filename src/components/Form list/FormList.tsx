import React from 'react'
import type { LinkItem } from '../../Links'
import { LinkCard } from '../Cards Props/LinkCard'

interface LinkListProps {
    links : LinkItem[];
    onEdit : (id: number) => void
}

export const LinksList: React.FC<LinkListProps> = ({links, onEdit}) => {
  return (
    <div>
        {links.map((listItem) =>(
           <LinkCard key={listItem.id}  
           link={listItem}
           onEdit={onEdit} 
          
           />
        ))}
    </div>
  )
}

export default LinksList