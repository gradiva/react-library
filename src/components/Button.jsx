import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { onClick, value } = this.props;

    return (
      <button
        className="button"
        type="button"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

export default Button;
