import _extends from "@babel/runtime/helpers/esm/extends";
import { useUtils } from '../_shared/hooks/useUtils';
import { DatePickerToolbar } from './DatePickerToolbar';
import { getFormatByViews } from '../_helpers/date-utils';
import { datePickerDefaultProps } from '../constants/prop-types';
import { makePurePicker } from '../Picker/WrappedPurePicker';
import { makeKeyboardPicker } from '../Picker/WrappedKeyboardPicker';

var defaultProps = _extends({}, datePickerDefaultProps, {
  openTo: 'date',
  views: ['year', 'date']
});

function useOptions(props) {
  var utils = useUtils();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return getFormatByViews(props.views, utils);
    }
  };
}

export var DatePicker = makePurePicker({
  useOptions: useOptions,
  DefaultToolbarComponent: DatePickerToolbar
});
export var KeyboardDatePicker = makeKeyboardPicker({
  useOptions: useOptions,
  DefaultToolbarComponent: DatePickerToolbar
});
DatePicker.defaultProps = defaultProps;
KeyboardDatePicker.defaultProps = defaultProps;