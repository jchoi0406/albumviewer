import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Update = () => {
  const [album, setAlbum] = useState({});  // album data from spotify
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];
  const [newRating, setNewRating] = useState("");  // ratings
  const [newReview, setNewReview] = useState("");  // reviews
  const navigate = useNavigate();
  useEffect(()=>{
    async function fetchData(){
      const fetchedAlbum = await axios.get("http://localhost:8800/albums/" + albumId);  // get request to api
      setAlbum(fetchedAlbum.data[0]);  // get first item
    }
    fetchData();

  }, [albumId])

  function handleNewReview(event){
    const review = event.target.value;
    setNewReview(review);
  }
  function handleNewRating(event){
    const rating = event.target.value;
    setNewRating(rating);
  }
  async function updateAlbum(event){
    event.preventDefault();

    const body = {
      ...(!newRating ? {albumRating: album.albumRating} : {albumRating: Number(newRating)}),  // if rating is different to last time
      ...(!newReview ? {albumReview: album.albumReview} : {albumReview: newReview}),  // if review is different to last time
    }
  
    await axios.put("http://localhost:8800/albums/"+album.id, body);
    navigate("/");
  }


  return (
    <div className='update-page'>
      <div className='album'>
        <div>  
          <img className="update-album-img"src={album.albumCover} alt=""></img>
          <div className='album-new-rating'>
            <input className='album-new-rating-input' type="number" defaultValue={album.albumRating || ""} onChange={handleNewRating}/>
    	      <p>/10</p>
          </div>
        </div>
        <div className='album-info'>
          <h2 className='album-title'>{album.albumName}</h2>
          <h3>{album.albumArtist}</h3>
          <textarea className="album-textarea"  defaultValue={album.albumReview || ""}  onChange={handleNewReview}></textarea>

        </div>
      </div>
      <button onClick={updateAlbum}>Update!</button>
    </div>
  )
}
