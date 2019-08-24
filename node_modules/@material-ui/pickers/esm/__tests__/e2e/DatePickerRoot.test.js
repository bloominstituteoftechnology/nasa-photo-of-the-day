import * as React from 'react';
import { clickOKButton } from './commands';
import { mount, utilsToUse } from '../test-utils';
import { DatePicker } from '../../DatePicker';
describe('e2e - DatePicker', function () {
  var component;
  var onChangeMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(DatePicker, {
      open: true,
      autoOk: true,
      openTo: "date",
      animateYearScrolling: false,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should render proper count of days', function () {
    expect(component.find('Day').length).toBe(35);
  });
  it('Should dispatch onChange on day click', function () {
    component.find('Day button').at(2).simulate('click');
    expect(onChangeMock).toHaveBeenCalled();
  });
  it('Should render year selection', function () {
    component.find('ToolbarButton').first().simulate('click');
    expect(component.find('Year').length).toBe(201);
    component.find('Year').at(1).simulate('click');
    clickOKButton(component);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
describe('e2e -- DatePicker views year', function () {
  var onChangeMock = jest.fn();
  var onYearChangeMock = jest.fn();
  var component;
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock,
      onYearChange: onYearChangeMock,
      views: ['year']
    }));
  });
  it('Should render year selection and select year', function () {
    expect(component.find('Year').length).toBe(201);
    component.find('Year').at(1).simulate('click');
    clickOKButton(component);
    expect(onYearChangeMock).toHaveBeenCalled();
  });
});
describe('e2e -- DatePicker views year and month', function () {
  var onChangeMock = jest.fn();
  var onMonthChangeMock = jest.fn();
  var component;
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      autoOk: true,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock,
      onMonthChange: onMonthChangeMock,
      openTo: "month",
      views: ['year', 'month']
    }));
  });
  it('Should select month', function () {
    expect(component.find('Month').length).toBe(12);
    component.find('Month').first().simulate('click');
    expect(onMonthChangeMock).toHaveBeenCalled();
  });
  it('Should switch to year selection and back to month', function () {
    component.find('ToolbarButton').first().simulate('click');
    var year = component.find('Year');
    expect(component.find('Year').length).toBe(201);
    year.first().simulate('click');
    expect(component.find('Month').length).toBe(12);
  });
});
describe('e2e -- DatePicker views year and month open from year', function () {
  var onChangeMock = jest.fn();
  var component;
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      autoOk: true,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock,
      views: ['year', 'month'],
      openTo: "year"
    }));
  });
  it('Should render year selection', function () {
    expect(component.find('Year').length).toBe(201);
  });
});