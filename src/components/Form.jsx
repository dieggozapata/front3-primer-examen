import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user,setUser] = useState({
        nombre:'',
        cancion:''
    })
    const [err, setErr] = useState(false)
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
      if (user.nombre[0] != ' ' && user.nombre.length >= 3 && user.cancion.length >= 6){       
          setErr(false)
          setShow(true)                       
      }else{
          setErr(true)
          setShow(false)                       
      }      
    }    

  return (
    <div>
        <form onSubmit={handleSubmit}  className='form'>
          <label>Nombre: </label>
          <input type="text" className='input' onClick={(event) => setShow(false)} onChange={(event) => setUser({...user, nombre : event.target.value})} required/>
          <label>Canción Favorita: </label>
          <input type="text" className='input' onClick={(event) => setShow(false)} onChange={(event) => setUser({...user, cancion : event.target.value})} required/>
          <button>Enviar</button>
        </form>
        {err && 'Por favor chequea que la información sea correcta'}
        {show && <Card user={user}/>}
    </div>    
  )
}

export default Form