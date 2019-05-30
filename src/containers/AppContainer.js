import App from '../App'
import { connect } from 'react-redux'
import { loadMyMovieList } from '../actions/index'

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
  myMovieList: state.myMovieList
})
const mapDispatchToProps = (dispatch) => ({
  loadMyMovieList: (data) => dispatch(loadMyMovieList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)