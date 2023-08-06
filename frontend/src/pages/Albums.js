import { useEffect , useState} from "react";
import { deleteAlbum, getAllAlbums, getFilteredAlbums, getUserInfo } from "./util/api";
import AlbumPage from "./components/AlbumPage";
import { useNavigate } from "react-router-dom";
export function Albums(props){
  const navigate = useNavigate();
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  const albums = props.albums;
  const setAlbums = props.setAlbums;
  const [searchAlbumName, setSearchAlbumName] = useState("");
  // useEffect(()=>{
  //   async function checkLoggedIn(){
  //     const loggedIn = await getUserInfo().loggedIn;
  //     if (!loggedIn){
  //       navigate("/authenticate")
  //     }
  //   }
  //   checkLoggedIn();
  // }, [navigate])
  useEffect(()=>{
    const fetchAllAlbums = async () =>{
        try{
            const res = searchAlbumName.length > 0 ? await getFilteredAlbums(searchAlbumName): await getAllAlbums();
            setAlbums(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
      fetchAllAlbums();
  },[searchAlbumName, setAlbums])


  async function handleDelete(event){
    try{
      await deleteAlbum(albums[selectedAlbum].id)
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }
  

  return (
    <AlbumPage selectedAlbum={selectedAlbum} albums={albums} handleDelete={handleDelete} setSelectedAlbum={setSelectedAlbum} setSearchAlbumName={setSearchAlbumName}/>
  )
}
