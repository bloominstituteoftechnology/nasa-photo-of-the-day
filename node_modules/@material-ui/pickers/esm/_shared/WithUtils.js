import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { useUtils } from './hooks/useUtils';
export var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props) {
      var utils = useUtils();
      return React.createElement(Component, _extends({
        utils: utils
      }, props));
    };

    WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
    return WithUtils;
  };
};