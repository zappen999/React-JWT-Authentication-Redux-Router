import React, { PropTypes } from 'react';

/**
 * Menu button to toggle the state open/close in Menu.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
const ToggleMenuButton = React.createClass({
  render () {
    return (
      <button
        className={this.props.className}
        onClick={this.props.toggleMenu}>
        <i className={
          this.props.opened ? this.props.openedIcon : this.props.closedIcon
        }></i>
      </button>
    );
  }
});

ToggleMenuButton.propTypes = {
  opened: PropTypes.bool.isRequired,
  openedIcon: PropTypes.string.isRequired,
  closedIcon: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default ToggleMenuButton;
