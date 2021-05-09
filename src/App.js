import React, { Component } from 'react';
import {avatar} from './Avatar';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends Component {
    constructor() {
        super()
        this.state = {
            avatar : avatar,
            searchField : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){
        const {avatar , searchField} = this.state;
         const filtredAvatar = avatar.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return (
            <div className='tc'>
                <h1 className= 'f1'>Friendo Avatar</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <scroll>
                 <CardList avatar={filtredAvatar}/>
                </scroll>
            </div>
        );
    }

}
export default App;