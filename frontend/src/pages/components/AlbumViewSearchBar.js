import React from 'react'
export default function AlbumViewSearchBar(props) {
  function handleChange(event){
    props.setSearchAlbumName(event.target.value);
  }
  return (
    <div>
        <input className="album-page-search" onChange={handleChange} name="search" placeholder="Search for an album..."></input>
    </div>
  )
}

