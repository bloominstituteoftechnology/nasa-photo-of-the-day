import * as React from 'react';
import * as PropTypes from 'prop-types';
export var MuiPickersContext = React.createContext(null);
export var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var Utils = _ref.utils,
      children = _ref.children,
      locale = _ref.locale,
      libInstance = _ref.libInstance;
  var utils = React.useMemo(function () {
    return new Utils({
      locale: locale,
      moment: libInstance
    });
  }, [Utils, libInstance, locale]);
  return React.createElement(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
};
process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
  utils: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired
} : void 0;
export default MuiPickersUtilsProvider;