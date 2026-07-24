import './App.css'
import LinksList from './components/Form list/FormList';
import Form from './components/Form/Form'
import type { LinkItem } from './Links';
import { useState } from 'react';
import styles from './components/Form/Form.module.css'


function App() {
 const [links, setLinks] = useState<LinkItem[]>([])

 const onSave = (newLink: LinkItem) =>{
  setLinks((prevLinks) => {
    console.log(prevLinks)
    return [...prevLinks, newLink]
  })
 }

  return (
    <>
    < Form onSave={onSave}/>
    <div className={styles.savedLinks}>
      <h1>Saved-Links</h1>
    
    <LinksList links={links} />
     </div>;
    </>
  )
}

export default App
