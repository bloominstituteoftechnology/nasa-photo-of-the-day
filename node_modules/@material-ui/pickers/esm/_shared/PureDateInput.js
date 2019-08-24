import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
export var PureDateInput = function PureDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      InputProps = _ref.InputProps,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
      other = _objectWithoutProperties(_ref, ["inputValue", "inputVariant", "validationError", "InputProps", "TextFieldComponent"]);

  var PureDateInputProps = React.useMemo(function () {
    return _extends({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  return React.createElement(TextFieldComponent, _extends({
    error: Boolean(validationError),
    helperText: validationError
  }, other, {
    // do not overridable
    value: inputValue,
    variant: inputVariant,
    InputProps: PureDateInputProps
  }));
};
PureDateInput.displayName = 'PureDateInput';