import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import Header from './components/Header';
import MenuContainer from './modules/menu/container/MenuContainer';
import DishDetailsContainer from './modules/dishdetails/container/DishDetailsContainer'
import DishlistContainer from './modules/dishlist/container/DishlistContainer'
import { SearchSection } from './components';

const store = createStore(reducers);

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        checked: false
      }
  }
  handleChange = () => {
    this.setState({ checked: !this.state.checked })
  }
  render(){
    return (
      <Provider store={store}>
        <Header/>
        <SearchSection checked={this.state.checked} handleChange={this.handleChange}/>
        <Router>
          <Route exact path="/" component={MenuContainer}/>
          <Route path="/course" component={DishlistContainer}/>
          <Route path="/details" component={DishDetailsContainer}/> 
        </Router>
      </Provider>
    );
  }
}

export default App;
