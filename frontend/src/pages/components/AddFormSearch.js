import React from "react";
import AlbumListSearch from "./AlbumListSearch";

export default function AddFormSearch(props){
    return(
        <div className='add-form-search'>
          <div className='add-form-search-input-button'>
            <input onChange={props.handleChange} className="search-bar" type="text" placeholder="Enter album name..." name="albumName"></input>
            <button className="search-button"type="button" onClick={props.displaySearchAlbums}>Search Album!</button>
          </div>
          {props.searchAlbumState.length >0 && <div className='search-albums'>
          {<AlbumListSearch searchAlbumState={props.searchAlbumState} selectedAlbum={props.selectedAlbum} setSelectedAlbum={props.setSelectedAlbum} />}
        </div>}
      </div>
    )
}
