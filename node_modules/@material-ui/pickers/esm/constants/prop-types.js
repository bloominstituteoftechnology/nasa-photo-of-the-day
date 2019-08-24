import _extends from "@babel/runtime/helpers/esm/extends";
import * as PropTypes from 'prop-types';
var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);
var datePickerView = PropTypes.oneOf(['year', 'month', 'day']);
export var DomainPropTypes = {
  date: date,
  datePickerView: datePickerView
};
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

export var timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format'
};
export var datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true
};
export var dateTimePickerDefaultProps = _extends({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
  showTabs: true
});