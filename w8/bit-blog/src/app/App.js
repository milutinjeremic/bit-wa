
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import Home from "./home/Home"
import PostList from './posts/postList'
import PostItem from './postItem/postItem'
import Authors from './authors/authors'
import Header from './partials/Header'
import Footer from './partials/Footer'
import AuthorDetailsPage from './authorDetails/authorDetailsPage';
import AboutPage from './about/aboutPage';



const App = (props) => {
    return (
        <React.Fragment>
        <Header />
        <Switch>

            <Route path='/Home' component={Home} />
            <Redirect exact from='/' to='/Home' />
            <Route path='/PostItem' component={PostItem}/>
            <Route path='/Authors' component={Authors}/>
            <Route path='/AuthorDetailsPage' component={AuthorDetailsPage}/>
            <Route path='/AboutPage' component={AboutPage}/>
         </Switch>
          <Footer />
    </React.Fragment>
    );
}


export default App;