import React from "react"
import { Link } from "react-router-dom"
export default function AlbumList(props){
    const albumsMapped = props.albums.map((album, index)=>{

        function optionClicked(event){
            props.setSelectedAlbum(index);
        }
        return (
        <div className="album-display">
            <div className="album">
                <div className="album-container">
                    <div className="album-left">
                        <img className="album-img" src={album.albumCover} alt=''/>
                        <p className="album-rating">{album.albumRating}/10</p>
                        {album.dateAdded.slice(0,10)}
                    </div>
                    <div className="album-info-container">
                        <div className="album-info">
                            <h2 className="album-title">{album.albumName}</h2>
                            <h3 className="album-artist">{album.albumArtist}</h3>
                            <p className="album-review">{album.albumReview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-options" onClick={optionClicked}>
                <button className="options"><i class="fas fa-ellipsis-v"></i></button>
                <div className="dropdown-menu">
                    <a><Link className="update-link"to={props.selectedAlbum ? `/update/${props.albums[props.selectedAlbum].id}` : ""}>Update</Link></a>
                    <button className="delete-button" onClick={props.handleDelete}>Delete</button>
                </div>
            </div>   
        </div>

        )})
    return albumsMapped;
}
