import React, { Component } from "react";
import { animals } from "./animals";
import AnimalCard from "./AnimalCard";

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedAnimalsArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedAnimalsArray,
      };
    });
    console.log(this.state);
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <main>
        {/* <h1>{this.state.animals.length} animals</h1> */}

        <input type="text" onChange={this.searchHandler} />
        <h3>{this.state.search}</h3>
        <div className="animalslist">
          <h1>Animals app</h1>
          {animalFilter.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              like={animal.likes}
              remove={this.removeHandler.bind(this, animal.name)}
              // remove2={()=> this.removeHandler.bind(animal.name)
              add={this.addLikeHandler.bind(this, animal.name)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <main>
//       {animals.map((person) => (
//         <Box
//           key={person.name}
//           name={person.name}
//           images={person.images}
//           likes={person.likes}
//         />
//       ))}
//     </main>
//   );
// };
// export default App;
