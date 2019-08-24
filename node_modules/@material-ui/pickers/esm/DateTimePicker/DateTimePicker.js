import _extends from "@babel/runtime/helpers/esm/extends";
import { useUtils } from '../_shared/hooks/useUtils';
import { DateTimePickerToolbar } from './DateTimePickerToolbar';
import { pick12hOr24hFormat } from '../_helpers/text-field-helper';
import { dateTimePickerDefaultProps } from '../constants/prop-types';
import { makePurePicker } from '../Picker/WrappedPurePicker';
import { makeKeyboardPicker } from '../Picker/WrappedKeyboardPicker';

var defaultProps = _extends({}, dateTimePickerDefaultProps, {
  wider: true,
  orientation: 'portrait',
  openTo: 'date',
  views: ['year', 'date', 'hours', 'minutes']
});

function useOptions(props) {
  var utils = useUtils();

  if (props.orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return {
    getDefaultFormat: function getDefaultFormat() {
      return pick12hOr24hFormat(props.format, props.ampm, {
        '12h': utils.dateTime12hFormat,
        '24h': utils.dateTime24hFormat
      });
    }
  };
}

export var DateTimePicker = makePurePicker({
  useOptions: useOptions,
  DefaultToolbarComponent: DateTimePickerToolbar
});
export var KeyboardDateTimePicker = makeKeyboardPicker({
  useOptions: useOptions,
  DefaultToolbarComponent: DateTimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
DateTimePicker.defaultProps = defaultProps;
KeyboardDateTimePicker.defaultProps = defaultProps;