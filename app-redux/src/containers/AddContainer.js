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

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddColorForm);

export default AddContainer;
