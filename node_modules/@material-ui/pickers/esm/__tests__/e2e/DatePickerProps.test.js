import * as React from 'react';
import { mount, utilsToUse } from '../test-utils';
import { DatePicker } from '../../DatePicker/DatePicker';
describe('DatePicker - different props', function () {
  it('Should not render toolbar if onlyCalendar = true', function () {
    var component = mount(React.createElement(DatePicker, {
      open: true,
      disableToolbar: true,
      onChange: jest.fn(),
      value: utilsToUse.date('2018-01-01T00:00:00.000Z')
    }));
    expect(component.find('WithStyles(PickerToolbar)').length).toBe(0);
  });
});