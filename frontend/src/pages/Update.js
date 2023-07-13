import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Update = () => {
  const [album, setAlbum] = useState({});
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];
  const [newRating, setNewRating] = useState("");
  const [newReview, setNewReview] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    async function fetchData(){
      const fetchedAlbum = await axios.get("http://localhost:8800/albums/" + albumId);
      setAlbum(fetchedAlbum.data[0]);
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
      ...(!newRating ? {albumRating: album.albumRating} : {albumRating: Number(newRating)}),
      ...(!newReview ? {albumReview: album.albumReview} : {albumReview: newReview}),
    }
    console.log(newReview);
  
    await axios.put("http://localhost:8800/albums/"+album.id, body);
    navigate("/");
  }


  return (
    <div className='update-page'>
      <div className='album'>
        <div>  
          <img src={album.albumCover} alt=""></img>
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
