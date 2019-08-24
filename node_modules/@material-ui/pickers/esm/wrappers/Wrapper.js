import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { StaticWrapper } from './StaticWrapper';
import { ModalWrapper } from './ModalWrapper';
import { InlineWrapper } from './InlineWrapper';
export function getWrapperFromVariant(variant) {
  switch (variant) {
    case 'inline':
      return InlineWrapper;

    case 'static':
      return StaticWrapper;

    default:
      return ModalWrapper;
  }
}
export var VariantContext = React.createContext(null);
export var Wrapper = function Wrapper(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  var Component = getWrapperFromVariant(variant);
  return React.createElement(VariantContext.Provider, {
    value: variant || 'dialog'
  }, React.createElement(Component, props));
};