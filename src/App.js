import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import SideBar from "./containers/SideBar";
import NavBar from "./containers/NavBar";
import FullNote from "./components/FullNote";
import SearchBar from "./components/SearchBar";
import TabsView from "./containers/tabsView";
import DropdownButton from "./components/DropdownButton";

const App = () => {
    return (
        <Router>
            <Route exact path="/">
                <Redirect to="/list_view"/>
            </Route>
            <div className="App">
                <NavBar>
                    <DropdownButton/>
                    <SearchBar/>
                </NavBar>
                <Switch>
                    <Route path="/list_view">
                        <div className="noteWrapper">
                            <SideBar/>
                            <Route path="/list_view/:id" component={FullNote}/>
                        </div>
                    </Route>
                    <Route path="/tabs_view" exact>
                        <div className="noteWrapper">
                            <TabsView/>
                        </div>
                    </Route>
                    <Route path="/tabs_view/:id" component={FullNote}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
