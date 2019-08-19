import React from 'react';
import PropTypes from 'prop-types';

class SlideCheckbox extends React.PureComponent {
  render() {
    const { onClick, checked, className, name } = this.props;

    return (
      <input
        type="checkbox"
        checked={checked}
        className={className}
        name={name}
        onClick={onClick}
      />
    );
  }
}

SlideCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SlideCheckbox;
