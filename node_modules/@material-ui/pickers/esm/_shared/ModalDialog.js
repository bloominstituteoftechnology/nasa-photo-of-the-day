import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { DIALOG_WIDTH } from '../constants/dimensions';
import { createStyles, withStyles } from '@material-ui/core/styles';
export var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      other = _objectWithoutProperties(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  return React.createElement(Dialog, _extends({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), React.createElement(DialogContent, {
    children: children,
    className: classes.dialog
  }), React.createElement(DialogActions, {
    classes: {
      root: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
    }
  }, clearable && React.createElement(Button, {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && React.createElement(Button, {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && React.createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && React.createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
export var styles = createStyles({
  dialogRoot: {
    minWidth: DIALOG_WIDTH // maxWidth: DIALOG_WIDTH_WIDER,

  },
  dialogRootWider: {// minWidth: DIALOG_WIDTH_WIDER,
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
});
export default withStyles(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);