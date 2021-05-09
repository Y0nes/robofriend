import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            avatar : [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>res.json())
        .then(user => this.setState({avatar: user}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){
        const {avatar , searchField} = this.state;
         const filtredAvatar = avatar.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase())
        });



        return !avatar.length?<h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className= 'f1'>Friendo Avatar</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry >
                        <CardList avatar={filtredAvatar}/>
                    </ErrorBoundry>    
                </Scroll>
            </div>
        );
    }

}
export default App;