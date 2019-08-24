import * as React from 'react';
import { clickOKButton } from './commands';
import { mount, utilsToUse, toHaveBeenCalledExceptMoment } from '../test-utils';
import { DateTimePicker } from '../../DateTimePicker/DateTimePicker';
describe('e2e - DateTimePicker', function () {
  var component;
  var onChangeMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(DateTimePicker, {
      open: true,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock,
      openTo: "hours",
      leftArrowIcon: "keyboard_arrow_left",
      rightArrowIcon: "keyboard_arrow_right",
      dateRangeIcon: "date_range",
      timeIcon: "access_time"
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should display year view', function () {
    component.find('ToolbarButton').first().simulate('click');
    expect(component.find('Year').length).toBe(201);
    component.find('Year').at(1).simulate('click');
    clickOKButton(component);
    expect(onChangeMock).toHaveBeenCalled();
  });
  it('Should render hour view', function () {
    component.find('ToolbarButton').at(2).simulate('click');
    expect(component.find('TimePickerView').props().type).toBe('hours');
  });
  it('Should render minutes view', function () {
    component.find('ToolbarButton').at(3).simulate('click');
    expect(component.find('TimePickerView').props().type).toBe('minutes');
  });
  it('Should change meridiem', function () {
    component.find('ToolbarButton').at(5).simulate('click');
    clickOKButton(component);
    toHaveBeenCalledExceptMoment(onChangeMock, [utilsToUse.date('2018-01-01T12:00:00.000Z')]);
  });
});