import React from 'react';
import  PropTypes from 'prop-types';
import  twemoji from 'twemoji';
import s from 'underscore.string';

// Component that uses the Twitter twemoji library to turn emoji-rich strings into spans with
// <img> tags in them (for cross-browser/os compatibility).
export default class EmojiSpan extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    children: PropTypes.string,
  };

  static defaultProps = {
    size: 36,
  };

  render() {
    let {children, size, ...attrs} = this.props;

    return (
      <span {...attrs} dangerouslySetInnerHTML={{__html: twemoji.parse(s.escapeHTML(children), {size: size})}} />
    );
  }
}

module.exports = EmojiSpan;
