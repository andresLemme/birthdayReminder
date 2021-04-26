import React from 'react'

export default function List({people}) {
  return (
    <>
      {people.map((person, key) =>{
        return(
          <article key={key}>
            <img src={person.image} alt={person.name}/>
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>

          </article>
        )
      })}

    </>
  )
}
