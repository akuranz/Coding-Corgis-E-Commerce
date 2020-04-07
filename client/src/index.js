import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


    // <BrowserRouter>
    //   <Switch>
    //     <div className="App">
    //       <Navbar updateUser={updateUser} loggedIn={state.loggedIn} />
    //       {/* greet user if logged in: */}
    //       {state.loggedIn && (
    //         <p>Welcome to the corgi party, {state.username}!</p>
    //       )}
    //       {/* Routes to different components */}
    //       <Route exact path="/" component={Home} />
    //       <Route
    //         path="/login"
    //         render={() => <LoginForm updateUser={updateUser} />}
    //       />
    //       <Route path="/signup" render={() => <Signup />} />
    //     </div>
    //   </Switch>
    // </BrowserRouter>