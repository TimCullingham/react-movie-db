import React from 'react';
import Title from './Title'


const Movie = (props) => {

    return (
        
        <div className="col s12 m6 l3">
            <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
                <div className="overlay">

                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            {
                                props.image == null ? <img src='https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' alt="Image not Found" style={{ width: '100%', height: 300}}/> : <img className="poster" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie poster" style={{ width: '100%', height: 360}} />
                            }
                            
                        </div>
                
                    <div className="description">
                        <p>{props.release_date}</p>
                        <p>{props.overview}</p>
                        <p>{props.rating}</p>
                    </div>
                        <div className="card-content">
                            <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
} 

export default Movie