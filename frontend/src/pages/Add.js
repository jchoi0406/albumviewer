import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addAlbum, getSearchedAlbums } from './util/api';
import AddFormSearch from './components/AddFormSearch';
import AddFormAdd from './components/AddFormAdd';
export function Add() {
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState({
    albumReview: "",
    albumRating: null,
  });
  const [searchAlbumState, setSearchAlbumState] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  function handleChange(event){
    setAlbumData(prevState=>(
      {...prevState, [event.target.name]: event.target.value}
    ))
  }; 

  async function displaySearchAlbums(){
    const albums = await searchAlbums();
    setSearchAlbumState(albums.items);
  }
  async function searchAlbums(){
    try{
      const res = await getSearchedAlbums(albumData.albumName);
      return res.data
    }
    catch(err){
      console.log(err)
    }

  }

  async function handleClick(event){
    event.preventDefault();
    try{
      const body = {
        album: searchAlbumState[selectedAlbum],
        userInput: albumData
      }
      await addAlbum(body);
      navigate("/");
    }
    catch(err){
      console.log("Error");
    }
  }

  return (
    <form className="add-form" onSubmit={handleClick}>
      <AddFormSearch handleChange={handleChange} displaySearchAlbums={displaySearchAlbums} searchAlbumState={searchAlbumState} setSelectedAlbum={setSelectedAlbum}/>
      <AddFormAdd handleChange={handleChange}/>
    </form>
  )
}