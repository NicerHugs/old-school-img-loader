# Old School Image Loader

A silly little React component that makes your images look like they've loaded on a high tech 1980's computer from the movies.

## Example
View the [live example](https://nicerhugs.github.io/old-school-img-loader/)

View the [code for the live example](/example)

## Usage
- install: `npm install --save old-school-img-loader`
- import/require:
```js
import OldSchoolImgLoader from 'old-school-img-loader';
var OldSchoolImgLoader = require('old-school-img-loader');
```
- use:
```js
<OldSchoolImgLoader
	src="https://fillmurray.com/300/300"
	height={300}
	width={300}
	background="#262626"
	boxsize={20}
	loadTime={3000}/>
```

## Required Props
- `src`: string. Your src will be passed to an `img` tag directly
- `height`: valid css height value. The height of your `img` is required, to follow best practices in your HTML.
- `width`: see height, but use the word width instead
- `background`: string. Make sure the background of your image loads the same color as the surrounding background. Required because it's not actually background, it's foreground masquarading as background.

## Optional Props
- `boxsize`: integer. How big (in pixels) do you want the loading boxes to be. Default is 10px.
- `loadTime`: integer. The approximate time in milliseconds you wish the total load time for the image to take. Approximate because screen painting time ultimately sets the lower limit.
