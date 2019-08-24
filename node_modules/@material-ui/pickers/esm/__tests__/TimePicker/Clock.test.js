import * as React from 'react';
import { shallow } from '../test-utils';
import { Clock } from '../../views/Clock/Clock';
var mouseClockEvent = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
  buttons: 1,
  nativeEvent: {
    offsetX: 10,
    offsetY: 25
  }
};
describe('Clock', function () {
  var component;
  var onChangeMock = jest.fn();
  beforeEach(function () {
    onChangeMock.mockReset();
    component = shallow(React.createElement(Clock, {
      type: "minutes",
      onChange: onChangeMock,
      classes: {},
      value: 12,
      children: [React.createElement("div", {
        key: "foo"
      }, "foo")]
    }));
  });
  it('Should renders', function () {
    // console.log(component.debug());
    expect(component).toBeTruthy();
  });
  it('Should set time on mouse move with click', function () {
    component.find('[role="menu"]').simulate('mouseMove', mouseClockEvent);
    expect(onChangeMock).toHaveBeenCalledWith(52, false);
  });
  it('Should set isMoving = false on mouse up', function () {
    component.instance().isMoving = true;
    component.find('[role="menu"]').simulate('mouseUp', mouseClockEvent);
    expect(component.instance().isMoving).toBeFalsy();
  });
  it('Should set time on touch move', function () {
    component.find('[role="menu"]').simulate('touchMove', {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      changedTouches: [{
        clientX: 10,
        clientY: 15
      }],
      target: {
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            left: 0,
            top: 0
          };
        }
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith(52, false);
  });
  it('Should set isMoving = false on touch end', function () {
    component.find('[role="menu"]').simulate('touchEnd');
    expect(component.instance().isMoving).toBeFalsy();
  });
});