How to setup grunt with webpack and Babel (ES6 transpiler).

## Installation

```Text
npm install babel-loader babel-core babel-preset-es2015 --save-dev

Run command :  webpack

```

### This demo demonstrate:
```
  How to use inheritance.
  ES6 Import and export.
```

### Issue:
```
Run build using webpack, build.js contain duplicate code set in each Webpack module 1,2,3,4.

One set of duplicate code is look similar as below
```

```javascript
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
```

