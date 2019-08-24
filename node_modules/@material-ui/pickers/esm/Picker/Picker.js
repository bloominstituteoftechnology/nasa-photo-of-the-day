import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Calendar from '../views/Calendar/Calendar';
import { useUtils } from '../_shared/hooks/useUtils';
import { useViews } from '../_shared/hooks/useViews';
import { ClockView } from '../views/Clock/ClockView';
import { makeStyles } from '@material-ui/core/styles';
import { YearSelection } from '../views/Year/YearView';
import { MonthSelection } from '../views/Month/MonthView';
import { useIsLandscape } from '../_shared/hooks/useIsLandscape';
import { datePickerDefaultProps } from '../constants/prop-types';
import { DIALOG_WIDTH_WIDER, DIALOG_WIDTH, VIEW_HEIGHT } from '../constants/dimensions';
var viewsMap = {
  year: YearSelection,
  month: MonthSelection,
  date: Calendar,
  hours: ClockView,
  minutes: ClockView,
  seconds: ClockView
};
var useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    minHeight: VIEW_HEIGHT,
    minWidth: DIALOG_WIDTH,
    maxWidth: DIALOG_WIDTH_WIDER,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
export var Picker = function Picker(props) {
  var date = props.date,
      ampm = props.ampm,
      views = props.views,
      disableToolbar = props.disableToolbar,
      disablePast = props.disablePast,
      disableFuture = props.disableFuture,
      hideTabs = props.hideTabs,
      onChange = props.onChange,
      openTo = props.openTo,
      minutesStep = props.minutesStep,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon,
      unparsedMinDate = props.minDate,
      unparsedMaxDate = props.maxDate,
      animateYearScrolling = props.animateYearScrolling,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      renderDay = props.renderDay,
      shouldDisableDate = props.shouldDisableDate,
      allowKeyboardControl = props.allowKeyboardControl,
      onMonthChange = props.onMonthChange,
      onYearChange = props.onYearChange,
      leftArrowButtonProps = props.leftArrowButtonProps,
      rightArrowButtonProps = props.rightArrowButtonProps,
      ToolbarComponent = props.ToolbarComponent,
      loadingIndicator = props.loadingIndicator,
      orientation = props.orientation;
  var utils = useUtils();
  var classes = useStyles();
  var isLandscape = useIsLandscape(orientation);

  var _useViews = useViews(views, openTo, onChange),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  var minDate = React.useMemo(function () {
    return utils.date(unparsedMinDate);
  }, [unparsedMinDate, utils]);
  var maxDate = React.useMemo(function () {
    return utils.date(unparsedMaxDate);
  }, [unparsedMaxDate, utils]);
  return React.createElement("div", {
    className: clsx(classes.container, isLandscape && classes.containerLandscape)
  }, !disableToolbar && React.createElement(ToolbarComponent, _extends({
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView,
    hideTabs: hideTabs,
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    isLandscape: isLandscape
  }, props)), React.createElement("div", {
    className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, openView === 'year' && React.createElement(YearSelection, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    onYearChange: onYearChange,
    animateYearScrolling: animateYearScrolling
  }), openView === 'month' && React.createElement(MonthSelection, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    onMonthChange: onMonthChange
  }), openView === 'date' && React.createElement(Calendar, {
    date: date,
    onChange: handleChangeAndOpenNext,
    onMonthChange: onMonthChange,
    disablePast: disablePast,
    disableFuture: disableFuture,
    minDate: minDate,
    maxDate: maxDate,
    leftArrowIcon: leftArrowIcon,
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowIcon: rightArrowIcon,
    rightArrowButtonProps: rightArrowButtonProps,
    renderDay: renderDay,
    shouldDisableDate: shouldDisableDate,
    allowKeyboardControl: allowKeyboardControl,
    loadingIndicator: loadingIndicator
  }), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && React.createElement(ClockView, {
    date: date,
    ampm: ampm,
    type: openView,
    minutesStep: minutesStep,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  })));
};
Picker.defaultProps = _extends({}, datePickerDefaultProps, {
  views: Object.keys(viewsMap)
});