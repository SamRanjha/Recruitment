import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards'
import './Box.css'
import SelectSearch from 'react-select-search';
import './Search.css'
import { BallBeat } from 'react-pure-loaders';


function renderFriend(props, option, snapshot, className) {
    const imgStyle = {
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 10,
    };
    console.log("rendering");
    return (
        <button {...props} className={className} type="button">
            <span><img alt="" style={imgStyle} width="32" height="32" src={option.image} /><span>{option.name}</span></span>
        </button>
    );
}

export default class Search extends Component {
    state = {
        users: [],
        isLoading: true,
    };

    componentDidMount() {
        const fetchResponse = () => {
            //console.log('Component Did mount');
            axios.get('http://localhost:4000/users')
                .then(result => this.setState({
                    users: result.data,
                    isLoading: false

                }))
                .catch(error => this.setState({
                    error,
                    isLoading: false
                }));

        }
        fetchResponse();
        this.update = setInterval(fetchResponse, 40000);

    }


    render() {
        const isLoading = this.state.isLoading;
        const users = this.state.users;
        let userCards = (user) => <Cards img={user.image} name={user.name} address={user.address} description={user.description} company={user.company} className="box" padding='10'></Cards>
        if (isLoading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Please wait Profiles are loading</p>    
                <BallBeat
                        color={'#123abc'}
                        loading={true}
                    />
                </div>
            )
        }
        if (!isLoading && this.state.users.length > 0) {
            return (<div>
                <div className = "search">
                <SelectSearch
                    className="select-search select-search--multiple"
                    options={users}
                    renderOption={renderFriend}
                    search
                    placeholder="Search Profiles"
                    autoComplete="on"
                    autoFocus="on"
                />
                </div>
                <p>  </p>
                {console.log('users ' + this.state.users[0].image)}
                <div className="grid">{users.map(userCards)}</div>
            </div>)
        }
    }
}

