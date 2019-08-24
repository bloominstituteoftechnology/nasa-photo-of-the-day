import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { shallow } from '../test-utils';
import { ModalDialog } from '../../_shared/ModalDialog';
var initialProps = {
  onAccept: jest.fn(),
  onDismiss: jest.fn(),
  onClear: jest.fn(),
  onKeyDownInner: jest.fn(),
  okLabel: 'OK',
  open: false,
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  clearable: false,
  todayLabel: 'Today',
  showTodayButton: false,
  onSetToday: jest.fn(),
  children: 'Test',
  classes: {}
};
describe('ModalDialog', function () {
  var component;

  var props = _extends({}, initialProps);

  beforeEach(function () {
    component = shallow(React.createElement(ModalDialog, props));
  });
  it('Should render dialog content', function () {
    expect(component.find('WithStyles(ForwardRef(DialogContent))').props().children).toBe(props.children);
  });
  it('Should render dialog actions with 2 buttons', function () {
    expect(component.find('WithStyles(ForwardRef(DialogActions))').length).toBe(1);
    expect(component.find('WithStyles(ForwardRef(Button))').at(0).props().children).toBe('Cancel');
    expect(component.find('WithStyles(ForwardRef(Button))').at(1).props().children).toBe('OK');
  });
  it('Should handle on OK button click', function () {
    component.find('WithStyles(ForwardRef(Button))').at(1).simulate('click');
    expect(props.onAccept).toHaveBeenCalled();
  });
  it('Should handle on Cancel button click', function () {
    component.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.onDismiss).toHaveBeenCalled();
  });
});
describe('ModalDialog with Clear Button', function () {
  var component;

  var props = _extends({}, initialProps, {
    clearable: true
  });

  beforeEach(function () {
    component = shallow(React.createElement(ModalDialog, props));
  });
  it('Should handle on Clear button click', function () {
    component.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.onClear).toHaveBeenCalled();
  });
});
describe('ModalDialog with Today Button', function () {
  var component;

  var props = _extends({}, initialProps, {
    showTodayButton: true
  });

  beforeEach(function () {
    component = shallow(React.createElement(ModalDialog, props));
  });
  it('Should handle on Clear button click', function () {
    component.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.onSetToday).toHaveBeenCalled();
  });
});