import React from 'react'

const Filter = ({setUserFilter}) => {
  return (
    <div>
        filter shown with <input onChange={(e) => setUserFilter(e.target.value)}/>
      </div>
  )
}

export default Filter