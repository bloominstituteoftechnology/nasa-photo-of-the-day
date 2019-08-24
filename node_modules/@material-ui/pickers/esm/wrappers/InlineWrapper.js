import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { useKeyDown } from '../_shared/hooks/useKeyDown';
import { DIALOG_WIDTH, DIALOG_WIDTH_WIDER } from '../constants/dimensions';
export var useStyles = makeStyles({
  popoverPaper: {
    width: DIALOG_WIDTH,
    paddingBottom: 8
  },
  popoverPaperWider: {
    width: DIALOG_WIDTH_WIDER
  }
}, {
  name: 'MuiPickersInlineWrapper'
});
export var InlineWrapper = function InlineWrapper(_ref) {
  var open = _ref.open,
      wider = _ref.wider,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      onAccept = _ref.onAccept,
      showTabs = _ref.showTabs,
      DateInputProps = _ref.DateInputProps,
      InputComponent = _ref.InputComponent,
      other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

  var ref = React.useRef();
  var classes = useStyles();
  useKeyDown(open, {
    Enter: onAccept
  });
  return React.createElement(React.Fragment, null, React.createElement(InputComponent, _extends({}, other, DateInputProps, {
    inputRef: ref
  })), React.createElement(Popover, _extends({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    classes: {
      paper: clsx(classes.popoverPaper, wider && classes.popoverPaperWider)
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
process.env.NODE_ENV !== "production" ? InlineWrapper.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  PopoverProps: PropTypes.object
} : void 0;