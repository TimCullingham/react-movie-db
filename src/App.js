import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from "react-router-dom";
import './App.css'
import MovieRow from './MovieRow'
import Nav from './Nav'
import Pagination from './Pagination'
import $ from 'jquery'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import MovieInfo from './MovieInfo'
import Movie from './Movie'
import About from './About'
import Title from './Title'


const API_KEY= 'e93798dcf27c2ec7429e086923b41287';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      popularMovies: [],
      totalResults: 0,
      searchTerm: '',
      currentPage: 1,
      movies: [],
      currentMovie: null,
      title: ''
    }
    this.apiKey = API_KEY;
    

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
  // this.performSearch("")
   }

  // performSearch(searchTerm) {
  //   console.log("Perform search using moviedb")
  //   const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e93798dcf27c2ec7429e086923b41287&query=" + searchTerm
  //   $.ajax({
  //     url: urlString,
  //     success: (searchResults) => {
  //       console.log("Fetched data successfully")
  //       //console.log(searchResults) 
  //       const results = searchResults.results
  //       //console.log(results[0])


  //       let movieRows = []

  //       results.forEach((movie) => {
  //         movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
  //         //console.log(movie.poster_path)
  //         const movieRow = <MovieRow key={movie.id} movie={movie}/>
  //         movieRows.push(movieRow)
  //       })

  //       this.setState({rows: movieRows})
  //     },
  //     error: (xhr, status, err) => {
  //       console.error("Failed to fetch data")
  //     }
  //   })
  //   
  // }

    

    nextPage = (pageNumber) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: [...data.results], currentPage: pageNumber })
      })
    }

    handleChange = (e) => {
      this.setState({ searchTerm: e.target.value })
    }
    
    // showTitle = () => {
    //   fetch (`https://api.themoviedb.org/3/movie/title?api_key=${this.apiKey}&language=en-US`)
    //   .then(data => data.json())
    //   .then(data => {
    //     this.setState({ movies: [...data.results], title: data.title})
    //   })
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      fetch (`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], totalResults: data.total_results})
      }) 
    }

    displayPopular = () => {
      fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
      .then(data => data.json())
      .then(data => {
        this.setState({movies: [...data.results], popularMovies: data.popularity})
      })
    }

    viewMovieInfo = (id) => {
      const filteredMovie = this.state.movies.filter(movie => movie.id == id)
      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
      this.setState({currentMovie: newCurrentMovie})
    }

    closeMovieInfo = () => {
      this.setState({currentMovie: null})
    }

    render()  {
      const numberPages = Math.floor(this.state.totalResults / 20);
      return (
        
        
        <div className="App">
          
          < Nav />
          
        <Router>
          <Link className="" to="/cinecide/about">About</Link>

          <Switch>
            <Route path="/cinecide/about" component={About} />
          </Switch>
        </Router>

          { this.state.currentMovie == null ? <div>< SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>< MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
          
          { this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      
          { this.state.currentPage === 1 && this.state.searchTerm === '' && this.state.movies != [] ? <div>{this.displayPopular()}</div> : '' }
          
          
          
        </div>

    );
  }
}


export default App