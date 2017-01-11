require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

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

  var _extends2 = __webpack_require__(4);

  var _extends3 = _interopRequireDefault(_extends2);

  var _set = __webpack_require__(5);

  var _set2 = _interopRequireDefault(_set);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/server.js'; /**
                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                            *
                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                            *
                                                                            * This source code is licensed under the MIT license found in the
                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                            */

  // eslint-disable-line import/no-unresolved

  __webpack_require__(7);

  var _path = __webpack_require__(8);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(9);

  var _express2 = _interopRequireDefault(_express);

  var _cookieParser = __webpack_require__(10);

  var _cookieParser2 = _interopRequireDefault(_cookieParser);

  var _bodyParser = __webpack_require__(11);

  var _bodyParser2 = _interopRequireDefault(_bodyParser);

  var _expressJwt = __webpack_require__(12);

  var _expressJwt2 = _interopRequireDefault(_expressJwt);

  var _expressGraphql = __webpack_require__(13);

  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

  var _jsonwebtoken = __webpack_require__(14);

  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _server = __webpack_require__(16);

  var _server2 = _interopRequireDefault(_server);

  var _universalRouter = __webpack_require__(17);

  var _universalRouter2 = _interopRequireDefault(_universalRouter);

  var _prettyError = __webpack_require__(18);

  var _prettyError2 = _interopRequireDefault(_prettyError);

  var _App = __webpack_require__(19);

  var _App2 = _interopRequireDefault(_App);

  var _Html = __webpack_require__(25);

  var _Html2 = _interopRequireDefault(_Html);

  var _ErrorPage = __webpack_require__(27);

  var _ErrorPage2 = __webpack_require__(29);

  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);

  var _passport = __webpack_require__(36);

  var _passport2 = _interopRequireDefault(_passport);

  var _models = __webpack_require__(39);

  var _models2 = _interopRequireDefault(_models);

  var _schema = __webpack_require__(46);

  var _schema2 = _interopRequireDefault(_schema);

  var _routes = __webpack_require__(55);

  var _routes2 = _interopRequireDefault(_routes);

  var _assets = __webpack_require__(107);

  var _assets2 = _interopRequireDefault(_assets);

  var _config = __webpack_require__(26);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var app = (0, _express2.default)();

  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
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

  if (true) {
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
      graphiql: ("development") !== 'production',
      rootValue: { request: req },
      pretty: ("development") !== 'production'
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

                        data.children = _server2.default.renderToString(_react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 115
                            },
                            __self: undefined
                          },
                          route.component
                        ));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.scripts = [_assets2.default.vendor.js, _assets2.default.client.js];
                        if (_assets2.default[route.chunk]) {
                          data.scripts.push(_assets2.default[route.chunk].js);
                        }

                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125
                          },
                          __self: undefined
                        })));

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
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: undefined
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: undefined
      }))
    ));
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

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react = __webpack_require__(15);

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

  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
    exports.default = App;

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Html.js'; /**
                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                     *
                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                     *
                                                                                     * This source code is licensed under the MIT license found in the
                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                     */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _config = __webpack_require__(26);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Html = function (_React$Component) {
    (0, _inherits3.default)(Html, _React$Component);

    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
    }

    (0, _createClass3.default)(Html, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            title = _props.title,
            description = _props.description,
            style = _props.style,
            scripts = _props.scripts,
            children = _props.children;

        return _react2.default.createElement(
          'html',
          { className: 'no-js', lang: 'en', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          _react2.default.createElement(
            'head',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }),
            _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }),
            _react2.default.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('meta', { name: 'description', content: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }),
            _react2.default.createElement('link', {
              rel: 'stylesheet',
              href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css',
              integrity: 'sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi',
              crossOrigin: 'anonymous',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }),
            style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'body',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            }),
            scripts && scripts.map(function (script) {
              return _react2.default.createElement('script', { key: script, src: script, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: _this2
              });
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', {
              dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }),
            _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Html;
  }(_react2.default.Component);

  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string,
    scripts: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
    children: _react.PropTypes.string
  };
    exports.default = Html;

