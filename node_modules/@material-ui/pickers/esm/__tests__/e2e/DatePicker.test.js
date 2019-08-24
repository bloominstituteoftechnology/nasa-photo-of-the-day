import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import * as React from 'react';
import { mount, utilsToUse } from '../test-utils';
import { DatePicker } from '../../DatePicker/DatePicker';
describe('e2e - DatePicker default year format', function () {
  var component;
  var onChangeMock = jest.fn();
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(DatePicker, {
      animateYearScrolling: false,
      value: utilsToUse.date('2018-01-01T00:00:00.000'),
      onChange: onChangeMock,
      views: ['year']
    }));
  });
  it('Should use year format by default for year only view', function () {
    expect(component.find('input').props().value).toBe(utilsToUse.format(date, utilsToUse.yearFormat));
  });
});
describe('e2e - DatePicker default year month format', function () {
  var component;
  var onChangeMock = jest.fn();
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      onChange: onChangeMock,
      value: date,
      views: ['year', 'month']
    }));
  });
  it('Should use year month format by default for year & month views', function () {
    expect(component.find('input').props().value).toBe(utilsToUse.format(date, utilsToUse.yearMonthFormat));
  });
});
describe('e2e - DatePicker default year month day format', function () {
  var component;
  var onChangeMock = jest.fn();
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      onChange: onChangeMock,
      value: date,
      views: ['year', 'month', 'date']
    }));
  });
  it('Should use default for year & month & day views', function () {
    expect(component.find('input').props().value).toBe(utilsToUse.format(date, utilsToUse.dateFormat));
  });
});
describe('e2e - DatePicker inline variant', function () {
  var component;
  var onChangeMock = jest.fn();
  var onCloseMock = jest.fn();
  var onOpenMock = jest.fn();
  beforeEach(function () {
    jest.clearAllMocks();
    component = mount(React.createElement(DatePicker, {
      autoOk: true,
      variant: "inline",
      animateYearScrolling: false,
      onChange: onChangeMock,
      onClose: onCloseMock,
      onOpen: onOpenMock,
      value: utilsToUse.date('2018-01-01T00:00:00.000Z')
    }));
  });
  it('Should renders', function () {
    expect(component).toBeTruthy();
  });
  it('Should open modal with picker on click', function () {
    component.find('input').simulate('click');
    expect(component.find('WithStyles(ForwardRef(Popover))').props().open).toBeTruthy();
    expect(onOpenMock).toHaveBeenCalled();
  });
  it('Should close on popover close request', function () {
    var popoverOnClose = component.find('WithStyles(ForwardRef(Popover))').prop('onClose');
    popoverOnClose();
    expect(component.find('WithStyles(ForwardRef(Popover))').prop('open')).toBeFalsy();
    expect(onCloseMock).toHaveBeenCalled();
  });
  it('Should dispatch onChange and close on day select', function () {
    component.find('input').simulate('click');
    component.find('Day button').at(10).simulate('click');
    expect(onChangeMock).toHaveBeenCalled();
    expect(component.find('WithStyles(ForwardRef(Popover))').props().open).toBeFalsy();
  });
});
describe('e2e - DatePicker without month change', function () {
  var component;
  var onChangeMock = jest.fn();
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      onChange: onChangeMock,
      value: date
    }));
  });
  it('Should not add to loading queue if callback is undefined', function () {
    component.find('CalendarHeader button').first().simulate('click');
    expect(component.find('Calendar').first().state('loadingQueue')).toEqual(0);
  });
});
describe('e2e - DatePicker month change sync', function () {
  var component;
  var onChangeMock = jest.fn();
  var onMonthChangeMock = jest.fn();
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      onChange: onChangeMock,
      onMonthChange: onMonthChangeMock,
      value: date
    }));
  });
  it('Should not add to loading queue when synchronous', function () {
    component.find('CalendarHeader button').first().simulate('click');
    expect(component.find('Calendar').first().state('loadingQueue')).toEqual(0);
  });
});
describe('e2e - DatePicker month change async', function () {
  var component;
  var onChangeMock = jest.fn();

  var sleep = function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var promise = sleep(50);
  var onMonthChangeAsyncMock = jest.fn(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return promise;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var date = utilsToUse.date('2018-01-01T00:00:00.000Z');
  beforeEach(function () {
    component = mount(React.createElement(DatePicker, {
      open: true,
      onChange: onChangeMock,
      onMonthChange: onMonthChangeAsyncMock,
      value: date
    }));
  });
  it('Should add to loading queue when loading asynchronous data', function () {
    component.find('CalendarHeader button').first().simulate('click');
    expect(component.find('Calendar').first().state('loadingQueue')).toEqual(1);
  });
  it('Should empty loading queue after loading asynchronous data',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            component.find('CalendarHeader button').first().simulate('click');
            _context2.next = 3;
            return sleep(100);

          case 3:
            expect(component.find('Calendar').first().state('loadingQueue')).toEqual(0);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
test('Custom toolbar component', function () {
  var component = mount(React.createElement(DatePicker, {
    open: true,
    inputProps: {},
    value: new Date(),
    onChange: jest.fn(),
    ToolbarComponent: function ToolbarComponent() {
      return React.createElement("div", {
        id: "custom-toolbar"
      });
    }
  }));
  expect(component.find('#custom-toolbar').length).toBe(1);
});