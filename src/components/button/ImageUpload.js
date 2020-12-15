import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {connect} from 'react-redux';
import {addUser,addPhotos} from '../../redux/actions'
  function ImageUpload(props) {

    
    const [images, setImages] = React.useState([]);
    const maxNumber = 3;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log("UPLOAD1",imageList);
      console.log("UPLOAD2");
      console.log("REUDX1",props.photos)

      setImages(imageList);
      addPhotoToRedux(imageList);
    };


     const addPhotoToRedux =(data)=>{
        props.addPhotos({content:data});
        console.log("REUDX2",props.photos)
      }
      


  return (
    <div>
     <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
function mapStateToProps(state)
{
	return{
    loginData:state.mainReducer.byIds,
    photos:state.mainReducer.photos
	}
}
export default connect(mapStateToProps, {addUser,addPhotos})(ImageUpload);