/***/ },
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/error/ErrorPage.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _ErrorPage = __webpack_require__(29);

  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ErrorPage = function (_React$Component) {
    (0, _inherits3.default)(ErrorPage, _React$Component);

    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(ErrorPage, [{
      key: 'render',
      value: function render() {
        if (true) {
          var error = this.props.error;

          return _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              error.name
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              error.message
            ),
            _react2.default.createElement(
              'pre',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              error.stack
            )
          );
        }

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            'Error'
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            'Sorry, a critical error occurred on this page.'
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react2.default.Component);

  ErrorPage.propTypes = {
    error: _react.PropTypes.object.isRequired
  };
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(30);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

  // exports


/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _stringify = __webpack_require__(33);

  var _stringify2 = _interopRequireDefault(_stringify);

  var _slicedToArray2 = __webpack_require__(34);

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _getIterator2 = __webpack_require__(35);

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
/* 33 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _passport = __webpack_require__(37);

  var _passport2 = _interopRequireDefault(_passport);

  var _passportFacebook = __webpack_require__(38);

  var _models = __webpack_require__(39);

  var _config = __webpack_require__(26);

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
/* 37 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;

  var _sequelize = __webpack_require__(40);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _User = __webpack_require__(42);

  var _User2 = _interopRequireDefault(_User);

  var _UserLogin = __webpack_require__(43);

  var _UserLogin2 = _interopRequireDefault(_UserLogin);

  var _UserClaim = __webpack_require__(44);

  var _UserClaim2 = _interopRequireDefault(_UserClaim);

  var _UserProfile = __webpack_require__(45);

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(41);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _config = __webpack_require__(26);

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
/* 41 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(41);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(40);

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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(41);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(40);

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(41);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(40);

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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sequelize = __webpack_require__(41);

  var _sequelize2 = _interopRequireDefault(_sequelize);

  var _sequelize3 = __webpack_require__(40);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(47);

  var _me = __webpack_require__(48);

  var _me2 = _interopRequireDefault(_me);

  var _news = __webpack_require__(50);

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
/* 47 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _UserType = __webpack_require__(49);

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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(47);

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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(47);

  var _fetch = __webpack_require__(51);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _NewsItemType = __webpack_require__(54);

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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;

  var _bluebird = __webpack_require__(52);

  var _bluebird2 = _interopRequireDefault(_bluebird);

  var _nodeFetch = __webpack_require__(53);

  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

  var _config = __webpack_require__(26);

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
/* 52 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _graphql = __webpack_require__(47);

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

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
    children: [__webpack_require__(56).default, __webpack_require__(87).default, __webpack_require__(91).default, __webpack_require__(95).default, __webpack_require__(101).default, __webpack_require__(108).default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(103).default],

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/home/index.js'; /**
                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                       *
                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                       *
                                                                                       * This source code is licensed under the MIT license found in the
                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                       */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Home = __webpack_require__(77);

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Homepage';

  exports.default = {

    path: '/',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Home2.default, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: _this
                    })
                  )
                });

              case 1:
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

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Layout/Layout.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Layout = __webpack_require__(58);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Header = __webpack_require__(60);

  var _Header2 = _interopRequireDefault(_Header);

  var _Feedback = __webpack_require__(71);

  var _Feedback2 = _interopRequireDefault(_Feedback);

  var _Footer = __webpack_require__(74);

  var _Footer2 = _interopRequireDefault(_Footer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          this.props.children,
          _react2.default.createElement(_Feedback2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          _react2.default.createElement(_Footer2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          })
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);

  Layout.propTypes = {
    children: _react.PropTypes.node.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(59);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;/* 1 */\n  line-height: 1.15;/* 2 */\n  -ms-text-size-adjust: 100%;/* 3 */\n  -webkit-text-size-adjust: 100%;/* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {/* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;/* 1 */\n  height: 0;/* 1 */\n  overflow: visible;/* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;/* 1 */\n  -webkit-text-decoration-skip: objects;/* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;/* 1 */\n  text-decoration: underline;/* 2 */\n  text-decoration: underline dotted;/* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;/* 1 */\n  font-size: 100%;/* 1 */\n  line-height: 1.15;/* 1 */\n  margin: 0;/* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {/* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {/* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;/* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;/* 1 */\n  color: inherit;/* 2 */\n  display: table;/* 1 */\n  max-width: 100%;/* 1 */\n  padding: 0;/* 3 */\n  white-space: normal;/* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;/* 1 */\n  vertical-align: baseline;/* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;/* 1 */\n  padding: 0;/* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;/* 1 */\n  outline-offset: -2px;/* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;/* 1 */\n  font: inherit;/* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,OAAQ;EAChC,kBAAkB,OAAQ;EAC1B,2BAA2B,OAAQ;EACnC,+BAA+B,OAAQ;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;MAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,OAAQ;EAChC,UAAU,OAAQ;EAClB,kBAAkB,OAAQ;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,sCAAsC,OAAQ;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,OAAQ;EAC5B,2BAA2B,OAAQ;EACnC,kCAAkC,OAAQ;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,OAAQ;EAChC,gBAAgB,OAAQ;EACxB,kBAAkB,OAAQ;EAC1B,UAAU,OAAQ;CACnB;;AAED;;;GAGG;;AAEH;OACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,OAAQ;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,OAAQ;EAC/B,eAAe,OAAQ;EACvB,eAAe,OAAQ;EACvB,gBAAgB,OAAQ;EACxB,WAAW,OAAQ;EACnB,oBAAoB,OAAQ;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,OAAQ;EAC9B,yBAAyB,OAAQ;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,OAAQ;EAC/B,WAAW,OAAQ;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,qBAAqB,OAAQ;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,OAAQ;EACnC,cAAc,OAAQ;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADjcD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Header/Header.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Header = __webpack_require__(61);

  var _Header2 = _interopRequireDefault(_Header);

  var _Link = __webpack_require__(63);

  var _Link2 = _interopRequireDefault(_Link);

  var _Navigation = __webpack_require__(67);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // import logoUrl from './logo-small.png';
  // import logoUrl2x from './logo-small@2x.png';

  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Header2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Header2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            }),
            _react2.default.createElement(
              _Link2.default,
              { className: _Header2.default.brand, to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              _react2.default.createElement(
                'span',
                { className: _Header2.default.brandTxt, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'HappyGinger'
              )
            ),
            _react2.default.createElement('div', { className: _Header2.default.banner, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Header;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(62);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Header-root-3Gi4A {\n  background: #394a88;\n  color: #fff;\n}\n\n.Header-container-1rGbt {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-19lnX,\n.Header-brand-19lnX:visited,\n.Header-brand-19lnX:active,\n.Header-brand-19lnX:focus {\n  color: rgb(211, 218, 243);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brand-19lnX:hover {\n  color: rgb(191, 202, 237);\n  text-decoration: none;\n}\n\n.Header-brandTxt-2mixT {\n  margin-left: 10px;\n}\n\n.Header-nav-1zCyG {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner-2Lc2c {\n  text-align: center;\n}\n\n.Header-bannerTitle-2Qzpm {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-3mmkW {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/./components/Header/Header.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;;;;EAIE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,0BAAgD;EAChD,sBAAsB;CACvB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #acbae8;\n}\n\n.root {\n  background: #394a88;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand,\n.brand:visited,\n.brand:active,\n.brand:focus {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brand:hover {\n  color: color(var(--brand-color) lightness(+5%));\n  text-decoration: none;\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Header-root-3Gi4A",
  	"container": "Header-container-1rGbt",
  	"brand": "Header-brand-19lnX",
  	"brandTxt": "Header-brandTxt-2mixT",
  	"nav": "Header-nav-1zCyG",
  	"banner": "Header-banner-2Lc2c",
  	"bannerTitle": "Header-bannerTitle-2Qzpm",
  	"bannerDesc": "Header-bannerDesc-3mmkW"
  };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(4);

  var _extends3 = _interopRequireDefault(_extends2);

  var _objectWithoutProperties2 = __webpack_require__(64);

  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Link/Link.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _history = __webpack_require__(65);

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }),
          children
        );
      }
    }]);
    return Link;
  }(_react2.default.Component);

  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
    exports.default = Link;

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(66);

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
/* 66 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Navigation/Navigation.js'; /**
                                                                                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                      *
                                                                                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                      *
                                                                                                      * This source code is licensed under the MIT license found in the
                                                                                                      * LICENSE.txt file in the root directory of this source tree.
                                                                                                      */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _classnames = __webpack_require__(68);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Navigation = __webpack_require__(69);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Link = __webpack_require__(63);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Navigation = function (_React$Component) {
    (0, _inherits3.default)(Navigation, _React$Component);

    function Navigation() {
      (0, _classCallCheck3.default)(this, Navigation);
      return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_Navigation2.default.root, this.props.className), role: 'navigation', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/about', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'About'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/contact', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            'Contact'
          )
        );
      }
    }]);
    return Navigation;
  }(_react2.default.Component);

  Navigation.propTypes = {
    className: _react.PropTypes.string
  };
    exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(70);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-Kev6U {\n  margin: 0;\n}\n\n.Navigation-link-1-rhI {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-1-rhI,\n.Navigation-link-1-rhI:active,\n.Navigation-link-1-rhI:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-1-rhI:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-g6k6K {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-g6k6K:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-2KA91 {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/./components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  margin: 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Navigation-root-Kev6U",
  	"link": "Navigation-link-1-rhI",
  	"highlight": "Navigation-highlight-g6k6K",
  	"spacer": "Navigation-spacer-2KA91"
  };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Feedback/Feedback.js'; /**
                                                                                                  * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                  *
                                                                                                  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                  *
                                                                                                  * This source code is licensed under the MIT license found in the
                                                                                                  * LICENSE.txt file in the root directory of this source tree.
                                                                                                  */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Feedback = __webpack_require__(72);

  var _Feedback2 = _interopRequireDefault(_Feedback);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Feedback = function (_React$Component) {
    (0, _inherits3.default)(Feedback, _React$Component);

    function Feedback() {
      (0, _classCallCheck3.default)(this, Feedback);
      return (0, _possibleConstructorReturn3.default)(this, (Feedback.__proto__ || (0, _getPrototypeOf2.default)(Feedback)).apply(this, arguments));
    }

    (0, _createClass3.default)(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Feedback2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          _react2.default.createElement('div', { className: _Feedback2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          })
        );
      }
    }]);
    return Feedback;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Feedback2.default)(Feedback);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(73);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Feedback.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Feedback-root-2NP0J {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.Feedback-container-2AyN4 {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.Feedback-link-17M03,\n.Feedback-link-17M03:active,\n.Feedback-link-17M03:hover,\n.Feedback-link-17M03:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.Feedback-link-17M03:hover {\n  text-decoration: underline;\n}\n\n.Feedback-spacer-2n9Qd {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", "", {"version":3,"sources":["/./components/Feedback/Feedback.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,mBAAmB;EACnB,iBAAiB,CAAC,WAAW;CAC9B;;AAED;;;;EAIE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,oBAAoB;EACpB,mBAAmB;CACpB","file":"Feedback.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: var(--max-content-width);\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.link,\n.link:active,\n.link:hover,\n.link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Feedback-root-2NP0J",
  	"container": "Feedback-container-2AyN4",
  	"link": "Feedback-link-17M03",
  	"spacer": "Feedback-spacer-2n9Qd"
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Footer/Footer.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Footer = __webpack_require__(75);

  var _Footer2 = _interopRequireDefault(_Footer);

  var _Link = __webpack_require__(63);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);

    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Footer2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Footer2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.text, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              '\xA9 ',
              new Date().getFullYear(),
              ' - Michael Cooper, Tucson, AZ'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              '\xB7'
            ),
            _react2.default.createElement(
              _Link2.default,
              { className: _Footer2.default.link, to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              'Home'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              '\xB7'
            ),
            _react2.default.createElement(
              _Link2.default,
              { className: _Footer2.default.link, to: '/privacy', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'Privacy'
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(76);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Footer-root-3Jihw {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-n1bVC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-2mr6B {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-3HO-I {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-2mr6B,\n.Footer-link-1sUkm {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-1sUkm,\n.Footer-link-1sUkm:active,\n.Footer-link-1sUkm:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-1sUkm:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./components/Footer/Footer.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;AC5BD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Footer-root-3Jihw",
  	"container": "Footer-container-n1bVC",
  	"text": "Footer-text-2mr6B",
  	"spacer": "Footer-spacer-3HO-I",
  	"link": "Footer-link-1sUkm"
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/home/Home.js'; /**
                                                                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                      *
                                                                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                      *
                                                                                      * This source code is licensed under the MIT license found in the
                                                                                      * LICENSE.txt file in the root directory of this source tree.
                                                                                      */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Weather = __webpack_require__(78);

  var _Weather2 = _interopRequireDefault(_Weather);

  var _Link = __webpack_require__(63);

  var _Link2 = _interopRequireDefault(_Link);

  var _Home = __webpack_require__(85);

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home(props) {
      (0, _classCallCheck3.default)(this, Home);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

      _this.state = {};
      return _this;
    }

    (0, _createClass3.default)(Home, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Home2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Home2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: 'col-md-7', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h1',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: this
                  },
                  'Michael Coooper\'s Homepage'
                ),
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: this
                  },
                  'Quick Project Links'
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: 'https://github.com/thehappyginger', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        },
                        __self: this
                      },
                      'HappyGinger Github Repo'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      _Link2.default,
                      { to: '/minecraft', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        },
                        __self: this
                      },
                      'Minecraft Server Moniter/Console'
                    ),
                    _react2.default.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      },
                      __self: this
                    }),
                    'This is a small NodeJs app that I wrote to control a Minecraft Servr via a public REST API.'
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  'Documentation Links'
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//facebook.github.io/react/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40
                        },
                        __self: this
                      },
                      'ReactJs Documenation'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//getbootstrap.com/css/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        },
                        __self: this
                      },
                      'Bootstrap CSS Documenation'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//minecraft.gamepedia.com/Commands/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42
                        },
                        __self: this
                      },
                      'Minecraft Console Commands'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//https://github.com/kriasoft/react-starter-kit', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43
                        },
                        __self: this
                      },
                      'ReactJs Boilerplate'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  },
                  'Commonly Used Websites'
                ),
                _react2.default.createElement(
                  'ul',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//www.google.com/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: this
                      },
                      'Google'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//www.amazon.com/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 48
                        },
                        __self: this
                      },
                      'Amazon'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'a',
                      { href: '//www.ebay.com/', target: '_blank', rel: 'noopener noreferrer', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 49
                        },
                        __self: this
                      },
                      'Ebay'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: this
                },
                _react2.default.createElement(_Weather2.default, { weather_location: 'Tucson, AZ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                }),
                _react2.default.createElement(_Weather2.default, { weather_location: 'Summerhaven, AZ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                })
              )
            )
          )
        );
      }
    }]);
    return Home;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Weather/Weather.js';

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _fetch = __webpack_require__(51);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Weather = __webpack_require__(79);

  var _Weather2 = _interopRequireDefault(_Weather);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Weather = function (_React$Component) {
    (0, _inherits3.default)(Weather, _React$Component);

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
        return _react2.default.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            _react2.default.createElement(
              'h2',
              { className: 'location', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              weatherInfo.location.city,
              ', ',
              weatherInfo.location.region
            ),
            _react2.default.createElement(
              'div',
              { className: 'low', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              'PubDate: ',
              weatherInfo.item.pubDate
            ),
            _react2.default.createElement('hr', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'long', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                },
                __self: this
              },
              'Current Temp: ',
              _react2.default.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  },
                  __self: this
                },
                weatherInfo.item.condition.temp,
                '\xB0'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'long', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              },
              'Current Wind Chill: ',
              _react2.default.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: this
                },
                weatherInfo.wind.chill,
                '\xB0'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'long', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              'Current Wind Speed: ',
              _react2.default.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  },
                  __self: this
                },
                weatherInfo.wind.speed,
                'mph'
              )
            ),
            _react2.default.createElement('hr', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'low', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                },
                __self: this
              },
              'Lat: ',
              weatherInfo.item.lat
            ),
            _react2.default.createElement(
              'div',
              { className: 'long', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              'Long: ',
              weatherInfo.item.long
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'low', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              'Sunrise: ',
              weatherInfo.astronomy.sunrise
            ),
            _react2.default.createElement(
              'div',
              { className: 'long', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                },
                __self: this
              },
              'Sunset: ',
              weatherInfo.astronomy.sunset
            )
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('Weather App Loaded.');
        return _react2.default.createElement(
          'div',
          { className: _Weather2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          },
          this.formatWeather()
        );
      }
    }]);
    return Weather;
  }(_react2.default.Component);

  Weather.propTypes = { weather_location: _react2.default.PropTypes.string };
  Weather.defaultProps = { weather_location: 'Tucson, AZ' };

  exports.default = (0, _withStyles2.default)(_Weather2.default)(Weather);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(80);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Weather.css");

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

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Weather-root-3uRVF {\n  padding: 20px 0;\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./components/Weather/Weather.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;AC5BD;EACE,gBAAgB;CACjB","file":"Weather.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.root {\n  padding: 20px 0;\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Weather-root-3uRVF"
  };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(82);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/MinecraftMoniter/MinecraftMonit.js';

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _fetch = __webpack_require__(51);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _MinecraftMonit = __webpack_require__(83);

  var _MinecraftMonit2 = _interopRequireDefault(_MinecraftMonit);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var MinecraftMonit = function (_React$Component) {
    (0, _inherits3.default)(MinecraftMonit, _React$Component);

    function MinecraftMonit(props) {
      (0, _classCallCheck3.default)(this, MinecraftMonit);

      // command

      var _this = (0, _possibleConstructorReturn3.default)(this, (MinecraftMonit.__proto__ || (0, _getPrototypeOf2.default)(MinecraftMonit)).call(this, props));

      _this.state = {
        serverCommand: '',
        returnMsg: []
      };

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleSubmit = _this.handleSubmit.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(MinecraftMonit, [{
      key: 'handleChange',
      value: function handleChange(event) {
        this.setState({ serverCommand: event.target.value });
      }
    }, {
      key: 'handleSubmit',
      value: function handleSubmit(event) {
        this.runCommand(this.state.serverCommand);
        this.setState({ serverCommand: '' });
        event.preventDefault();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.runCommand('/list');
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.refs.outputContainer_console.scrollTop = this.refs.outputContainer_console.scrollHeight;
      }
    }, {
      key: 'runCommand',
      value: function runCommand(command) {
        var _this2 = this;

        var url = 'https://www.happyginger.net/api/v1/minecraft?Body=';

        (0, _fetch2.default)('' + url + command).then(function (response) {
          return response.json();
        }).then(function (response) {
          var returnMsg = _this2.state.returnMsg;
          returnMsg.push(response.data);
          _this2.setState({ returnMsg: returnMsg });
        }).catch(function (err) {
          var returnMsg = [err.message];
          _this2.setState({ returnMsg: returnMsg });
        });
      }
    }, {
      key: 'renderOutput',
      value: function renderOutput() {
        var _this3 = this;

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          this.state.returnMsg.map(function (msg, index) {
            return _react2.default.createElement(
              'div',
              { className: _MinecraftMonit2.default.outputContainer_console_entry, key: index, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: _this3
              },
              msg.split('\n').map(function (msg, index) {
                return _react2.default.createElement(
                  'div',
                  { key: index, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: _this3
                  },
                  msg,
                  _react2.default.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: _this3
                  })
                );
              })
            );
          })
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        return _react2.default.createElement(
          'div',
          { className: _MinecraftMonit2.default.outputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { ref: 'outputContainer_console', className: _MinecraftMonit2.default.outputContainer_console, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            this.renderOutput()
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit, className: _MinecraftMonit2.default.outputContainer_form, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'input-group row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-10', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                },
                _react2.default.createElement('input', (_React$createElement = { type: 'text', id: 'outputContainer_form', className: 'form-control' }, (0, _defineProperty3.default)(_React$createElement, 'type', 'text'), (0, _defineProperty3.default)(_React$createElement, 'value', this.state.serverCommand), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleChange), (0, _defineProperty3.default)(_React$createElement, '__source', {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement))
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary', type: 'submit', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    },
                    __self: this
                  },
                  'Go!'
                )
              )
            )
          )
        );
      }
    }]);
    return MinecraftMonit;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_MinecraftMonit2.default)(MinecraftMonit);

