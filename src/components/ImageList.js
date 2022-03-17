import React, { useEffect, useState } from 'react';

import axios from 'axios';

// Material UI Component
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// REACT ROUTER
import { Link, useHistory } from 'react-router-dom';

// CSS IMPORT
import './commonCss.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function ImageList() {
  const [listype, setListType] = useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getImages()
  }, [])

  // Get list of Images from pixabay API
  const getImages = (page) => {
    return axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=26185573-8e36b4936b1426f3661e7f1cf&page=${page}&per_page=${30}&image_type=photo&pretty=true`,
    }).then(async function ({ data, status }) {
      if (status === 200) {
        setListType(data)
      }
    }).catch(function (error) {
      return error
    });
  };

  // Change Page to fetch new images
  const handleChange = (event, value) => {
    setPage(value);
    getImages(value);
  };

  return (
    <div className="container_imageList">
      <div className="wrapper_imageList">
        {listype?.hits?.map((image, i) => {
          return (
            <div key={i} className="images">
              <Link to={{ pathname: "/imageContent/" + image.id, state: { image } }} >
                <img className="image" src={image.previewURL} height={200} width={200} alt="" />
              </Link>
              <div className="imageContent">
                <div className="like"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  {image.likes}
                </div>
                <div className="comments">
                  <i className="fa fa-comments" aria-hidden="true"></i>
                  {image.comments}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="m-2">
        <Pagination count={17} page={page} onChange={handleChange} color="secondary" />
      </div>
    </div>
  )
}

export default ImageList