import React from 'react';
import {render} from 'react-dom';
import OldSchoolImgLoader from '../..';

render(
  <OldSchoolImgLoader
    src="https://fillmurray.com/300/300"
    height={300}
    width={300}
    boxsize={20}
    loadTime={3000}
    background="#fff"/>,
  document.getElementById('container')
);
