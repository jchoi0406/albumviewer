import React from "react";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";
import AlbumViewSearchBar from "./AlbumViewSearchBar";
export default function AlbumPage(props){
    return(
        <div className="album-page">
            <h1>Album reviews</h1>
            <AlbumViewSearchBar setSearchAlbumName={props.setSearchAlbumName}/>
            <button className="add-button"><Link to="/add">Add new album</Link></button>
            <div className="albums">
                {<AlbumList albums={props.albums} selectedAlbum={props.selectedAlbum} setSelectedAlbum={props.setSelectedAlbum} handleDelete={props.handleDelete}/>}
            </div>
        </div>
    )
}