import ListToggle from '../components/ListToggle'
import { connect } from 'react-redux'
import { saveMyMovie, removeMyMovie } from '../actions/index'

const mapDispatchToProps = (dispatch) => ({
  saveMyMovie : (movie) => dispatch(saveMyMovie(movie)),
  removeMyMove: (id) => dispatch(removeMyMovie(id))
})

export default connect(null, mapDispatchToProps)(ListToggle)