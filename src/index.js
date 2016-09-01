var React = require('react');

var OldSchoolImgLoader = React.createClass({
	getDefaultProps() {
  	return {loadTime: 2000, boxsize: 10}
  },
	getInitialState() {
  	return {
    	row: 1,
      column: 0,
      totalRows: this.props.height / this.props.boxsize,
      totalColumns: this.props.width / this.props.boxsize,
    }
  },
  componentDidMount() {
  	let intervalTime = this.props.loadTime/(this.state.totalColumns*this.state.totalRows)
  	let interval = setInterval(() => {
    	if (this.state.row >= this.state.totalRows &&
      		this.state.column >= this.state.totalColumns) {
      	clearInterval(this.state.interval);
      	this.setState({interval: null});
      } else if (this.state.row <= this.state.totalRows) {
      	if (this.state.column < this.state.totalColumns) {
        	this.setState({column: this.state.column + 1})
        } else {
          this.setState({row: this.state.row + 1, column: 0})
        }
      }
    }, intervalTime)
  	this.setState({
      interval: interval
    })
  },
  rowStyles() {
  	let style = {
      position: 'absolute',
      height: `${(this.props.height - this.state.row * this.props.boxsize)}px`,
      bottom: 0,
      left: 0,
      width: '100%',
      background: this.props.background};
  	return style;
  },
  columnStyles() {
  	let style = {
      position: 'absolute',
      top: `-${this.props.boxsize}px`,
      right: 0,
      width: `${(this.props.width - this.state.column * this.props.boxsize)}px`,
      height: `${this.props.boxsize}px`, background: this.props.background
    }
    if (!this.state.interval) style.top = 0;
	  return style;
  },
  render() {
    return (
    	<div
				className="old-school-img"
				style={{display: 'inline-block', height: this.props.height, width: this.props.width, overflow: 'hidden', position: 'relative'}}>
      	<img
        	src={this.props.src}
          height="100%"
          width="100%"/>
        <div style={this.rowStyles()}>
        	<div style={this.columnStyles()}/>
        </div>
      </div>
		);
  }
});

if (typeof module !== 'undefined') {
  module.exports = OldSchoolImgLoader;
}
