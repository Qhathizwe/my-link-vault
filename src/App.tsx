import './App.css'
import Form from './components/Form/Form'
import type { Links } from './Links';
import { useState } from 'react';


function App() {
    const [newTitle, setNewTitle] = useState<Links[]>([]);

   const  addNewLink =(newList: Links)=>{
    setNewTitle([...newTitle, newList]);
   };

  return (
    <>
    < Form onSave={addNewLink}/>
    </>
  )
}

export default App
