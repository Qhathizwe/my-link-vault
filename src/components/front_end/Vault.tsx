import styles from './Vault.module.css'

const Vault = () => {
  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.Logo}>Mi-Link-Vault</h1>

      <div className={styles.TitleContainer}>
        <h3 style={{color:'orangered'}}>Title</h3>
        <input type={'Text'}/>
      </div>

      <button className={styles.btnAdd}>Add link</button>
      
      
    </div>
  )
}

export default Vault
