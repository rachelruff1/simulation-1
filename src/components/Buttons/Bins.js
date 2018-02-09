import React from 'react';
import '/Bins.css';
import axios from 'axios';

export default class Bin extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.match.params.id,
            bins : []
        }
    
}
componentDidMount(){
    axios
        .get(`/api/shelf/${this.state.title}`)
        .then(response =>
        response.data)
        .catch(console.log)
}
    
    
}

render(
    const binsOption = this
){
const binsOption = this.state.bins.map
    return(
        <div className='bins-container'>
        {binsOption}
        </div>
    )
}

