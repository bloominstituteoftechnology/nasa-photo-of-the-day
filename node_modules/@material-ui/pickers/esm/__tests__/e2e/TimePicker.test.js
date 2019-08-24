import * as React from 'react';
import { clickOKButton } from './commands';
import { TimePicker } from '../../TimePicker/TimePicker';
import { mount, utilsToUse, toHaveBeenCalledExceptMoment } from '../test-utils';
var fakeTouchEvent = {
  buttons: 1,
  nativeEvent: {
    offsetX: 20,
    offsetY: 15
  }
};
describe('e2e - TimePicker', function () {
  var component;
  var onChangeMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(TimePicker, {
      open: true,
      value: utilsToUse.date('2018-01-01T00:00:00.000'),
      onChange: onChangeMock
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should submit onChange on moving', function () {
    component.find('Clock div[role="menu"]').simulate('mouseMove', fakeTouchEvent);
    component.find('Clock div[role="menu"]').simulate('mouseUp', fakeTouchEvent);
    expect(component.find('WithStyles(ToolbarButton)').at(0).text()).toBe('11');
  });
  it('Should change minutes (touch)', function () {
    component.find('WithStyles(ToolbarButton)').at(1).simulate('click');
    component.find('Clock div[role="menu"]').simulate('touchMove', {
      buttons: 1,
      changedTouches: [{
        clientX: 20,
        clientY: 15
      }]
    });
    expect(component.find('WithStyles(ToolbarButton)').at(1).text()).toBe('53');
  });
  it('Should change meridiem mode', function () {
    component.find('WithStyles(ToolbarButton)').at(3).simulate('click');
    clickOKButton(component);
    toHaveBeenCalledExceptMoment(onChangeMock, [utilsToUse.date('2018-01-01T12:00:00.000')]);
  });
});
describe('e2e - TimePicker with seconds', function () {
  var component;
  var onChangeMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(TimePicker, {
      open: true,
      views: ['hours', 'minutes', 'seconds'],
      value: utilsToUse.date('2018-01-01T00:00:12.000'),
      onChange: onChangeMock
    }));
  });
  it('Should show seconds number', function () {
    expect(component.find('WithStyles(ToolbarButton)').at(2).text()).toBe('12');
  });
  it('Should change seconds', function () {
    component.find('WithStyles(ToolbarButton)').at(2).simulate('click');
    component.find('Clock div[role="menu"]').simulate('touchMove', {
      buttons: 1,
      changedTouches: [{
        clientX: 20,
        clientY: 15
      }]
    });
    clickOKButton(component);
    toHaveBeenCalledExceptMoment(onChangeMock, [utilsToUse.date('2018-01-01T00:00:53.000')]);
  });
});