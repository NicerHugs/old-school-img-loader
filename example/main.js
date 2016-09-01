"use strict";

ReactDOM.render(React.createElement(OldSchoolImgLoader, {
  src: "https://fillmurray.com/300/300",
  height: 300,
  width: 300,
  boxsize: 20,
  loadTime: 3000,
  background: "#262626" }), document.getElementById('container'));
