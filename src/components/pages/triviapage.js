import React, { Component } from 'react'
import {connect} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const fetchData = (number, type, callback) => {
    fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(res => res.json())
    .then(callback)};

class TriviaPage extends Component {

    constructor(){
        super();
        this.state = {
            currentnumber: 1,
            customnumber: '',
            yeardata: '',
            triviadata: '',
            datedata: '',
            mathdata: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    fetchAllTypes(number){
        fetchData(number, 'year', data =>
            this.setState({yeardata: data.text})
        );
        fetchData(number, 'trivia', data =>
            this.setState({triviadata: data.text})
        );
        fetchData(number, 'date', data =>
            this.setState({datedata: data.text})
        );
        fetchData(number, 'math', data =>
            this.setState({mathdata: data.text})
        );
    }

    fetchSingleType(number, type){
        fetchData(number, type, data =>
            {switch(type){
                case 'year':
                this.setState({yeardata: data.text})
                break
                case 'trivia':
                this.setState({triviadata: data.text})
                break
                case 'date':
                this.setState({datedata: data.text})
                break
                case 'math':
                this.setState({mathdata: data.text})
                break
                default:
            }}
        )
    }

    onChange(e) {
        this.setState({ customnumber: e.target.value });
      }
    
    onSubmit(e) {
        const { customnumber } = this.state
        e.preventDefault()
        this.fetchAllTypes(customnumber)
        this.setState({ currentnumber: parseInt(customnumber, 10)})
    }

    componentDidMount(){
        this.fetchAllTypes(this.state.currentnumber)
    }

    onfav(data){
        const datatosave = {
            id: new Date(),
            data
        }
        this.props.dispatch({
            type:'ADD_FAV',
            datatosave})
    }

    render() {
        let { currentnumber, yeardata, triviadata, datedata, mathdata } = this.state
        return (
            <div style={{padding: '0 10%', backgroundColor: '#D5DAF0'}}>
                <br/>
                <Card>
                    <CardContent>
                    <Typography variant="headline" component="h3">
                        Year Info:
                    </Typography>
                    <Typography component="p">
                        {yeardata}
                    </Typography>
                    <IconButton onClick={() => this.fetchSingleType(currentnumber, 'year')} aria-label="Reload"> <AutorenewIcon /> </IconButton>
                    <IconButton onClick={() => this.onfav(yeardata)} aria-label="Reload"> <FavoriteIcon/> </IconButton>
                    </CardContent>
                </Card>

                <br/>
                <Card>
                    <CardContent>
                    <Typography variant="headline" component="h3">
                        Trivia Info:
                    </Typography>
                    <Typography component="p">
                        {triviadata}
                    </Typography>
                    <IconButton onClick={() => this.fetchSingleType(currentnumber, 'trivia')} aria-label="Reload"> <AutorenewIcon /> </IconButton>
                    <IconButton onClick={() => this.onfav(triviadata)} aria-label="Reload"> <FavoriteIcon/> </IconButton>
                    </CardContent>
                </Card>

                <br/>
                <Card>
                    <CardContent>
                    <Typography variant="headline" component="h3">
                        Date Info:
                    </Typography>
                    <Typography component="p">
                        {datedata}
                    </Typography>
                    <IconButton onClick={() => this.fetchSingleType(currentnumber, 'date')} aria-label="Reload"> <AutorenewIcon /> </IconButton>
                    <IconButton onClick={() => this.onfav(datedata)} aria-label="Reload"> <FavoriteIcon/> </IconButton>
                    </CardContent>
                </Card>

                <br/>
                <Card>
                    <CardContent>
                    <Typography variant="headline" component="h3">
                        Math Info:
                    </Typography>
                    <Typography component="p">
                        {mathdata}
                    </Typography>
                    <IconButton onClick={() => this.fetchSingleType(currentnumber, 'math')} aria-label="Reload"> <AutorenewIcon /> </IconButton>
                    <IconButton onClick={() => this.onfav(mathdata)} aria-label="Reload"> <FavoriteIcon/> </IconButton>
                    </CardContent>
                </Card>

                <br/><br/>
                <Button style={{marginRight: '50%'}} variant="outlined" onClick={() => {
                    this.fetchAllTypes(currentnumber-1);
                    this.setState({currentnumber: currentnumber-1})}}
                > previous </Button>
                
                <Button variant="outlined" onClick={() => {
                    this.fetchAllTypes(currentnumber+1);
                    this.setState({currentnumber: currentnumber+1})}}
                > next </Button>
                <form onSubmit={this.onSubmit}>
                    <Input required type="text" onChange={this.onChange} value={this.state.customnumber} placeholder="Look for a custom number"/>
                    <br/>
                </form>
                <br/><br/>
            </div>
        )
    }
}
export default connect()(TriviaPage);
