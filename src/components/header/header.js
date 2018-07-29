import React, { Component } from 'react'
import './header.css'
import Typography from '@material-ui/core/Typography';
import logo from './icon.png'

export default class Header extends Component {
  render() {
    return (
      <div className='bg'>
        <div className='text'>
          <Typography variant="display3" >
            Welcome to the number trivia!
            <a role="button" href='https://github.com/seaglopur/trivia'>
            <img src={logo} width='30' height='30' alt="github link" style={{opacity: '0.6', marginLeft: '20px'}}/></a>
          </Typography>
          <br/>
          <Typography variant="headline" >
            Have you ever wondered about why a number is important?
          </Typography>
          <br/>
          <Typography variant="subheading" >
            Here you can discover information about any number you can think of!
          </Typography>
          <br/>
          <Typography variant="subheading" >
            Click on the reload button to load another trivia, or favourite the ones you like.  
          </Typography>
          <br/>
          
        </div>
      </div>
    )
  }
}
