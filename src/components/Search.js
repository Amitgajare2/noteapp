import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function Search({searchText, handlesearchText}) {
  return (
    <div className='search-box'>
        <samp><BiSearchAlt/></samp>
        <input value={searchText} onChange={(e) => handlesearchText(e.target.value)} type="text" placeholder='Search' />
    </div>
  )
}

export default Search