/***/ },
/* 82 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(84);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./MinecraftMonit.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./MinecraftMonit.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.MinecraftMonit-no_gutters-1rgvh {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.MinecraftMonit-no_gutters-1rgvh > [class^='col-'],\n.MinecraftMonit-no_gutters-1rgvh > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.MinecraftMonit-outputContainer-1RkoV {\n  border: 1px solid #000;\n  position: relative;\n  padding: 15px;\n  padding-bottom: 50px;\n}\n\n.MinecraftMonit-outputContainer_console-RloWq {\n  height: 500px;\n  overflow-y: scroll;\n}\n\n.MinecraftMonit-outputContainer_console_entry-3uwXJ {\n  padding-bottom: 0;\n}\n\n.MinecraftMonit-outputContainer_form-1fa6P {\n  width: 100%;\n  height: 40px;\n  border-top: 100px;\n  position: absolute;\n  bottom: 0;\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./components/MinecraftMoniter/MinecraftMonit.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;AC5BD;EACE,gBAAgB;EAChB,eAAe;CAChB;;AAED;;EAEE,iBAAiB;EACjB,gBAAgB;CACjB;;AAED;EACE,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;CACtB;;AAED;EACE,cAAc;EACd,mBAAmB;CACpB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;CACX","file":"MinecraftMonit.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.no_gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no_gutters > [class^='col-'],\n.no_gutters > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.outputContainer {\n  border: 1px solid #000;\n  position: relative;\n  padding: 15px;\n  padding-bottom: 50px;\n}\n\n.outputContainer_console {\n  height: 500px;\n  overflow-y: scroll;\n}\n\n.outputContainer_console_entry {\n  padding-bottom: 0;\n}\n\n.outputContainer_form {\n  width: 100%;\n  height: 40px;\n  border-top: 100px;\n  position: absolute;\n  bottom: 0;\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"no_gutters": "MinecraftMonit-no_gutters-1rgvh",
  	"outputContainer": "MinecraftMonit-outputContainer-1RkoV",
  	"outputContainer_console": "MinecraftMonit-outputContainer_console-RloWq",
  	"outputContainer_console_entry": "MinecraftMonit-outputContainer_console_entry-3uwXJ",
  	"outputContainer_form": "MinecraftMonit-outputContainer_form-1fa6P"
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(86);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Home-root-2IMq2 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home-container-2Yejq {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Home-root-2IMq2",
  	"container": "Home-container-2Yejq"
  };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/contact/index.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Contact = __webpack_require__(88);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Contact Us';

  exports.default = {

    path: '/contact',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Contact2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/contact/Contact.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Contact = __webpack_require__(89);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
    }

    (0, _createClass3.default)(Contact, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Contact2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Contact2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              '...'
            )
          )
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

  Contact.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(90);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Contact-root-1G9oT {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-2TnCn {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Contact-root-1G9oT",
  	"container": "Contact-container-2TnCn"
  };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/register/index.js'; /**
                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                           *
                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                           *
                                                                                           * This source code is licensed under the MIT license found in the
                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                           */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Register = __webpack_require__(92);

  var _Register2 = _interopRequireDefault(_Register);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'New User Registration';

  exports.default = {

    path: '/register',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Register2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/register/Register.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Register = __webpack_require__(93);

  var _Register2 = _interopRequireDefault(_Register);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Register = function (_React$Component) {
    (0, _inherits3.default)(Register, _React$Component);

    function Register() {
      (0, _classCallCheck3.default)(this, Register);
      return (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).apply(this, arguments));
    }

    (0, _createClass3.default)(Register, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Register2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Register2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              '...'
            )
          )
        );
      }
    }]);
    return Register;
  }(_react2.default.Component);

  Register.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(94);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Register-root-1hu0P {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register-container-OjhIB {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/register/Register.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Register-root-1hu0P",
  	"container": "Register-container-OjhIB"
  };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(4);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(96);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/about/index.js'; /**
                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                        *
                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                        *
                                                                                        * This source code is licensed under the MIT license found in the
                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                        */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(97);

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
                    resolve(__webpack_require__(100));
                  }(__webpack_require__));
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/components/Page/Page.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Page = __webpack_require__(98);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
      (0, _classCallCheck3.default)(this, Page);
      return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            html = _props.html;

        return _react2.default.createElement(
          'div',
          { className: _Page2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Page2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            title && _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html }, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _react.PropTypes.string,
    html: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Page2.default)(Page);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(99);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Page-root-446UN {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-1cey9 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./components/Page/Page.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Page-root-446UN",
  	"container": "Page-container-1cey9"
  };

