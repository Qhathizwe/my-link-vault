import './App.css'

function App() {
  
  return (
    <>
    <div className={'App'}>
      <h1>Mi-Link<span>-Vault</span></h1>

      <div className={'Vault-Container'}>
        <div className={'Vault-inputs'}>

            <div className={'title-input'}>
            <label>Title :</label>
            <input type='text' alt='title' placeholder='what is the link vaults title'  style={{width: '300px', height: '20px'}}/>
            </div>
            
            <div className={'link-input'}>
            <label>Link :</label>
            <input type='text' alt='Link' placeholder='Paste your link here' />
            </div>

            <div className={'Description-input'}>
            <label >Description :</label>
            <textarea placeholder='links Description here ' className='description-textA'></textarea>
            </div>

            <div className={'Tags-input'}>
            <label>Tags :</label>
            <input type='text' alt='Tags' placeholder='Type of Tag (optional)' />
            </div>

            <button className='btn-add'>Add Link</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
