
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from "./home/Home";
import PostDetails from './postDetails/PostDetails';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Authors from './authors/Authors';
import AboutPage from './about/aboutPage';
import NewPost from '../app/newPost/newPost';
import AuthorDetails from "./authors/authorDetails.js";


const App = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path='/Home' component={Home} />
                <Redirect exact from='/' to='/Home' />
                <Route path='/PostDetails/:id' component={PostDetails} />
                <Route path='/AuthorsPage' component={Authors} />
                <Route path='/AuthorDetailsPage/:id' component={AuthorDetails} />
                <Route path='/AboutPage' component={AboutPage} />
                <Route path='/NewPost' component={NewPost} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}


export default App;