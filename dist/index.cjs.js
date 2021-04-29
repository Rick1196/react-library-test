'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello world");
};

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject, _templateObject2, _templateObject3;

var EmailInput = function EmailInput(props) {
  return /*#__PURE__*/React__default['default'].createElement(Container, props, /*#__PURE__*/React__default['default'].createElement(TextInput, {
    placeholder: props.textInput || "correo electrónico"
  }), /*#__PURE__*/React__default['default'].createElement(Rect2, null));
};

var Container = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n"])));
var TextInput = styled__default['default'].input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  color: #121212;\n  font-size: 28px;\n  align-self: stretch;\n  flex: 1 1 0%;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n"])));
var Rect2 = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 3px;\n  background-color: rgba(0,0,0,1);\n  align-self: stretch;\n"])));

exports.EmailInput = EmailInput;
exports.HelloWorld = HelloWorld;
