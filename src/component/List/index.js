import React from 'react'
import style from './style.css'

export default function List({people}) {
  return (
    <>
      {people.map((person, key) =>{
        return(
          <article key={key} className="article-box">
            <img className="img-avatar" src={person.image} alt={person.name}/>
            <div className="box-info">
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>

          </article>
        )
      })}

    </>
  )
}
