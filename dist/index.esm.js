import React from 'react';
import styled from 'styled-components';

var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello world");
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
  return /*#__PURE__*/React.createElement(Container, props, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: props.textInput || "correo electrónico"
  }), /*#__PURE__*/React.createElement(Rect2, null));
};

var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n"])));
var TextInput = styled.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  color: #121212;\n  font-size: 28px;\n  align-self: stretch;\n  flex: 1 1 0%;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n"])));
var Rect2 = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 3px;\n  background-color: rgba(0,0,0,1);\n  align-self: stretch;\n"])));

export { EmailInput, HelloWorld };
