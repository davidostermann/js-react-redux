import {connect} from 'react-redux';
import ColorList from '../components/list/ColorList';
import {changeColor} from '../actions';

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  };
};

const mapDispatchToProps = {
  changeColor
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (col) => dispatch({
      type: 'CHANGE_COLOR',
      col
    })
  };
};*/

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);

export default ListContainer;
