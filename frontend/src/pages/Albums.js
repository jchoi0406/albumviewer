import { useEffect , useState} from "react";
import { deleteAlbum } from "./util/api";
import { getAllAlbums } from "./util/api";
import AlbumPage from "./components/AlbumPage";
export function Albums(props){
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albums = props.albums;
  const setAlbums = props.setAlbums;
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
            const res = await getAllAlbums();
            setAlbums(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
      fetchAllAlbums();
  },[setAlbums])
  

  return (
    <AlbumPage selectedAlbum={selectedAlbum} albums={albums} handleDelete={handleDelete} setSelectedAlbum={setSelectedAlbum}/>
  )
}
