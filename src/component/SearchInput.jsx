import React from 'react'
import { SearchIcon } from '../assets/images/Icon'
import Input from './Input'

function SearchInput() {
    
  return (
    <div className='bg-gray-5 py-4 pl-4 pr-5 flex items-center'>
        <SearchIcon />
        <Input placeholder={'Search for a student by name or email'} type={'text'} extraStyle={'bg-transparent border-none'}/>
    </div>
  )
}

export default SearchInput