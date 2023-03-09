import React from 'react'
const Card = ({user}) => {
  const {nombre,cancion} = user
  return (
    <div className='card'>
         <h2>Hola {nombre} !!!</h2>       
         <p>Tu Canción Favorita es {cancion}</p>
    </div>
  )
}

export default Card