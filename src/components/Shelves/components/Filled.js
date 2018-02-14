import React, { Component } from 'react';

export default class Bins extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemName: '',
            itemPrice: '',
            canEdit: false,
            id: this.props.match.params.id,   
        }
    componentDidMount(){
        axios
            .get('/api/bins:id ???')
            .then( results => 
        this.setState({
            itemName: results.data,
            itemPrice: results.data
            }))
    }
    handleNameChange(e){

    }
    handlePriceChange(e){

    }

    deleteItem(){

    }

    }
    render(){
        return(
            <div className = 'filled-container'>
            <span>Name</span>
            <input className ='filled-input' type ='text' onChange={e=>handleNameChange(e.target.value)}/>
            <span>Price</span>
            <input className ='filled-input' type ='text'
            onChange={e=>handlePriceChange(e.target.value)}/>

            </div>
        )
    }
}