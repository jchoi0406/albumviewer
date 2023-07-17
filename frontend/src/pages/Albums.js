import { useEffect , useState} from "react";
import { deleteAlbum, getFilteredAlbums } from "./util/api";
import { getAllAlbums } from "./util/api";
import AlbumPage from "./components/AlbumPage";
export function Albums(props){
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albums = props.albums;
  const setAlbums = props.setAlbums;
  const [album, setAlbum] = useState("");
  const [searchAlbumName, setSearchAlbumName] = useState("");
  function handleChange(event){
    setAlbum(event.target.value);
  }
  async function handleDelete(event){
    try{
      await deleteAlbum(albums[selectedAlbum].id)
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    const fetchAllAlbums = async () =>{
        try{
            const res = await getFilteredAlbums(searchAlbumName);
            console.log(res.data);
            setAlbums(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
      fetchAllAlbums();
  },[searchAlbumName])
  

  return (
    <AlbumPage selectedAlbum={selectedAlbum} albums={albums} handleDelete={handleDelete} setSelectedAlbum={setSelectedAlbum} setSearchAlbumName={setSearchAlbumName}/>
  )
}
