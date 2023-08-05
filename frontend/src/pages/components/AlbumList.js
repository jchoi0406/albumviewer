import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AlbumList(props){
    const albumsMapped = props.albums.map((album, index)=>{
        const normalStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            wordWrap: 'break-word',
            border: '2px solid #CCCCCC',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            maxWidth: '50vw',
            cursor: 'pointer',
        }
        const selectedStyle = {...normalStyle, border: "2px solid black"} 
        function optionClicked(event){
            console.log("clicked!")
        }
        return (
        <div className="album-display" style={(index === props.selectedAlbum) ? selectedStyle: normalStyle} key={album.id} /*onClick={()=>props.setSelectedAlbum(index)}*/>
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
                <button className="options"><FontAwesomeIcon icon="fa-solid fa-ellipsis" /></button>
                <div className="dropdown-menu">
                    Dropdown Content
                </div>
            </div>   
        </div>

        )})
    return albumsMapped;
}
