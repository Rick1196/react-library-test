'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello world");
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative; }\n\n.TextInput {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  color: #121212;\n  font-size: 28px;\n  align-self: stretch;\n  flex: 1 1 0%;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column; }\n\n.Rect2 {\n  height: 3px;\n  background-color: black;\n  align-self: stretch; }\n";
styleInject(css_248z);

var EmailInput = function EmailInput(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "Container"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    for: props.idInput || "email"
  }, props.labelInput || ""), /*#__PURE__*/React__default['default'].createElement("input", {
    className: "TextInput",
    type: props.typeInput || "text",
    id: props.idInput || "email",
    name: props.nameInput || "email",
    placeholder: props.textInput || "correo electrónico"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "Rect2"
  }));
};

exports.EmailInput = EmailInput;
exports.HelloWorld = HelloWorld;
