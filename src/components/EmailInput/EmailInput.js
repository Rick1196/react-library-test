import React from 'react';
import '../../styles/components/EmailInput/EmailInput.scss';
const EmailInput = (props) => {
    return (
        <div className="Container" {...props}>
            <label for={props.idInput || "email"}>{props.labelInput || ""}</label>
            <input
                className="TextInput"
                type={props.typeInput || "text"}
                id={props.idInput || "email"}
                name={props.nameInput || "email"}
                placeholder={props.textInput || "correo electrónico"}
            />
            <span className="Rect2" />
        </div>
  );
}

export default EmailInput;
