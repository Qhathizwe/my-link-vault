import styles from './Form.module.css'
import Vault from '../Vault/Vault'

export const Form = () => {
  return (
    <div className={styles.Form}>
      <h1>Mi-Link<span>-Vault</span></h1>

      <div className={styles.Vault_Container}>

        <div className={styles.Vault_inputs}>

            <div className={styles.title_input}>
            <label>Title :</label>
            <input 
            type='text' 
            alt='title' 
            placeholder='what is the link title' 
            value={'newTitle'}/>
            </div>
            
            <div className={styles.link_input}>
            <label>Link :</label>
            <input type='text'
             alt='Link' 
             placeholder='Paste your link here'
             value={'newLink'}/>
            </div>

            <div className={styles.Description_input}>
            <label >Description :</label>
            <textarea 
            placeholder='links Description here '
            className={styles.description_textArea}
            value={'newDescription'}>
            </textarea>
            </div>

            <div className={styles.Tags_input}>
            <label>Tags :</label>
            <input 
            type='text' 
            alt='Tags' placeholder='Type of Tag (optional)' 
            value={"newTags"}/>
            </div>

            <button className={styles.btn_add}>Add Link</button>

        </div>
      </div>
    </div>
  )
}

export default Form