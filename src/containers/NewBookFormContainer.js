import { connect } from 'react-redux';
import NewBookForm from '../components/NewBookForm';
import { addBook } from '../actions/libraryActions';

const mapStateToProps = (state) => ({
  hidden: !state.ui.newBookFormVisible,
});

const mapDispatchToProps = {
  addBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBookForm);
