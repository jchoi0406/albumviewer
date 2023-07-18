import React from "react";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";
import AlbumViewSearchBar from "./AlbumViewSearchBar";
export default function AlbumPage(props){
    return(
        <div className="album-page">
            <h1>Album reviews</h1>
            <AlbumViewSearchBar setSearchAlbumName={props.setSearchAlbumName} setSelectedAlbum={props.setSelectedAlbum}/>
            <button className="add-button"><Link to="/add">Add new album</Link></button>
            <div className="albums">
                {(props.selectedAlbum || props.selectedAlbum === 0)&& <button className="update-button"><Link to={`/update/${props.albums[props.selectedAlbum].id}`}>Update album</Link></button>}
                {(props.selectedAlbum || props.selectedAlbum === 0)&&<button onClick={props.handleDelete}>Delete</button>}
                {<AlbumList albums={props.albums} selectedAlbum={props.selectedAlbum} setSelectedAlbum={props.setSelectedAlbum} />}
            </div>
        </div>
    )
}