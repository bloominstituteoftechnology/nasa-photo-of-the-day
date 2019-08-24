import _extends from "@babel/runtime/helpers/esm/extends";
import TimePickerToolbar from './TimePickerToolbar';
import { useUtils } from '../_shared/hooks/useUtils';
import { timePickerDefaultProps } from '../constants/prop-types';
import { pick12hOr24hFormat } from '../_helpers/text-field-helper';
import { makePurePicker } from '../Picker/WrappedPurePicker';
import { makeKeyboardPicker } from '../Picker/WrappedKeyboardPicker';

var defaultProps = _extends({}, timePickerDefaultProps, {
  openTo: 'hours',
  views: ['hours', 'minutes']
});

function useOptions(props) {
  var utils = useUtils();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return pick12hOr24hFormat(props.format, props.ampm, {
        '12h': utils.time12hFormat,
        '24h': utils.time24hFormat
      });
    }
  };
}

export var TimePicker = makePurePicker({
  useOptions: useOptions,
  DefaultToolbarComponent: TimePickerToolbar
});
export var KeyboardTimePicker = makeKeyboardPicker({
  useOptions: useOptions,
  DefaultToolbarComponent: TimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
TimePicker.defaultProps = defaultProps;
KeyboardTimePicker.defaultProps = defaultProps;