import * as React from 'react';
import addDays from 'date-fns/addDays';
import { mount } from '../test-utils';
import { KeyboardDatePicker } from '../../DatePicker/DatePicker';
describe('e2e -- DatePicker keyboard input', function () {
  var onChangeMock = jest.fn();
  var component;
  beforeEach(function () {
    component = mount(React.createElement(KeyboardDatePicker, {
      label: "Masked input",
      placeholder: "10/10/2018",
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy',
      value: new Date('2018-01-01T00:00:00.000Z'),
      onChange: onChangeMock,
      InputAdornmentProps: {
        disableTypography: true
      },
      InputLabelProps: {
        htmlFor: 'your-id'
      }
    }));
  });
  it('Should properly set value on change keyboard', function () {
    var e = {
      target: {
        value: '10/11/2018'
      }
    };
    component.find('input').simulate('change', e);
    expect(component.find('input').prop('value')).toBe('10/11/2018');
    component.find('input').simulate('blur');
    expect(onChangeMock).toBeCalled();
  });
});
describe('e2e -- KeyboardDatePicker validation errors', function () {
  it('Should render error message if date is unparseable', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy',
      value: new Date(NaN),
      onChange: jest.fn()
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('Invalid Date Format');
  });
  it('Should render error message if date is after disableFuture', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      disableFuture: true,
      value: addDays(new Date(), 2),
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('Date should not be after maximal date');
  });
  it('Should render error message if date is before disablePast', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      disablePast: true,
      value: addDays(new Date(), -2),
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('Date should not be before minimal date');
  });
  it('Should not render error message if date is after maxDate without strict comparison', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      maxDate: new Date('2018-01-01T00:00:00.000Z'),
      value: new Date('2018-01-01T01:00:00.000Z'),
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('');
  });
  it('Should render error message if date is after maxDate with strict comparison', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      maxDate: new Date('2018-01-01T00:00:00.000Z'),
      value: new Date('2018-01-01T01:00:00.000Z'),
      strictCompareDates: true,
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('Date should not be after maximal date');
  });
  it('Should not render error message if date is after minDate without strict comparison', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      minDate: new Date('2018-01-01T01:00:00.000Z'),
      value: new Date('2018-01-01T00:00:00.000Z'),
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('');
  });
  it('Should render error message if date is after minDate with strict comparison', function () {
    var component = mount(React.createElement(KeyboardDatePicker, {
      onChange: jest.fn(),
      minDate: new Date('2018-01-01T01:00:00.000Z'),
      value: new Date('2018-01-01T00:00:00.000Z'),
      strictCompareDates: true,
      format: process.env.UTILS === 'moment' ? 'DD/MM/YYYY' : 'dd/MM/yyyy'
    }));
    expect(component.find('ForwardRef(TextField)').prop('helperText')).toBe('Date should not be before minimal date');
  });
});