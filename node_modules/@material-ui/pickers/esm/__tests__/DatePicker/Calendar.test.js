import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { shallowRender, utilsToUse } from '../test-utils';
import { Calendar } from '../../views/Calendar/Calendar';
describe('Calendar', function () {
  var component;
  var onChangeMock = jest.fn();
  var onMonthChangeMock = jest.fn();
  beforeEach(function () {
    component = shallowRender(function (props) {
      return React.createElement(Calendar, _extends({
        date: utilsToUse.date('01-01-2017'),
        onMonthChange: onMonthChangeMock,
        onChange: onChangeMock
      }, props));
    });
  });
  it('Should swipe between month', function () {
    component.find('CalendarHeader').prop('onMonthChange')(utilsToUse.date());
    expect(onMonthChangeMock).toHaveBeenCalled();
  });
});
describe('Calendar - disabled selected date on mount', function () {
  var component;
  beforeEach(function () {
    component = shallowRender(function (props) {
      return React.createElement(Calendar, _extends({
        date: utilsToUse.date('01-01-2017'),
        minDate: new Date('01-01-2018'),
        onChange: jest.fn(),
        utils: utilsToUse
      }, props));
    });
  });
  it('Should dispatch onDateSelect with isFinish = false on mount', function () {
    var onChange = component.instance().props.onChange;

    if (process.env.UTILS === 'moment') {
      return expect(onChange).toHaveBeenCalled();
    }

    expect(onChange).toHaveBeenCalledWith(utilsToUse.date('01-01-2018'), false);
  });
});