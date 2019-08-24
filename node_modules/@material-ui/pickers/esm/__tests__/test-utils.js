import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import * as React from 'react';
import * as enzyme from 'enzyme';
import LuxonUtils from '@date-io/luxon';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '../MuiPickersUtilsProvider';

var getUtilClass = function getUtilClass() {
  switch (process.env.UTILS) {
    case 'moment':
      return MomentUtils;

    case 'date-fns':
      return DateFnsUtils;

    case 'luxon':
      return LuxonUtils;

    default:
      return DateFnsUtils;
  }
};

export var UtilClassToUse = getUtilClass();
export var utilsToUse = new UtilClassToUse();

var getComponentWithUtils = function getComponentWithUtils(element) {
  return React.cloneElement(element, {
    utils: utilsToUse
  });
};

export var shallow = function shallow(element) {
  return enzyme.shallow(getComponentWithUtils(element));
};
export var mount = function mount(element) {
  return enzyme.mount(React.createElement(MuiPickersUtilsProvider, {
    utils: UtilClassToUse
  }, element));
};
export var shallowRender = function shallowRender(render) {
  return enzyme.shallow(render({
    utils: utilsToUse,
    classes: {},
    theme: {}
  }));
}; // toHaveBeenCalledWith doesn't work with moment because of changing some internal props

export var toHaveBeenCalledExceptMoment = function toHaveBeenCalledExceptMoment(mock, params) {
  var _expect;

  if (process.env.UTILS === 'moment') {
    return expect(mock).toHaveBeenCalled();
  }

  return (_expect = expect(mock)).toHaveBeenCalledWith.apply(_expect, _toConsumableArray(params));
};