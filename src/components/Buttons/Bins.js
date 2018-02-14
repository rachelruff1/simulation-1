import React, { Component } from "react";
import "./Bins.css";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class Bin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.id,
      bins: []
    };
  }
  componentDidMount() {
    axios
      .get(`/api/shelf/${this.state.title}`)
      .then(
        response =>
          (this.setState = {
            bins: response.data
          })
      )
      .catch(console.log);
  }

  //when you click on a shelf, changes URL
  //that's the signal for which page to load
  //table needs to get bin data for whole shelf
  //display option either Bin # || + Add inventory to bin
  //.map (if ! or ()) and conditionally render display option

  render() {
    const binsOption = this.state.bins.map((bins, i) => {
      if (!bins) {
        return (
          <div className="create">
            <Link to={`/create/${bins.id}`} key={i}>
              <button>{`Bin ${this.props.match.params.id}`}</button>
            </Link>
          </div>
        );
      } else if (bins) {
        return (
          <div className="filled">
            <Link to={`/bin/${bins.id}`} key={i}>
              <button>+ Add inventory to bin</button>
            </Link>
          </div>
        );}
        else return "null";
    });
    return 
        <div className="bins-container">
            {binsOption}
        </div>;
  }
}
