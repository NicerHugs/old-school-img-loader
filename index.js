'use strict';

var OldSchoolLoadImg = React.createClass({
  displayName: 'OldSchoolLoadImg',

  getDefaultProps: function getDefaultProps() {
    return { loadTime: 2000, boxsize: 10 };
  },
  getInitialState: function getInitialState() {
    return {
      row: 1,
      column: 0,
      totalRows: this.props.height / this.props.boxsize,
      totalColumns: this.props.width / this.props.boxsize
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var intervalTime = this.props.loadTime / (this.state.totalColumns * this.state.totalRows);
    var interval = setInterval(function () {
      if (_this.state.row >= _this.state.totalRows && _this.state.column >= _this.state.totalColumns) {
        clearInterval(_this.state.interval);
        _this.setState({ interval: null });
      } else if (_this.state.row <= _this.state.totalRows) {
        if (_this.state.column < _this.state.totalColumns) {
          _this.setState({ column: _this.state.column + 1 });
        } else {
          _this.setState({ row: _this.state.row + 1, column: 0 });
        }
      }
    }, intervalTime);
    this.setState({
      interval: interval
    });
  },
  rowStyles: function rowStyles() {
    var style = {
      position: 'absolute',
      height: this.props.height - this.state.row * this.props.boxsize + 'px',
      bottom: 0,
      left: 0,
      width: '100%',
      background: this.props.background };
    return style;
  },
  columnStyles: function columnStyles() {
    var style = {
      position: 'absolute',
      top: '-' + this.props.boxsize + 'px',
      right: 0,
      width: this.props.width - this.state.column * this.props.boxsize + 'px',
      height: this.props.boxsize + 'px', background: this.props.background
    };
    if (!this.state.interval) style.top = 0;
    return style;
  },
  render: function render() {
    return React.createElement(
      'div',
      { style: { height: this.props.height, width: this.props.width, overflow: 'hidden', position: 'relative' } },
      React.createElement('img', {
        src: this.props.src,
        height: '100%',
        width: '100%' }),
      React.createElement(
        'div',
        { style: this.rowStyles() },
        React.createElement('div', { style: this.columnStyles() })
      )
    );
  }
});

if (typeof module !== 'undefined') {
  module.exports = OldSchoolLoadImg;
}
