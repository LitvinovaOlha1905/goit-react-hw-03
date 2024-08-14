import React from 'react'
import styles from './SearchBox.module.css'

function SearchBox({value, onFilter}) {
  return (
    <div className={styles.content}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={(e) => {onFilter(e.target.value)}} />
    </div>
  )
}

export default SearchBox