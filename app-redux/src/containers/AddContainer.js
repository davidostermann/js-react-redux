import {connect} from 'react-redux';
import AddColorForm from '../components/add/AddColorForm';
import {handleNewChange, addHandler} from '../actions';

const mapStateToProps = (state) => {
  return {
    newColor: state.newColor
  };
};

const mapDispatchToProps = {
  handleNewChange,
  addHandler
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    addHandler: () => {
      dispatch((dispatch, getState) => {
        dispatch({
          type: 'ADD_COLOR',
          color: getState().newColor
        });
      });
    },
    handleNewChange: (key, value) => dispatch({
      type: 'CHANGE_NEW_COLOR',
      key,
      value
    })
  };
};*/

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddColorForm);

export default AddContainer;
