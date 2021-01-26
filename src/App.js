import React from 'react';
import Counters from './components/Counters'
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component{
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handlingIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters: counters });
  };
  handlingDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value =
      counters[index].value <= 0 ? 0 : counters[index].value - 1;
    this.setState({
      counters: counters,
    });
  };
  handlingReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters,
    });
  };
  handlingDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render(){
    return(
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter((c)=>c.value>0).length}/>
        <main>
          <Counters
          counters = {this.state.counters}
          onDelete = {this.handlingDelete}
          onReset={this.handlingReset} 
          onDecrement={this.handlingDecrement} 
          onIncrement={this.handlingIncrement}/>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
