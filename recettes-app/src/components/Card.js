import React from 'react'

const Card = ({ details, antho }) => {
  const ingredients = details.ingredients
    .split(',')
    .map(item => <li key={item}>{item}</li>)

  const instructions = details.instructions
    .split('\n')
    .map(item => <li key={item}>{item}</li>)

  const requireImage = chemin => {
    try {
      return require(`../img/${chemin}`)
    } catch (err) {
      return require(`../img/default.jpeg`)
    }
  }

  return (
    <div className='card'>
      <div className='image'>
        <img src={requireImage(details.image)} alt={details.nom} />
      </div>
      <div className='recette'>
        <h2>{details.nom}</h2>
        <ul className='liste-ingredients'>
          {ingredients}
        </ul>
        <ol className='liste-instructions'>
          {instructions}
        </ol>
      </div>
      <p>{antho}</p>
    </div>
  )
}

export default Card
