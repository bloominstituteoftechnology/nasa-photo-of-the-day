import * as React from 'react';
export var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
export function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.key];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
export function useKeyDown(active, keyHandlers) {
  var keyHandlersRef = React.useRef(keyHandlers);
  useIsomorphicEffect(function () {
    keyHandlersRef.current = keyHandlers;
  });
  React.useEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlers);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active, keyHandlers]);
}