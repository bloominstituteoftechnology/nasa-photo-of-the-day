import * as React from 'react';
import { mount, utilsToUse } from '../test-utils';
import { KeyboardDateTimePicker } from '../../DateTimePicker/DateTimePicker';
var format = process.env.UTILS === 'moment' ? 'MM/DD/YYYY HH:mm' : 'MM/dd/yyyy hh:mm';
describe('e2e - KeyboardDateTimePicker (inline)', function () {
  var component;
  var onChangeMock = jest.fn();
  var onCloseMock = jest.fn();
  var onOpenMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(KeyboardDateTimePicker, {
      autoOk: true,
      variant: "inline",
      inputVariant: "outlined",
      onChange: onChangeMock,
      onClose: onCloseMock,
      onOpen: onOpenMock,
      format: format,
      KeyboardButtonProps: {
        id: 'keyboard-button'
      },
      value: utilsToUse.date('2018-01-01T00:00:00.000Z')
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should open modal with picker on click', function () {
    component.find('button#keyboard-button').simulate('click');
    expect(component.find('WithStyles(ForwardRef(Popover))').props().open).toBeTruthy();
    expect(onOpenMock).toHaveBeenCalled();
  });
  it('Should apply keyboard input', function () {
    component.find('input').simulate('change', {
      target: {
        value: '02/01/2018 10:00'
      }
    });
    expect(onChangeMock).toHaveBeenCalled();
  });
});