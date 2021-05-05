import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/ContactForm/ContactForm-actions';
import selectors from '../../redux/ContactForm/ContactForm-selectors';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Filter extends Component {
  render() {
    const { filterState, onFilterChange } = this.props;
    return (
      <Form inline>
        <FormControl
          type="text"
          name="filter"
          value={filterState}
          onChange={onFilterChange}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  onFilterChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filterState: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: event => dispatch(actions.filterChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
