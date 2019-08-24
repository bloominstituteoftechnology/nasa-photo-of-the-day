import * as React from 'react';
import clsx from 'clsx';
import ToolbarButton from '../_shared/ToolbarButton';
import PickerToolbar from '../_shared/PickerToolbar';
import { useUtils } from '../_shared/hooks/useUtils';
import { makeStyles } from '@material-ui/core/styles';
import { isYearAndMonthViews, isYearOnlyView } from '../_helpers/date-utils';
export var useStyles = makeStyles({
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: 'MuiPickersDatePickerRoot'
});
export var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      setOpenView = _ref.setOpenView,
      isLandscape = _ref.isLandscape,
      openView = _ref.openView;
  var utils = useUtils();
  var classes = useStyles();
  var isYearOnly = React.useMemo(function () {
    return isYearOnlyView(views);
  }, [views]);
  var isYearAndMonth = React.useMemo(function () {
    return isYearAndMonthViews(views);
  }, [views]);
  return React.createElement(PickerToolbar, {
    isLandscape: isLandscape,
    className: clsx(!isYearOnly && classes.toolbar, isLandscape && classes.toolbarLandscape)
  }, React.createElement(ToolbarButton, {
    variant: isYearOnly ? 'h3' : 'subtitle1',
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  }), !isYearOnly && !isYearAndMonth && React.createElement(ToolbarButton, {
    variant: "h4",
    selected: openView === 'date',
    onClick: function onClick() {
      return setOpenView('date');
    },
    align: isLandscape ? 'left' : 'center',
    label: utils.getDatePickerHeaderText(date),
    className: clsx(isLandscape && classes.dateLandscape)
  }), isYearAndMonth && React.createElement(ToolbarButton, {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('month');
    },
    selected: openView === 'month',
    label: utils.getMonthText(date)
  }));
};