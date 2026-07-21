import styles from './Form.module.css'

export const Form = () => {
  return (
    <div className={styles.Form}>
      <h1>Mi-Link<span>-Vault</span></h1>

      <div className={styles.Vault_Container}>

        <div className={styles.Vault_inputs}>

            <div className={styles.title_input}>
            <label>Title :</label>
            <input type='text' alt='title' placeholder='what is the link title' id={'title'}/>
            </div>
            
            <div className={styles.link_input}>
            <label>Link :</label>
            <input type='text' alt='Link' placeholder='Paste your link here' id={'link'}/>
            </div>

            <div className={styles.Description_input}>
            <label >Description :</label>
            <textarea placeholder='links Description here ' className={styles.description_textArea} id={'description'}></textarea>
            </div>

            <div className={styles.Tags_input}>
            <label>Tags :</label>
            <input type='text' alt='Tags' placeholder='Type of Tag (optional)' id={'tags'}/>
            </div>

            <button className={styles.btn_add}>Add Link</button>

        </div>
      </div>
    </div>
  )
}

export default Form