// required to use just shallow here because utils prop override
import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '../MuiPickersUtilsProvider';
import { shallow } from 'enzyme'; // required to use just shallow here because utils prop override

describe('MuiPickersUtilsProvider', function () {
  var component;
  beforeEach(function () {
    component = shallow(React.createElement(MuiPickersUtilsProvider, {
      utils: DateFnsUtils
    }, React.createElement("div", null)));
  });
  it('Should render context provider', function () {
    expect(component).toBeTruthy();
  });
});