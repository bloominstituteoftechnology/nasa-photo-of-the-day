import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { DIALOG_WIDTH } from '../constants/dimensions';
var useStyles = makeStyles(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
export var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.staticWrapperRoot,
    children: children
  });
};