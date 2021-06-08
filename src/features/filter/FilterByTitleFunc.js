import React from "react";
import { connect } from "react-redux";
import { filterByTitle } from '../../redux/actions'

function FilterByTitleFunc({ count, dispatch }) {
  return (
    <div>
      <input type='text' onChange={(e) => dispatch(filterByTitle(e.target.value))} />
      <span>Dem: {count}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.postsReducer.count
});

const mapDispatchToProps = dispatch => ({
  filterByTitle: () => dispatch(filterByTitle())
});

export default connect(
  mapStateToProps

)(FilterByTitleFunc)
