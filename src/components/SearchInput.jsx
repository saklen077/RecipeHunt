import React from 'react'
import Search from '../assets/search-icon.svg'

export default function SearchInput({ searchQuery, onTextChange }) {
  return (
    <>
       <div className="flex items-center bg-gray-300 rounded-md p-2 ml-5 w-1/2 ">
            <img 
              src={Search} 
              className="w-8 h-8"
              alt="search"
            />
            <input
              type="text"
              placeholder="Search Recipe"
              value={searchQuery}
              onChange={onTextChange}
              className="text-black text-base font-bold border-none outline-none ml-3 w-full"
            />
          </div>
         
    </>
  )
}
