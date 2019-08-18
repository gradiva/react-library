import React from 'react';

class Button extends React.PureComponent {
  render() {
    return (
      <button
        className="button"
        type={this.props.type}
        onClick={() => alert('click')}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
