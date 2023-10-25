import React from "react"
import Navbar from "./Navbar.jsx"
import Card from "./Card.jsx"
import Hero from "./Hero.jsx"
import data from "./data.jsx"

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              item={item}
          />
      )
  })        
  
          // <Hero />
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}







/*

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              img={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              price={item.price}
              openSpots={item.openSpots}
          />
      )
  })        
  
          // <Hero />
  return (
      <div>
          <Navbar />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}




Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.


export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)



export default function App() {
  // <Hero />
return (
<div>
  <Navbar />
  <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
  />
</div>
)
} */












/*export default function App() {
    return (
        <div>
            <Navbar />
            <Card />
            <Hero />
        </div>
    )
}*/
