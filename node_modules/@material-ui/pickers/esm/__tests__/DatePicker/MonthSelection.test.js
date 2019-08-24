import * as React from 'react';
import Month from '../../views/Month/Month';
import { mount, utilsToUse } from '../test-utils';
import { MonthSelection } from '../../views/Month/MonthView';
describe('MonthSelection', function () {
  var component;
  beforeEach(function () {
    component = mount(React.createElement(MonthSelection, {
      minDate: new Date('03-01-2017'),
      maxDate: new Date('05-01-2017'),
      date: utilsToUse.date('04-01-2017'),
      onChange: jest.fn()
    }));
  });
  it('Should render disabled months before min date and after max date', function () {
    expect(component.find(Month).map(function (month) {
      return month.prop('disabled');
    })).toEqual([true, true, false, false, false, true, true, true, true, true, true, true]);
  });
});