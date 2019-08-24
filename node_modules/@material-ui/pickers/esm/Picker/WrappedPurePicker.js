import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { Picker } from './Picker';
import { Wrapper } from '../wrappers/Wrapper';
import { usePickerState } from '../_shared/hooks/usePickerState';
import { PureDateInput } from '../_shared/PureDateInput';
export function makePurePicker(_ref) {
  var useOptions = _ref.useOptions,
      getCustomProps = _ref.getCustomProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function WrappedPurePicker(props) {
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
        dateRangeIcon = props.dateRangeIcon,
        emptyLabel = props.emptyLabel,
        invalidLabel = props.invalidLabel,
        timeIcon = props.timeIcon,
        value = props.value,
        variant = props.variant,
        orientation = props.orientation,
        disableToolbar = props.disableToolbar,
        loadingIndicator = props.loadingIndicator,
        _props$ToolbarCompone = props.ToolbarComponent,
        ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
        other = _objectWithoutProperties(props, ["allowKeyboardControl", "ampm", "hideTabs", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "initialFocusedDate", "invalidDateMessage", "labelFunc", "leftArrowIcon", "leftArrowButtonProps", "maxDate", "maxDateMessage", "minDate", "onOpen", "onClose", "minDateMessage", "strictCompareDates", "minutesStep", "onAccept", "onChange", "onMonthChange", "onYearChange", "renderDay", "views", "openTo", "rightArrowIcon", "rightArrowButtonProps", "shouldDisableDate", "dateRangeIcon", "emptyLabel", "invalidLabel", "timeIcon", "value", "variant", "orientation", "disableToolbar", "loadingIndicator", "ToolbarComponent"]);

    var injectedProps = getCustomProps ? getCustomProps(props) : {};
    var options = useOptions(props);

    var _usePickerState = usePickerState(props, options),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    return React.createElement(Wrapper, _extends({
      variant: variant,
      InputComponent: PureDateInput,
      DateInputProps: inputProps
    }, wrapperProps, injectedProps, other), React.createElement(Picker, _extends({}, pickerProps, {
      orientation: orientation,
      disableToolbar: disableToolbar,
      ToolbarComponent: ToolbarComponent,
      hideTabs: hideTabs,
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

  return WrappedPurePicker;
}