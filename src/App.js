import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Blog from "./components/Blog";
import Promotion from "./components/Promotion";
import Layout from "./components/layout";
import {BrowserRouter, Router,Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render(){
      console.log("samfljasjfj")
  return (
    <div className="App">
        <Layout key={"layout"}>
            <div id="layout">
                <Switch>
                    <Route exact path='/' component={Home}  />
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/promo" component={Promotion}/>
                </Switch>
            </div>
        </Layout>
    </div>
  );
  }
}

export default App;
