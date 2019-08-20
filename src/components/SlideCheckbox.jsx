import React from 'react';
import PropTypes from 'prop-types';
import '../css/slidecheckbox.css';

class SlideCheckbox extends React.PureComponent {
  render() {
    const { value, name, checked, onClick } = this.props;

    return (
      <label className="switch" htmlFor={name}>
        {value}
        <input
          type="checkbox"
          checked={checked}
          className="checkbox"
          name={name}
          onClick={onClick}
        />
        <div className="slider round" />
      </label>
    );
  }
}

SlideCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SlideCheckbox;
