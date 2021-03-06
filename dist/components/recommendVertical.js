'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecommendVerical = function (_wepy$component) {
  _inherits(RecommendVerical, _wepy$component);

  function RecommendVerical() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RecommendVerical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RecommendVerical.__proto__ || Object.getPrototypeOf(RecommendVerical)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: {
        type: String,
        default: ''
      },
      goods: {
        type: Array,
        default: [],
        twoWay: true
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RecommendVerical;
}(_wepy2.default.component);

exports.default = RecommendVerical;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZFZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlJlY29tbWVuZFZlcmljYWwiLCJwcm9wcyIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJnb29kcyIsIkFycmF5IiwidHdvV2F5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUztBQUZKLE9BREQ7QUFLTkMsYUFBTztBQUNMSCxjQUFNSSxLQUREO0FBRUxGLGlCQUFTLEVBRko7QUFHTEcsZ0JBQVE7QUFISDtBQUxELEs7Ozs7RUFEb0MsZUFBS0MsUzs7a0JBQTlCVCxnQiIsImZpbGUiOiJyZWNvbW1lbmRWZXJ0aWNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29tbWVuZFZlcmljYWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgZ29vZHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==