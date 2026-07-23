import React from 'react'
import type {Links} from '../../Links'

type link_dt ={
    link : Links;
}

export const CardProps: React.FC <link_dt> = ({link}) => {

  return (
    <div>
        <h1>{link.title}</h1>
        <p>{link.link}</p>
        <p>{link.description}</p>
        <p>{link.tags}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}
