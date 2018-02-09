import React from 'react';
import './Shelf.css'
import Bins from '../../Buttons/Bins'
import axios from 'axios';


class Shelf extends Component{
    constructor(props){
        super(props)
        this.state =({
            display = ''
        })
    }


componentDidMount() {
    axios
        .get('api/shelf/:id')
        .then(response =>
        this.setState({
            display = ''
        })
        .catch(err => console.log(err))
}



render(){
    return(
    <div className='bin-container'>
    <button>< Bins title='1'/></button>
    <button>< Bins title='2'/></button>
    <button>< Bins title='3'/></button>
    <button>< Bins title='4'/></button>
    <button>< Bins title='5'/></button>
    </div>
)
}
}

export default Shelf;