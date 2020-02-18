import React from 'react'
import Title from './Title'



class MovieRow extends React.Component {
  viewMovie () {
    console.log("Trying to view movie")
    console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    
    window.location.href = url
  }
    render() {
        return  <table className="movierow" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img class="poster" alt="poster" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <Title title={this.props.movie.title} />
              <p>{this.props.movie.overview}</p>
              <p>Release Date: {this.props.movie.release_date}</p>
              <p>Rating: {this.props.movie.vote_average === 0 ? 'N/A' : this.props.movie.vote_average}</p>
              <input target="_blank" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow