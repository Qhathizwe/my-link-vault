import React from 'react'
import type { LinkItem } from '../../Links'
import { LinkCard } from '../Cards Props/LinkCard'

interface LinkListProps {
    links : LinkItem[];
}

export const LinksList: React.FC<LinkListProps> = ({links}) => {
  return (
    <div>
        {links.map((listItem) =>(
           <LinkCard key={listItem.id} 
           link={listItem} 
           
           />
        ))}
    </div>
  )
}

export default LinksList