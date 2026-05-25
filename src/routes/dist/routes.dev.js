"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicRoutes = void 0;

var _config = _interopRequireDefault(require("../config"));

var _index = _interopRequireDefault(require("../pages/HomePage/index.js"));

var _index2 = _interopRequireDefault(require("../pages/ProductPage/index.js"));

var _index3 = _interopRequireDefault(require("../pages/ContactPage/index.js"));

var _index4 = _interopRequireDefault(require("../pages/AboutPage/index.js"));

var _index5 = _interopRequireDefault(require("../pages/ServicesPage/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ProjectPage from '../pages/ProjectPage/index.js';
var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _index["default"]
}, {
  path: _config["default"].routes.product,
  component: _index2["default"]
}, {
  path: _config["default"].routes.contact,
  component: _index3["default"]
}, {
  path: _config["default"].routes.aboutus,
  component: _index4["default"]
}, {
  path: _config["default"].routes.services,
  component: _index5["default"]
} // {path: config.routes.project, component: ProjectPage}
];
exports.publicRoutes = publicRoutes;