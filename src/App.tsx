import './App.css'
import LinksList from './components/Form list/FormList';
import Form from './components/Form/Form'
import type { LinkItem } from './Links';
import { useState } from 'react';
import styles from './components/Form/Form.module.css'
import './components/Cards Props/CardProps.module.css'


function App() {
 const [links, setLinks] = useState<LinkItem[]>([])

 const add = (newLink: LinkItem) =>{
  setLinks((prevLinks) => {
    return [...prevLinks, newLink]
  })
 }
  const [editingLink, setEditingLink] = useState <LinkItem | null> (null)

  const editBtn = (id: number) =>{
    const LinkId = links.find(linkID => linkID.id === id)
    if (LinkId) setEditingLink(LinkId)
  }

  const updatedLink = (updated : LinkItem) => {
    setLinks (links.map(linkID => linkID.id === updated.id ? updated : linkID ))
    setEditingLink(null)
  }

  const Delete = (id: number) => {
    setLinks((prevLinks) => prevLinks.filter((links) => links.id !==id));
  };

  return (
    <>
    < Form onSave={add} key={editingLink?.id ?? 'new'} onEdit={updatedLink} editingLink={editingLink} />

    <div className={styles.savedLinksContainer}>
      <h1 className={styles.savedLinksTopic}>Saved-Links</h1>

    <div className={styles.SearchContainer}>
    <input type='text' placeholder='search by title, link, description or tag'/>
    <button className={styles.searchBtn}>Search</button>
    </div>

    <div>
    <LinksList links={links} onEdit={editBtn} onDelete={Delete}/>
    </div>

     </div>;
    </>
  )
}

export default App
