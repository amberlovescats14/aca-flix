
// export const loadMovieList = () => (dispatch) => {
//   return type: "MY_MOVIE_LIST_LOADED"
//   fetch('/movies')
//   .then(res => res.json())
//   .then(data => {
//     dispatch(myMovieListLoaded(movies))
//   })
// }

export const loadMovieList = () => {
  console.log("loadmovielist")
  return (dispatch) => {
    dispatch({
      type: "MY_MOVIE_LIST_LOADED"
    })
    fetch("/movies")
    .then(res => res.json())
    .then(movies => {
      dispatch(myMovieListLoaded(movies))
    })
  }
}
export const myMovieListLoaded = (movies) => {
  console.log("mymovieListLoaded")
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  }
}


export const loadSearch = (searchTerm) => {
  console.log("loadSEarch")
  return (dispatch) => {
    dispatch({
      type: "LOAD_SEARCH"
    });
    fetch('https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=936603d1f1973d9f378ec8877216c330')
    .then(res => res.json())
    .then(movies => {
      dispatch(searchLoaded(movies))
    })
  }
}

export const searchLoaded = (movies) => {
  return (dispatch) => {
    console.log(movies.results)
    dispatch({
      type: "SEARCH_RESULTS_LOADED",
      value: movies.results
    })
  }
}

export const saveMyMovie = (movie) => {
  return (dispatch) => {
    fetch("/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movies)
    }).then(() => dispatch(loadMovieList()))

  }
}

// export const removeMyMovies = (id) => {
//   return (dispatch) => {
//     fetch("/movies" + id, {
//       method: "DELETE",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(movies)
//     }).then(() => dispatch(loadMovieList(movies)))

//   }
// }