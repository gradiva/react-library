import React from 'react';

class Button extends React.PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <button
        className="button"
        type="button"
        onClick={onClick}
      >
        Something
      </button>
    );
  }
}

export default Button;
