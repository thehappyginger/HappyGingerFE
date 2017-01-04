require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _typeof2 = __webpack_require__(1);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(3);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(6);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(8);
  
  var _path = __webpack_require__(9);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(10);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(11);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(12);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(13);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(14);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(15);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(17);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(18);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(19);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _App = __webpack_require__(20);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(26);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(28);
  
  var _ErrorPage2 = __webpack_require__(30);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(37);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(40);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(47);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(56);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(104);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(27);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  // eslint-disable-line import/no-unresolved
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  if (false) {
    app.enable('trust proxy');
  }
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: ("production") !== 'production',
      rootValue: { request: req },
      pretty: ("production") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      var _ret;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var css, context, route, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        css = new _set2.default();
  
                        // Global (context) variables that can be easily accessed from any React component
                        // https://facebook.github.io/react/docs/context.html
  
                        context = {
                          // Enables critical path CSS rendering
                          // https://github.com/kriasoft/isomorphic-style-loader
                          insertCss: function insertCss() {
                            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                              styles[_key] = arguments[_key];
                            }
  
                            // eslint-disable-next-line no-underscore-dangle
                            styles.forEach(function (style) {
                              return css.add(style._getCss());
                            });
                          }
                        };
                        _context.next = 4;
                        return _universalRouter2.default.resolve(_routes2.default, {
                          path: req.path,
                          query: req.query
                        });
  
                      case 4:
                        route = _context.sent;
  
                        if (!route.redirect) {
                          _context.next = 8;
                          break;
                        }
  
                        res.redirect(route.status || 302, route.redirect);
                        return _context.abrupt('return', {
                          v: void 0
                        });
  
                      case 8:
                        data = (0, _extends3.default)({}, route);
  
                        data.children = _server2.default.renderToString((0, _jsx3.default)(_App2.default, {
                          context: context
                        }, void 0, route.component));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.scripts = [_assets2.default.vendor.js, _assets2.default.client.js];
                        if (_assets2.default[route.chunk]) {
                          data.scripts.push(_assets2.default[route.chunk].js);
                        }
  
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
                        res.status(route.status || 200);
                        res.send('<!doctype html>' + html);
  
                      case 16:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _ret = _context2.t0;
  
              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context2.next = 5;
                break;
              }
  
              return _context2.abrupt('return', _ret.v);
  
            case 5:
              _context2.next = 10;
              break;
  
            case 7:
              _context2.prev = 7;
              _context2.t1 = _context2['catch'](0);
  
              next(_context2.t1);
  
            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(_Html2.default, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss()
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_ErrorPage.ErrorPageWithoutStyle, {
      error: err
    }))));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(24);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(25);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };
  
  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(
   *     <App context={context}>
   *       <Layout>
   *         <LandingPage />
   *       </Layout>
   *     </App>,
   *     container,
   *   );
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var App = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return _react2.default.Children.only(this.props.children);
      }
    }]);
    return App;
  }(_react2.default.PureComponent);
  
  App.childContextTypes = ContextType;
  exports.default = App;

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(27);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  });
  
  var _ref2 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref3 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref4 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    href: 'apple-touch-icon.png'
  });
  
  var _ref5 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css',
    integrity: 'sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi',
    crossOrigin: 'anonymous'
  });
  
  var _ref6 = (0, _jsx3.default)('script', {
    src: 'https://www.google-analytics.com/analytics.js',
    async: true,
    defer: true
  });
  
  function Html(props) {
    var title = props.title,
        description = props.description,
        style = props.style,
        scripts = props.scripts,
        children = props.children;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: 'en'
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref, _ref2, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref3, _ref4, _ref5, style && (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      dangerouslySetInnerHTML: { __html: children }
    }), scripts && scripts.map(function (script) {
      return (0, _jsx3.default)('script', {
        src: script
      }, script);
    }), _config.analytics.google.trackingId && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
    }), _config.analytics.google.trackingId && _ref6));
  }
  
  exports.default = Html;

