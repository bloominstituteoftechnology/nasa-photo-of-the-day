import * as React from 'react';
import { shallow, utilsToUse } from '../test-utils';
import { Month } from '../../views/Month/Month';
describe('Month', function () {
  var component;
  beforeEach(function () {
    component = shallow(React.createElement(Month, {
      value: utilsToUse.date('01-01-2017'),
      onSelect: jest.fn()
    }, "Oct"));
  });
  it('Should render', function () {
    expect(component).toBeTruthy();
  });
});
describe('Month - disabled state', function () {
  var component;
  beforeEach(function () {
    component = shallow(React.createElement(Month, {
      disabled: true,
      value: utilsToUse.date('01-01-2017'),
      onSelect: jest.fn()
    }, "Oct"));
  });
  it('Should render in disabled state', function () {
    expect(component.prop('tabIndex')).toBe(-1);
  });
});