import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogsList extends Component {
  
  renderDogBreed(breed) {
    return <li key={breed}>
    <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
  </li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && "Loading..." }

        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}


































// import React, { Component } from "react";

// export default class DogsList extends Component {
//     state = {
//         dogBreeds: null
//     };

//     componentDidMount() {
//         fetch("https://dog.ceo/api/breeds/list/all")
//           .then(res => res.json())
//           .then(data => {
//             const breeds = Object.keys(data.message)// transform `data` to an array of strings
//             this.updateBreeds(breeds);
//           })
//           .catch(console.error);
//       }
    
//       updateBreeds(breeds) {
//         this.setState({
//           dogBreeds: breeds
//         })
//       }

//     render() {
//         // // if ({ this.state.dogBreeds === null) {
//         //     return 'Loading';
//         // }
//     return (
//       <div className="dogs-list">
//         <h1>Dogs List</h1>
//         { this.state.dogBreeds === null && 'Loading...' }
//         { <ul>
//         { this.state.dogBreeds !== null && 
//         this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
//         </ul> }
//       </div>
//     );
//   }
// }