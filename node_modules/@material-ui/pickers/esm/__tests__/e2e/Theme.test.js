import React from 'react';
import { mount } from '../test-utils';
import { DatePicker } from '../../DatePicker';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { DateTimePicker } from '../../DateTimePicker/DateTimePicker';
var theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});
test('Should renders without crash in dark theme', function () {
  var component = mount(React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(DateTimePicker, {
    open: true,
    openTo: "hours",
    value: null,
    onChange: jest.fn()
  })));
  expect(component).toBeTruthy();
});
test('Should render component with different orientation', function () {
  var component = mount(React.createElement(DatePicker, {
    open: true,
    orientation: "landscape",
    value: null,
    onChange: jest.fn()
  }));
  expect(component).toBeTruthy();
});