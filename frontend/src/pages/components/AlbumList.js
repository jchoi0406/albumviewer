import React from "react"
import { Link } from "react-router-dom"
export default function AlbumList(props){
    const albumsMapped = props.albums.map((album, index)=>{
        const normalStyle = {
            display: 'flex',
            flexDirection: 'row',
            wordWrap: 'break-word',
            border: '2px solid #CCCCCC',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            maxWidth: '50vw',
            cursor: 'pointer',
        }
        const selectedStyle = {...normalStyle, border: "2px solid black"} 
        
        return (
        <div className="album" style={(index === props.selectedAlbum) ? selectedStyle: normalStyle} key={album.id} onClick={()=>props.setSelectedAlbum(index)}>
            <div className="album-left">
                <img className="album-img" src={album.albumCover} alt=''/>
                <p className="album-rating">{album.albumRating}/10</p>
            </div>
            <div className="album-info-container">
                <div className="album-info">
                    <h2 className="album-title">{album.albumName}</h2>
                    <h3 className="album-artist">{album.albumArtist}</h3>
                    <p className="album-review">{album.albumReview}</p>
                </div>

            </div>
    
        </div>
        )})
    return albumsMapped;
}
