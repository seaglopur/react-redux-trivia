import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import TriviaPage from '../pages/triviapage'
import FavPage from '../pages/favpage'
import './pagenav.css'

export default class PageNav extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Fragment>
                <nav className='menu'>
                    <ul>
                        <li><NavLink to='/' activeClassName='menu selected' exact={true}>Discover</NavLink></li>
                        <li><NavLink to='/favourites' activeClassName='menu selected'>Favourites</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' component={TriviaPage} exact={true} />
                    <Route path='/favourites' component={FavPage} />
                </Switch>
            </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}