/***/ },
/* 27 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(30);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Error'), (0, _jsx3.default)('p', {}, void 0, 'Sorry, a critical error occurred on this page.')); /**
                                                                                                                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                                                                           *
                                                                                                                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                                                                           *
                                                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                                                           */
  
  function ErrorPage(props) {
    if (false) {
      var error = props.error;
  
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, error.name), (0, _jsx3.default)('p', {}, void 0, error.message), (0, _jsx3.default)('pre', {}, void 0, error.stack));
    }
  
    return _ref;
  }
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(31);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 32 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(34);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(35);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(36);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$replace = _ref.replace,
        replace = _ref$replace === undefined ? false : _ref$replace,
        _ref$prepend = _ref.prepend,
        prepend = _ref$prepend === undefined ? false : _ref$prepend;
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
          moduleId = _styles$i[0],
          css = _styles$i[1],
          media = _styles$i[2],
          sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap && btoa) {
        // skip IE9 and below, see http://caniuse.com/atob-btoa
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(38);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(39);
  
  var _models = __webpack_require__(40);
  
  var _config = __webpack_require__(27);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(41);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(43);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(44);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(45);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(46);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(42);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(27);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(42);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(41);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(42);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(41);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(42);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(41);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.STRING
    }
  
  });
  
  exports.default = UserClaim;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(42);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(41);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(48);
  
  var _me = __webpack_require__(49);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _news = __webpack_require__(51);
  
  var _news2 = _interopRequireDefault(_news);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        news: _news2.default
      }
    })
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = schema;

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(50);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(48);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(48);
  
  var _fetch = __webpack_require__(52);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(55);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(53);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(54);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(27);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(48);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable global-require */
  
  // The top-level (parent) route
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(57).default, __webpack_require__(84).default, __webpack_require__(88).default, __webpack_require__(92).default, __webpack_require__(98).default,
  
    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(100).default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                route = _context.sent;
  
  
                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
                route.description = route.description || '';
  
                return _context.abrupt('return', route);
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _stringify = __webpack_require__(34);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(58);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _fetch = __webpack_require__(52);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, _ref, data;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('/graphql', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    query: '{news{title,link,contentSnippet}}'
                  }),
                  credentials: 'include'
                });
  
              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();
  
              case 5:
                _ref = _context.sent;
                data = _ref.data;
  
                if (!(!data || !data.news)) {
                  _context.next = 9;
                  break;
                }
  
                throw new Error('Failed to load the news feed.');
  
              case 9:
                return _context.abrupt('return', {
                  title: 'React Starter Kit',
                  component: (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)(_Home2.default, {
                    news: data.news
                  }))
                });
  
              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Weather = __webpack_require__(59);
  
  var _Weather2 = _interopRequireDefault(_Weather);
  
  var _Home = __webpack_require__(62);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)('h2', {}, void 0, 'React.js News');
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'col-md-4'
  }, void 0, (0, _jsx3.default)(_Weather2.default, {
    weather_location: 'Summerhaven, AZ'
  }), (0, _jsx3.default)(_Weather2.default, {
    weather_location: 'Tucson, AZ'
  }));
  
  function Home(props) {
    return (0, _jsx3.default)('div', {
      className: _Home2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: 'container'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'row'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'col-md-8'
    }, void 0, _ref, (0, _jsx3.default)('ul', {
      className: _Home2.default.news
    }, void 0, props.news.map(function (item, index) {
      return (0, _jsx3.default)('li', {
        className: _Home2.default.newsItem
      }, index, (0, _jsx3.default)('a', {
        href: item.link,
        className: _Home2.default.newsTitle
      }, void 0, item.title), (0, _jsx3.default)('span', {
        className: _Home2.default.newsDesc,
        dangerouslySetInnerHTML: { __html: item.contentSnippet }
      }));
    }))), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(24);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(25);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _fetch = __webpack_require__(52);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _Weather = __webpack_require__(60);
  
  var _Weather2 = _interopRequireDefault(_Weather);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('hr', {});
  
  var _ref2 = (0, _jsx3.default)('hr', {});
  
  var Weather = function (_React$Component) {
    (0, _inherits3.default)(Weather, _React$Component);
  
    // eslint-disable-line react/prefer-stateless-function
    function Weather(props) {
      (0, _classCallCheck3.default)(this, Weather);
  
      // weather_location (FORMAT: <city>, <two letter state>; EX: Tucson, AZ)
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Weather.__proto__ || (0, _getPrototypeOf2.default)(Weather)).call(this, props));
  
      _this.state = {
        weather_data: {
          data: {},
          error: false,
          error_msg: '',
          isLoading: true
        }
      };
      return _this;
    }
  
    (0, _createClass3.default)(Weather, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.retriveWeatherData(this.props.weather_location);
      }
    }, {
      key: 'retriveWeatherData',
      value: function retriveWeatherData(loc) {
        var _this2 = this;
  
        if (loc) {
          var weatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\'' + loc + '\')&format=json';
  
          (0, _fetch2.default)(weatherUrl).then(function (response) {
            return response.json();
          }).then(function (weatherDataResponse) {
            return _this2.setState({
              weather_data: {
                data: weatherDataResponse.query.results.channel,
                isLoading: false
              }
            });
          }).catch(function (err) {
            return _this2.setState({
              weather_data: {
                error_msg: err,
                error: true,
                isLoading: false
              }
            });
          });
        } else {
          this.setState({
            weather_data: {
              error_msg: {
                message: 'Error: No location specified...'
              },
              error: true,
              isLoading: false
            }
          });
        }
      }
    }, {
      key: 'formatWeather',
      value: function formatWeather() {
        if (this.state.weather_data.isLoading) {
          return 'Loading...';
        }
  
        if (this.state.weather_data.error) {
          return 'Error: ' + this.state.weather_data.error_msg.message;
        }
  
        var weatherInfo = this.state.weather_data.data;
        return (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-md-12'
        }, void 0, (0, _jsx3.default)('h2', {
          className: 'location'
        }, void 0, weatherInfo.location.city, ', ', weatherInfo.location.region), (0, _jsx3.default)('div', {
          className: 'low'
        }, void 0, 'PubDate: ', weatherInfo.item.pubDate), _ref), (0, _jsx3.default)('div', {
          className: 'col-md-12'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'long'
        }, void 0, 'Current Temp: ', (0, _jsx3.default)('strong', {}, void 0, weatherInfo.item.condition.temp, '\xB0')), (0, _jsx3.default)('div', {
          className: 'long'
        }, void 0, 'Current Wind Chill: ', (0, _jsx3.default)('strong', {}, void 0, weatherInfo.wind.chill, '\xB0')), (0, _jsx3.default)('div', {
          className: 'long'
        }, void 0, 'Current Wind Speed: ', (0, _jsx3.default)('strong', {}, void 0, weatherInfo.wind.speed, 'mph')), _ref2), (0, _jsx3.default)('div', {
          className: 'col-md-12'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'low'
        }, void 0, 'Lat: ', weatherInfo.item.lat), (0, _jsx3.default)('div', {
          className: 'long'
        }, void 0, 'Long: ', weatherInfo.item.long)), (0, _jsx3.default)('div', {
          className: 'col-md-12'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'low'
        }, void 0, 'Sunrise: ', weatherInfo.astronomy.sunrise), (0, _jsx3.default)('div', {
          className: 'long'
        }, void 0, 'Sunset: ', weatherInfo.astronomy.sunset)));
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('Weather App Loaded.');
        return (0, _jsx3.default)('div', {
          className: _Weather2.default.root
        }, void 0, this.formatWeather());
      }
    }]);
    return Weather;
  }(_react2.default.Component);
  
  Weather.defaultProps = { weather_location: 'Tucson, AZ' };
  
  exports.default = (0, _withStyles2.default)(_Weather2.default)(Weather);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(61);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._3uRVF{padding-bottom:20px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3uRVF"
  };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(63);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._2IMq2{padding-left:20px;padding-right:20px}.oTyGp{padding:0}._3Ob1N{list-style-type:none;padding-bottom:6px}._1yWVz{font-size:1.125em}._1yWVz,._21LXz{display:block}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2IMq2",
  	"news": "oTyGp",
  	"newsItem": "_3Ob1N",
  	"newsTitle": "_1yWVz",
  	"newsDesc": "_21LXz"
  };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(65);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Header = __webpack_require__(67);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(78);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(81);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref = (0, _jsx3.default)(_Header2.default, {});
  
  var _ref2 = (0, _jsx3.default)(_Feedback2.default, {});
  
  var _ref3 = (0, _jsx3.default)(_Footer2.default, {});
  
  function Layout(props) {
    return (0, _jsx3.default)('div', {}, void 0, _ref, props.children, _ref2, _ref3);
  }
  
  exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(66);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);
  
  // exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(68);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(70);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(74);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import logoUrl from './logo-small.png';
  // import logoUrl2x from './logo-small@2x.png';
  
  function Header(props) {
    return (0, _jsx3.default)('div', {
      className: _Header2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Header2.default.container
    }, void 0, (0, _jsx3.default)(_Navigation2.default, {
      className: _Header2.default.nav
    }), (0, _jsx3.default)(_Link2.default, {
      className: _Header2.default.brand,
      to: '/'
    }, void 0, (0, _jsx3.default)('span', {
      className: _Header2.default.brandTxt
    }, void 0, 'HappyGinger')), (0, _jsx3.default)('div', {
      className: _Header2.default.banner
    }, void 0)));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(69);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._3Gi4A{background:#394a88;color:#fff}._1rGbt{margin:0 auto;padding:20px 0;max-width:1000px}._19lnX{color:#92e5fc;text-decoration:none;font-size:1.75em}._2mixT{margin-left:10px}._1zCyG{float:right;margin-top:6px}._2Lc2c{text-align:center}._2Qzpm{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}._3mmkW{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3Gi4A",
  	"container": "_1rGbt",
  	"brand": "_19lnX",
  	"brandTxt": "_2mixT",
  	"nav": "_1zCyG",
  	"banner": "_2Lc2c",
  	"bannerTitle": "_2Qzpm",
  	"bannerDesc": "_3mmkW"
  };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(71);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(24);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(25);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(72);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick }),
          children
        );
      }
    }]);
    return Link;
  }(_react2.default.Component);
  
  exports.default = Link;

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(73);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)(); /**
                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                   *
                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                   *
                                                                                   * This source code is licensed under the MIT license found in the
                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                   */

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(75);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Navigation = __webpack_require__(76);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(70);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Navigation(props) {
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)(_Navigation2.default.root, props.className),
      role: 'navigation'
    }, void 0, (0, _jsx3.default)(_Link2.default, {
      className: _Navigation2.default.link,
      to: '/about'
    }, void 0, 'About'), (0, _jsx3.default)(_Link2.default, {
      className: _Navigation2.default.link,
      to: '/contact'
    }, void 0, 'Contact'));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(77);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, ".Kev6U{margin:0}._1-rhI{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._1-rhI,._1-rhI:active,._1-rhI:visited{color:hsla(0,0%,100%,.6)}._1-rhI:hover,.g6k6K{color:#fff}.g6k6K{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.g6k6K:hover{background:rgba(0,0,0,.3)}._2KA91{color:hsla(0,0%,100%,.3)}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Kev6U",
  	"link": "_1-rhI",
  	"highlight": "g6k6K",
  	"spacer": "_2KA91"
  };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(79);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Feedback(props) {
    return (0, _jsx3.default)('div', {
      className: _Feedback2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Feedback2.default.container
    }, void 0));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Feedback2.default)(Feedback);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(80);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._2NP0J{background:#f5f5f5;color:#333}._2AyN4{margin:0 auto;padding:20px 8px;max-width:1000px;text-align:center;font-size:1.5em}._17M03,._17M03:active,._17M03:hover,._17M03:visited{color:#333;text-decoration:none}._17M03:hover{text-decoration:underline}._2n9Qd{padding-right:15px;padding-left:15px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2NP0J",
  	"container": "_2AyN4",
  	"link": "_17M03",
  	"spacer": "_2n9Qd"
  };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(82);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(70);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Footer(props) {
    return (0, _jsx3.default)('div', {
      className: _Footer2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Footer2.default.container
    }, void 0, (0, _jsx3.default)('span', {
      className: _Footer2.default.text
    }, void 0, '\xA9 ', new Date().getFullYear(), ' - Michael Cooper, Tucson, AZ'), (0, _jsx3.default)('span', {
      className: _Footer2.default.spacer
    }, void 0, '\xB7'), (0, _jsx3.default)(_Link2.default, {
      className: _Footer2.default.link,
      to: '/'
    }, void 0, 'Home'), (0, _jsx3.default)('span', {
      className: _Footer2.default.spacer
    }, void 0, '\xB7'), (0, _jsx3.default)(_Link2.default, {
      className: _Footer2.default.link,
      to: '/privacy'
    }, void 0, 'Privacy')));
  }
  
  exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(83);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._3Jihw{background:#333;color:#fff}.n1bVC{margin:0 auto;padding:20px 15px;max-width:1000px;text-align:center}._2mr6B{color:hsla(0,0%,100%,.5)}._3HO-I{color:hsla(0,0%,100%,.3)}._1sUkm,._2mr6B{padding:2px 5px;font-size:1em}._1sUkm,._1sUkm:active,._1sUkm:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._1sUkm:hover{color:#fff}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3Jihw",
  	"container": "n1bVC",
  	"text": "_2mr6B",
  	"spacer": "_3HO-I",
  	"link": "_1sUkm"
  };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Contact = __webpack_require__(85);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Contact Us'; /**
                             * React Starter Kit (https://www.reactstarterkit.com/)
                             *
                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                             *
                             * This source code is licensed under the MIT license found in the
                             * LICENSE.txt file in the root directory of this source tree.
                             */
  
  var _ref = (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)(_Contact2.default, {
    title: title
  }));
  
  exports.default = {
  
    path: '/contact',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Contact = __webpack_require__(86);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('p', {}, void 0, '...'); /**
                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                          *
                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                          *
                                                          * This source code is licensed under the MIT license found in the
                                                          * LICENSE.txt file in the root directory of this source tree.
                                                          */
  
  function Contact(props) {
    return (0, _jsx3.default)('div', {
      className: _Contact2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Contact2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, props.title), _ref));
  }
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(87);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._1G9oT{padding-left:20px;padding-right:20px}._2TnCn{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1G9oT",
  	"container": "_2TnCn"
  };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Register = __webpack_require__(89);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'New User Registration'; /**
                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                        *
                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                        *
                                        * This source code is licensed under the MIT license found in the
                                        * LICENSE.txt file in the root directory of this source tree.
                                        */
  
  var _ref = (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)(_Register2.default, {
    title: title
  }));
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Register = __webpack_require__(90);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('p', {}, void 0, '...'); /**
                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                          *
                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                          *
                                                          * This source code is licensed under the MIT license found in the
                                                          * LICENSE.txt file in the root directory of this source tree.
                                                          */
  
  function Register(props) {
    return (0, _jsx3.default)('div', {
      className: _Register2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Register2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, props.title), _ref));
  }
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._1hu0P{padding-left:20px;padding-right:20px}.OjhIB{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1hu0P",
  	"container": "OjhIB"
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _promise = __webpack_require__(93);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Page = __webpack_require__(94);
  
  var _Page2 = _interopRequireDefault(_Page);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/about',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    resolve(__webpack_require__(97));
                  }(__webpack_require__));
                });
  
              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: (0, _jsx3.default)(_Layout2.default, {}, void 0, _react2.default.createElement(_Page2.default, data))
                });
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 93 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Page = __webpack_require__(95);
  
  var _Page2 = _interopRequireDefault(_Page);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Page(props) {
    var title = props.title,
        html = props.html;
  
    return (0, _jsx3.default)('div', {
      className: _Page2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Page2.default.container
    }, void 0, title && (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('div', {
      dangerouslySetInnerHTML: { __html: html }
    })));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  exports.default = (0, _withStyles2.default)(_Page2.default)(Page);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(96);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._446UN{padding-left:20px;padding-right:20px}._1cey9{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_446UN",
  	"container": "_1cey9"
  };

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = {"title":"About Us","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _promise = __webpack_require__(93);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Page = __webpack_require__(94);
  
  var _Page2 = _interopRequireDefault(_Page);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/privacy',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    resolve(__webpack_require__(99));
                  }(__webpack_require__));
                });
  
              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: (0, _jsx3.default)(_Layout2.default, {}, void 0, _react2.default.createElement(_Page2.default, data))
                });
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 99 */
/***/ function(module, exports) {

  module.exports = {"title":"Privacy Policy","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(64);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(101);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Page Not Found'; /**
                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                 *
                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE.txt file in the root directory of this source tree.
                                 */
  
  var _ref = (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)(_NotFound2.default, {
    title: title
  }));
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _ref,
        status: 404
      };
    }
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(29);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _NotFound = __webpack_require__(102);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('p', {}, void 0, 'Sorry, the page you were trying to view does not exist.'); /**
                                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                              *
                                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                              *
                                                                                                              * This source code is licensed under the MIT license found in the
                                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                                              */
  
  function NotFound(props) {
    return (0, _jsx3.default)('div', {
      className: _NotFound2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _NotFound2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, props.title), _ref));
  }
  
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(103);
      var insertCss = __webpack_require__(33);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:5]\",\"minimize\":true,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports
  
  
  // module
  exports.push([module.id, "._3whbd{padding-left:20px;padding-right:20px}._1BOHG{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3whbd",
  	"container": "_1BOHG"
  };

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map