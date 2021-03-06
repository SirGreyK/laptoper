import Department from '../../components/catalog/Department'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getDepartments } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      catalog: state.catalog
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getDepartments: () => dispatch(getDepartments()),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Department))