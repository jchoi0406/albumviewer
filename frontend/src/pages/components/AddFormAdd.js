import React from "react";
export default function AddFormAdd(props){
  const ratingCondition = props.albumData.albumRating <= 10 && props.albumData.albumRating > 0;
    return(
        <div className='add-form-add'>
        <textarea className='add-form-add-textarea' placeholder='Write a review!' type="text" name="albumReview" onChange={props.handleChange}></textarea>
        <input type="number" placeholder="Out of 10" onChange={props.handleChange} name="albumRating"></input> 
        {(props.selectedAlbum || props.selectedAlbum === 0) && ratingCondition && <button className="add-button"type="submit">Add album</button>}
      </div>
    )
}