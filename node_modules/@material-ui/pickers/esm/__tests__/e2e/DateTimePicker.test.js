import * as React from 'react';
import { mount, utilsToUse } from '../test-utils';
import { DateTimePicker } from '../../DateTimePicker/DateTimePicker';
var format = process.env.UTILS === 'moment' ? 'MM/DD/YYYY HH:mm' : 'MM/dd/yyyy hh:mm';
describe('e2e - DateTimePicker', function () {
  var component;
  var onCloseMock = jest.fn();
  var onChangeMock = jest.fn();
  beforeEach(function () {
    component = mount(React.createElement(DateTimePicker, {
      clearable: true,
      format: format,
      onClose: onCloseMock,
      onChange: onChangeMock,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z')
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should open modal with picker on click', function () {
    component.find('input').simulate('click');
    expect(component.find('WithStyles(ForwardRef(Dialog))').prop('open')).toBeTruthy();
  });
  it('Should update state when passing new value from outside', function () {
    component.setProps({
      value: '2018-01-01T00:00:00.000Z'
    });
    component.update(); // make additional react tick to update text field

    var expectedString = utilsToUse.format(utilsToUse.date('2018-01-01T00:00:00.000Z'), format);
    expect(component.find('input').props().value).toBe(expectedString);
  });
  it('Should change internal state on update', function () {
    component.find('input').simulate('click');
    component.find('Day button').at(3).simulate('click');
    expect(component.find('ToolbarButton').at(0).text()).toBe('2018'); // expect(component.find('ToolbarButton').at(1).text()).toBe('Jan 3');
  });
});
describe('e2e -- Controlling open state', function () {
  var component;
  var onCloseMock = jest.fn();
  beforeEach(function () {
    component = mount(React.createElement(DateTimePicker, {
      open: true,
      onClose: onCloseMock,
      onChange: jest.fn(),
      value: utilsToUse.date('2018-01-01T00:00:00.000Z')
    }));
  });
  it('Should be opened', function () {
    expect(component.find('WithStyles(ForwardRef(Dialog))').prop('open')).toBeTruthy();
  });
  it('Should close', function () {
    component.find('ForwardRef(DialogActions) button').at(0).simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
  });
});