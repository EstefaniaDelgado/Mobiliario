import React from 'react'
import { Icon } from '@iconify/react';
import styles from './SearchBar.module.css'


const SearchBar = () => {
  return (
    <form  className={styles.containerForm}>
      <input type="text" className={styles.searchInput} placeholder='Busca lo que más te gusta!!..'/>
       <Icon icon="iconamoon:search-fill" className={styles.iconMenu}/>
    </form>
  )
}

export default SearchBar
