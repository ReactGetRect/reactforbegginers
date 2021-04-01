import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Header from './components/header/header'
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { Route } from 'react-router';
import Pictures from './components/pictures/pictures';
import Stories from './components/stories/stories';
import Settings from './components/settings/settings';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className = 'app-wrapper-content' >
        <Route path = '/profile' render = { () => < Profile /> }/>
        <Route path = '/dialogs' render = { () => < Dialogs /> }/>
        <Route path = '/pictures' render = { () => < Pictures /> }/>
        <Route path = '/stories' render = { () => < Stories /> }/>
        <Route path = '/settings' render = { () => < Settings /> }/>
      </div>
    </div>
  )
}


export default App;


