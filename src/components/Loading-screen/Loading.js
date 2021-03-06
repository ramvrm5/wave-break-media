import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Loading.css'

function Loading() {
    return (
        <div className="loading">
            <CircularProgress color="inherit" />
        </div>
    )
}

export default Loading
