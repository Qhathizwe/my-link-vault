import React from 'react'
import type { Links } from '../../Links'
import { LinkCard } from '../Cards Props/LinkCard'

interface LinkListProps {
    links : Links[];
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
