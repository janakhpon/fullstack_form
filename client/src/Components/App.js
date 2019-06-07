import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Displayform from './Displayform';
import Displaylist from './Displaylist';
import Navbar from './Navbar';
import Footer from './Footer';
import Mainpage from './Mainpage';
import Editform from './Editform';
import Displayuser from './Displayuser';
import { Provider } from 'react-redux';
import store from '../store';


class App extends React.Component{

    render() {
        
        return (
          <Provider store={store}>
            <Router>
              <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <Navbar />
                <Route exact path="/" component={Mainpage} />
                <div className="container">
                  <Switch>
                    <Route
                      exact
                      path="/createform"
                      component={Displayform}
                    />
                  </Switch>
                  <Switch>
                    <Route
                      exact
                      path="/displaylist"
                      component={Displaylist}
                    />
                  </Switch>
                  <Switch>
                    <Route
                      exact
                      path="/editform"
                      component={Editform}
                    />
                  </Switch>
                  <Switch>
                    <Route
                      exact
                      path="/viewform"
                      component={Displayuser}
                    />
                  </Switch>
                </div>
                <Footer />
              </div>
            </Router>
          </Provider>
        );
    }

}


export default App;
