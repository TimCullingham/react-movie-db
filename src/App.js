import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    //console.log("This is my initializer")

    //   const movies = [
    //     {id: 0, poster_src: "", title:"Yadada", overview:"Dingidin"},
    //     {id: 1, poster_src: "", title:"Yada", overview:"Dingi"}
    //   ]

    //   let movieRows = []
    //   movies.forEach((movie) => {
    //     console.log(movie.title)
    //     const movieRow = <MovieRow movie={movie} />
    //     movieRows.push(movieRow)
    //   })

    //   this.state = {rows: movieRows}
  this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "url&query" +
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])


        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "" + movie.poster_path
          //console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

    searchChangeHandler(event) {
      console.log(event.target.value)
      const searchTerm = event.target.value
      this.performSearch(searchTerm)
    }

    render()  {
      return (
      <div>
        
        <table class="header">
          <tbody>
            <tr>
              <td>
                <img alt="app-logo" className="logo" src=""/>
              </td>
              <td>
                <h3>Movie DB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input onChange={this.searchChangeHandler.bind(this)} className="searchbar" placeholder="Enter Search Term"/>

        {this.state.rows}
        
      </div>
    );
  }
}
export default App;
