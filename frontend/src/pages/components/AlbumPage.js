import React from "react";
import AlbumList from "./AlbumList";
import { Link } from "react-router-dom";
export default function AlbumPage(props){
    return(
        <div className="album-page">
        <h1>Album reviews</h1>
        <button className="add-button"><Link to="/add">Add new album</Link></button>
        {(props.selectedAlbum || props.selectedAlbum === 0)&& <button className="update-button"><Link to={`/update/${props.albums[props.selectedAlbum].id}`}>Update album</Link></button>}
        {(props.selectedAlbum || props.selectedAlbum === 0)&&<button onClick={props.handleDelete}>Delete</button>}
        <div className="albums">
            {<AlbumList albums={props.albums} selectedAlbum={props.selectedAlbum} setSelectedAlbum={props.setSelectedAlbum}/>}
        </div>
    </div>
    )
}