/***/ },
/* 100 */
/***/ function(module, exports) {

  module.exports = {"title":"About Us","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(2);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(4);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(96);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/privacy/index.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(97);

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
                    resolve(__webpack_require__(102));
                  }(__webpack_require__));
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 102 */
/***/ function(module, exports) {

  module.exports = {"title":"Privacy Policy","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/notFound/index.js'; /**
                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                           *
                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                           *
                                                                                           * This source code is licensed under the MIT license found in the
                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                           */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _NotFound = __webpack_require__(104);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Page Not Found';

  exports.default = {

    path: '*',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        ),
        status: 404
      };
    }
    };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/notFound/NotFound.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _NotFound = __webpack_require__(105);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NotFound = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);

    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }

    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _NotFound2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _NotFound2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'Sorry, the page you were trying to view does not exist.'
            )
          )
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component);

  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(106);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "NotFound-root-3whbd",
  	"container": "NotFound-container-1BOHG"
  };

/***/ },
/* 107 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/minecraft/index.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(57);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Minecraft = __webpack_require__(109);

  var _Minecraft2 = _interopRequireDefault(_Minecraft);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Minecraft Server Moniter/Console';

  exports.default = {

    path: '/minecraft',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Minecraft2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = '/Users/mike.cooper/git/HappyGingerFE/src/routes/minecraft/Minecraft.js'; /**
                                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                *
                                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                *
                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                                */

  var _react = __webpack_require__(15);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(28);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Minecraft = __webpack_require__(110);

  var _Minecraft2 = _interopRequireDefault(_Minecraft);

  var _MinecraftMonit = __webpack_require__(81);

  var _MinecraftMonit2 = _interopRequireDefault(_MinecraftMonit);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Minecraft = function (_React$Component) {
    (0, _inherits3.default)(Minecraft, _React$Component);

    function Minecraft() {
      (0, _classCallCheck3.default)(this, Minecraft);
      return (0, _possibleConstructorReturn3.default)(this, (Minecraft.__proto__ || (0, _getPrototypeOf2.default)(Minecraft)).apply(this, arguments));
    }

    (0, _createClass3.default)(Minecraft, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Minecraft2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Minecraft2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(_MinecraftMonit2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Minecraft;
  }(_react2.default.Component);

  Minecraft.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Minecraft2.default)(Minecraft);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(111);
      var insertCss = __webpack_require__(32);

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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Minecraft.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Minecraft.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(31)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Minecraft-root-1G1_9 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Minecraft-container-1-zUF {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./components/variables.css","/./routes/minecraft/Minecraft.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;AC5BD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Minecraft.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Minecraft-root-1G1_9",
  	"container": "Minecraft-container-1-zUF"
  };

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map