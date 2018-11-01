import React from 'react';

class Demo extends React.Component {
  render() {
    var boxStyle = {
      backgroundColor: '#efefef',
      margin: 10,
      padding: '0 0 10px 0',
      width: 200,
      height: 300,
    };

    var headingStyle = {
      margin: '10px 0',
      padding: '0 0 10px 0',
      width: '100%',
      textAlign: 'center',
      fontWeight: 200,
      fontSize: 14,
      borderBottom: '1px solid #e5e5e5',
    };

    return (
      <div className="flex-box flex-column align-items-center" style={boxStyle}>
        <h3 style={headingStyle}>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Demo;
