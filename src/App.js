import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddTodo from "./components/AddTodo";
import reducer from './reducers/reducer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initValue = {
  data: []
}

const store = createStore(reducer, initValue)


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/addtodo/:name' render={(routeParams) =>  <Provider store={store}><AddTodo {...routeParams} /></Provider>}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
