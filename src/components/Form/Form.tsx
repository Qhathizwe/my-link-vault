import styles from './Form.module.css'
import React, {useState} from 'react'
import { Input } from '../Input/Input';

export const Form = () => {
      const [title, setTitle] = useState('');
  
      const [link, setLink] = useState('');
  
      const [description, setDescription] = useState('');
  
      const [tags, setTags] = useState ('');

         const handleInputChange_title = (event: React.ChangeEvent<HTMLInputElement>) => {
         setTitle(event.target.value);
         };

         const handleInputChange_link = (event: React.ChangeEvent<HTMLInputElement>) => {
         setLink(event.target.value);
         };

        const handleInputChange_tags = (event: React.ChangeEvent<HTMLInputElement>) => {
         setTags(event.target.value);
        };
        const inputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setDescription(event.target.value);
}

function addLink (){

  return(<></>)
}

// function del_Link (index){

//   return(<></>)
// }
   
  return (
    <div className={styles.Form}>
      <h1>Mi-Link<span>-Vault</span></h1>

      <div className={styles.Vault_Container}>

        <div className={styles.Vault_inputs}>

          <Input
          label='Title:'
          value={title}
          placeholder='what is the link title'
          onChange={handleInputChange_title }
          />

          <Input
          label='Link:'
          value={link}
          placeholder='Write / Paste your link here'
          onChange={handleInputChange_link }
          />

          <div className={styles.Description_input}>
            <label >Description :</label>
            <textarea 
            placeholder='links Description here '
            className={styles.description_textArea}
            value={description}
            onChange={inputChange}>
            </textarea>
            </div>

          <Input
          label='Tags:'
          value={tags}
          placeholder='Write / Paste your link here'
          onChange={handleInputChange_tags }
          />

            <button 
            onClick={addLink} 
            className={styles.btn_add}
            >Add-Link</button>

        </div>
      </div>

      <div className={styles.savedLinks}>
        <h1>Saved-Links</h1>
        {/* <ol>
          {title.map((title, index) =>
          <li key={index}>
            <span className='linkItem'>{title}</span>
          </li>
          )}
        </ol> */}

      </div>;
    </div>
  )
}

export default Form