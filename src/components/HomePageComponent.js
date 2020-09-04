import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
class HomePageComponent extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getMovies();
    }

    getMovies() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums ';
        
        axios.get(url)
        .then(res => {
            const movies = res.data;
            this.setState({ data: movies });

            console.log(this.state.data);
        })
    }

    render() {
        return(
            <div>

                <div className="cards">
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="content">
                                        <img src={item.image} />
                                        <h3>{item.title}</h3>
                                        <p>{item.artist}</p>
                                        <a href={item.url} target="blank">Buy Now</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default HomePageComponent;