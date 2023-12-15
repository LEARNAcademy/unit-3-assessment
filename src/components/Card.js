import React from "react"

const Card = () => {
  return (
    <div className="handStyles">
      {hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}
