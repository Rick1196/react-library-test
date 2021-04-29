import React from 'react';

var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello world");
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var EmailInput = function EmailInput(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "Container"
  }, props), /*#__PURE__*/React.createElement("label", {
    for: props.idInput || "email"
  }, props.labelInput || ""), /*#__PURE__*/React.createElement("input", {
    className: "TextInput",
    type: props.typeInput || "text",
    id: props.idInput || "email",
    name: props.nameInput || "email",
    placeholder: props.textInput || "correo electrónico"
  }), /*#__PURE__*/React.createElement("span", {
    className: "Rect2"
  }));
};

export { EmailInput, HelloWorld };
