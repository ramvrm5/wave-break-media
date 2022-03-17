import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// LOADING IMPORT
import Loading from '../components/Loading-screen/Loading';


// ALL OTHER VIEWS WITHOUT PRIVATE ROUTES
const HomePage = lazy(() => import('../views/Home')); // Home
const ImageContent = lazy(() => import('../views/ImageContent')); // ImageContent


function router() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/imageContent/:id" component={ImageContent} />

                    <Redirect from="*" to="/home" />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default router
