import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class FavPage extends Component {
  render() {
    return (
      <div style={{padding: '0 10%', backgroundColor: '#D5DAF0', minHeight: '40vh'}}>
        {this.props.favs.map((fav) => 
        <div><br/>
        <Card>
          <CardContent>
          <Typography component="p">
            <IconButton onClick={() => this.props.dispatch({type:'DELETE_FAV',id:fav.id})} aria-label="Delete"> <DeleteIcon /> </IconButton>
            {fav.data}
          </Typography>
          </CardContent>
        </Card>
        </div>
        )}
        <br/><br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        favs: state
    }
}
export default connect(mapStateToProps)(FavPage);