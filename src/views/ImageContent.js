import React, { useState } from 'react';

// REACT ROUTER COMPONENT
import { useHistory, useLocation } from 'react-router-dom';

// CSS IMPORT
import './imageContent.css';

function ImageContent() {
  const location = useLocation();
  const history = useHistory();
  const [imageContent, setimageContent] = useState(location.state.image);

  return (
    <div className="container_imageContent">
      <img src={imageContent.largeImageURL} alt="" />
      <div className="user">
        <h3>Photographer</h3>
        <h5>{imageContent.user}</h5>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <h5>{imageContent.tags}</h5>
      </div>
      <div className="resolution">
        <h3>Resolution</h3>
        <h5>{imageContent.imageWidth}×{imageContent.imageHeight}</h5>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <h5>{imageContent.comments}</h5>
      </div>
      <div className="views">
        <h3>Views</h3>
        <h5>{imageContent.views}</h5>
      </div>
      <div className="downloads">
        <h3>Downloads</h3>
        <h5>{imageContent.downloads}</h5>
      </div>
    </div>
  )
}

export default ImageContent