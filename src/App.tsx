import './App.css'
import LinksList from './components/Form list/FormList';
import Form from './components/Form/Form'
import type { LinkItem } from './Links';
import { useState } from 'react';
import styles from './components/Form/Form.module.css'
import './components/Cards Props/CardProps.module.css'

function App() {

 const [links, setLinks] = useState<LinkItem[]>(() => {
  const storedLinks = localStorage.getItem('links');
  return storedLinks ? JSON.parse(storedLinks) : [];
});

  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  

  const [searchQuery, setSearchQuery] = useState<string>('');

  const add = (newLink: LinkItem) => {
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks, newLink]
      localStorage.setItem('links', JSON.stringify(updatedLinks))
      return updatedLinks
    })
  }

  const editBtn = (id: number) => {
    const LinkId = links.find(linkID => linkID.id === id)
    if (LinkId) setEditingLink(LinkId)
  }

  const updatedLink = (updated: LinkItem) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map(linkID => linkID.id === updated.id ? updated : linkID);
      localStorage.setItem('links', JSON.stringify(updatedLinks)); // Sync storage on update
      return updatedLinks;
    });
    setEditingLink(null)
  }

  const Delete = (id: number) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((links) => links.id !== id);
      localStorage.setItem('links', JSON.stringify(updatedLinks)); // Sync storage on delete
      return updatedLinks;
    });
  };

  const filteredLinks = links.filter((item) => {
    const cleanQuery = searchQuery.trim().toLowerCase();
    if (!cleanQuery) return true;

    
    const matchTitle = item.title?.toLowerCase().includes(cleanQuery);
    const matchDesc = item.description?.toLowerCase().includes(cleanQuery);
    const matchLink = item.link?.toLowerCase().includes(cleanQuery);
    
    
    const matchTags = Array.isArray(item.tags)
      ? item.tags.some((tag) => tag.toLowerCase().includes(cleanQuery))
      : item.tags?.toLowerCase().includes(cleanQuery);

    return matchTitle || matchDesc || matchLink || matchTags;
  });

  return (
    <>
      <Form onSave={add} key={editingLink?.id ?? 'new'} onEdit={updatedLink} editingLink={editingLink} />

      <div className={styles.savedLinksContainer}>
        <h1 className={styles.savedLinksTopic}>Saved-Links</h1>

        <div className={styles.SearchContainer}>
          
          <input 
            type='text' 
            placeholder='search by title, link, description or tag'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>

        <div>
          
          <LinksList links={filteredLinks} onEdit={editBtn} onDelete={Delete} />
        </div>
      </div>
    </>
  )
}

export default App
