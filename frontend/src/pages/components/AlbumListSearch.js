import React from "react";

export default function AlbumListSearch(props){
    const albumsMapped = props.searchAlbumState.map((alb, index)=>{
        const styles = {
          border: props.selectedAlbum === index ? "2px solid" : "none" 
        };
        console.log(props.selectedAlbum)
        return(
          <div className="search-album" style={styles} key={alb.id} onClick={()=>props.setSelectedAlbum(index)}>
            <img className="search-album-img" src={alb.images[1].url} alt=""></img>
            <h3 className="search-album-name">{alb.name}</h3>
          </div>
        )
      })
    return albumsMapped;
}