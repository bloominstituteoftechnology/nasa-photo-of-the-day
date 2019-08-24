export var clickOKButton = function clickOKButton(component) {
  component.find('ForwardRef(DialogActions) WithStyles(ForwardRef(Button))').at(1).simulate('click');
};