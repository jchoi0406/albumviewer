import axios from "axios";

export async function deleteAlbum(albumId){
    try{
      await axios.delete("http://localhost:8800/albums/" + albumId);
    }
    catch(err){
      console.log(err);
    }
}

export async function getAllAlbums(){
    try{
        const res = await axios.get("http://localhost:8800/albums")
        return res;
    }
    catch(err){
        console.log(err);
    }
}
export async function getFilteredAlbums(albumName){
    try{
        const res = await axios.get("http://localhost:8800/albums/filter/"+albumName);
        return res;
    }
    catch(err){
        console.log(err);
    }
}
export async function addAlbum(body){
    try{
        const res = await axios.post("http://localhost:8800/albums", body);
        return res;
    }
    catch(err){
        console.log(err);
    }
    
}
export async function getSearchedAlbums(albumName){
    try{
        const res = await axios.get("http://localhost:8800/search/"+albumName)
        return res;
    }
    catch(err){
        console.log(err);
    }
}

export async function getUserInfo(){
    const res = await axios.get("http://localhost:8800/login");
    return res.data;
}