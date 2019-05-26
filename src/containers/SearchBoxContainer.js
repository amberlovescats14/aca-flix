import { connect } from 'react-redux'
import { loadSearch } from '../actions/index'
import SearchBox from '../components/SearchBox'

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.isLoading
//   }
// }
const mapDispatchToProps = (dispatch) => ({
  loadSearch: (searchTerm) => dispatch(loadSearch(searchTerm))
})

export default connect(null, mapDispatchToProps)(SearchBox)