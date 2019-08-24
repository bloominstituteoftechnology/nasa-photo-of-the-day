import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import KeyboardDateInput from '../_shared/KeyboardDateInput';
import { Picker } from './Picker';
import { Wrapper } from '../wrappers/Wrapper';
import { useKeyboardPickerState } from '../_shared/hooks/useKeyboardPickerState';
// Mostly duplicate of ./WrappedPurePicker.tsx to enable tree-shaking of keyboard logic
// TODO investigate how to reduce duplications
export function makeKeyboardPicker(_ref) {
  var useOptions = _ref.useOptions,
      getCustomProps = _ref.getCustomProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function WrappedKeyboardPicker(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        ampm = props.ampm,
        hideTabs = props.hideTabs,
        animateYearScrolling = props.animateYearScrolling,
        autoOk = props.autoOk,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        format = props.format,
        forwardedRef = props.forwardedRef,
        initialFocusedDate = props.initialFocusedDate,
        invalidDateMessage = props.invalidDateMessage,
        labelFunc = props.labelFunc,
        leftArrowIcon = props.leftArrowIcon,
        leftArrowButtonProps = props.leftArrowButtonProps,
        maxDate = props.maxDate,
        maxDateMessage = props.maxDateMessage,
        minDate = props.minDate,
        onOpen = props.onOpen,
        onClose = props.onClose,
        minDateMessage = props.minDateMessage,
        strictCompareDates = props.strictCompareDates,
        minutesStep = props.minutesStep,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onMonthChange = props.onMonthChange,
        onYearChange = props.onYearChange,
        renderDay = props.renderDay,
        views = props.views,
        openTo = props.openTo,
        rightArrowIcon = props.rightArrowIcon,
        rightArrowButtonProps = props.rightArrowButtonProps,
        shouldDisableDate = props.shouldDisableDate,
        value = props.value,
        dateRangeIcon = props.dateRangeIcon,
        emptyLabel = props.emptyLabel,
        invalidLabel = props.invalidLabel,
        timeIcon = props.timeIcon,
        orientation = props.orientation,
        variant = props.variant,
        disableToolbar = props.disableToolbar,
        loadingIndicator = props.loadingIndicator,
        _props$ToolbarCompone = props.ToolbarComponent,
        ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
        other = _objectWithoutProperties(props, ["allowKeyboardControl", "ampm", "hideTabs", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "initialFocusedDate", "invalidDateMessage", "labelFunc", "leftArrowIcon", "leftArrowButtonProps", "maxDate", "maxDateMessage", "minDate", "onOpen", "onClose", "minDateMessage", "strictCompareDates", "minutesStep", "onAccept", "onChange", "onMonthChange", "onYearChange", "renderDay", "views", "openTo", "rightArrowIcon", "rightArrowButtonProps", "shouldDisableDate", "value", "dateRangeIcon", "emptyLabel", "invalidLabel", "timeIcon", "orientation", "variant", "disableToolbar", "loadingIndicator", "ToolbarComponent"]);

    var injectedProps = getCustomProps ? getCustomProps(props) : {};
    var options = useOptions(props);

    var _useKeyboardPickerSta = useKeyboardPickerState(props, options),
        pickerProps = _useKeyboardPickerSta.pickerProps,
        inputProps = _useKeyboardPickerSta.inputProps,
        wrapperProps = _useKeyboardPickerSta.wrapperProps;

    return React.createElement(Wrapper, _extends({
      variant: variant,
      InputComponent: KeyboardDateInput,
      DateInputProps: inputProps
    }, injectedProps, wrapperProps, other), React.createElement(Picker, _extends({}, pickerProps, {
      ToolbarComponent: ToolbarComponent,
      disableToolbar: disableToolbar,
      hideTabs: hideTabs,
      orientation: orientation,
      ampm: ampm,
      views: views,
      openTo: openTo,
      allowKeyboardControl: allowKeyboardControl,
      minutesStep: minutesStep,
      animateYearScrolling: animateYearScrolling,
      disableFuture: disableFuture,
      disablePast: disablePast,
      leftArrowIcon: leftArrowIcon,
      leftArrowButtonProps: leftArrowButtonProps,
      maxDate: maxDate,
      minDate: minDate,
      strictCompareDates: strictCompareDates,
      onMonthChange: onMonthChange,
      onYearChange: onYearChange,
      renderDay: renderDay,
      dateRangeIcon: dateRangeIcon,
      timeIcon: timeIcon,
      rightArrowIcon: rightArrowIcon,
      rightArrowButtonProps: rightArrowButtonProps,
      shouldDisableDate: shouldDisableDate,
      loadingIndicator: loadingIndicator
    })));
  }

  return WrappedKeyboardPicker;
}