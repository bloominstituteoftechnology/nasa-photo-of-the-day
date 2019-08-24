"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var KeyboardDateInput_1 = __importDefault(require("../_shared/KeyboardDateInput"));
var Picker_1 = require("./Picker");
var Wrapper_1 = require("../wrappers/Wrapper");
var useKeyboardPickerState_1 = require("../_shared/hooks/useKeyboardPickerState");
// Mostly duplicate of ./WrappedPurePicker.tsx to enable tree-shaking of keyboard logic
// TODO investigate how to reduce duplications
function makeKeyboardPicker(_a) {
    var useOptions = _a.useOptions, getCustomProps = _a.getCustomProps, DefaultToolbarComponent = _a.DefaultToolbarComponent;
    function WrappedKeyboardPicker(props) {
        var allowKeyboardControl = props.allowKeyboardControl, ampm = props.ampm, hideTabs = props.hideTabs, animateYearScrolling = props.animateYearScrolling, autoOk = props.autoOk, disableFuture = props.disableFuture, disablePast = props.disablePast, format = props.format, forwardedRef = props.forwardedRef, initialFocusedDate = props.initialFocusedDate, invalidDateMessage = props.invalidDateMessage, labelFunc = props.labelFunc, leftArrowIcon = props.leftArrowIcon, leftArrowButtonProps = props.leftArrowButtonProps, maxDate = props.maxDate, maxDateMessage = props.maxDateMessage, minDate = props.minDate, onOpen = props.onOpen, onClose = props.onClose, minDateMessage = props.minDateMessage, strictCompareDates = props.strictCompareDates, minutesStep = props.minutesStep, onAccept = props.onAccept, onChange = props.onChange, onMonthChange = props.onMonthChange, onYearChange = props.onYearChange, renderDay = props.renderDay, views = props.views, openTo = props.openTo, rightArrowIcon = props.rightArrowIcon, rightArrowButtonProps = props.rightArrowButtonProps, shouldDisableDate = props.shouldDisableDate, value = props.value, dateRangeIcon = props.dateRangeIcon, emptyLabel = props.emptyLabel, invalidLabel = props.invalidLabel, timeIcon = props.timeIcon, orientation = props.orientation, variant = props.variant, disableToolbar = props.disableToolbar, loadingIndicator = props.loadingIndicator, _a = props.ToolbarComponent, ToolbarComponent = _a === void 0 ? DefaultToolbarComponent : _a, other = __rest(props, ["allowKeyboardControl", "ampm", "hideTabs", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "initialFocusedDate", "invalidDateMessage", "labelFunc", "leftArrowIcon", "leftArrowButtonProps", "maxDate", "maxDateMessage", "minDate", "onOpen", "onClose", "minDateMessage", "strictCompareDates", "minutesStep", "onAccept", "onChange", "onMonthChange", "onYearChange", "renderDay", "views", "openTo", "rightArrowIcon", "rightArrowButtonProps", "shouldDisableDate", "value", "dateRangeIcon", "emptyLabel", "invalidLabel", "timeIcon", "orientation", "variant", "disableToolbar", "loadingIndicator", "ToolbarComponent"]);
        var injectedProps = getCustomProps ? getCustomProps(props) : {};
        var options = useOptions(props);
        var _b = useKeyboardPickerState_1.useKeyboardPickerState(props, options), pickerProps = _b.pickerProps, inputProps = _b.inputProps, wrapperProps = _b.wrapperProps;
        return (React.createElement(Wrapper_1.Wrapper, __assign({ variant: variant, InputComponent: KeyboardDateInput_1.default, DateInputProps: inputProps }, injectedProps, wrapperProps, other),
            React.createElement(Picker_1.Picker, __assign({}, pickerProps, { ToolbarComponent: ToolbarComponent, disableToolbar: disableToolbar, hideTabs: hideTabs, orientation: orientation, ampm: ampm, views: views, openTo: openTo, allowKeyboardControl: allowKeyboardControl, minutesStep: minutesStep, animateYearScrolling: animateYearScrolling, disableFuture: disableFuture, disablePast: disablePast, leftArrowIcon: leftArrowIcon, leftArrowButtonProps: leftArrowButtonProps, maxDate: maxDate, minDate: minDate, strictCompareDates: strictCompareDates, onMonthChange: onMonthChange, onYearChange: onYearChange, renderDay: renderDay, dateRangeIcon: dateRangeIcon, timeIcon: timeIcon, rightArrowIcon: rightArrowIcon, rightArrowButtonProps: rightArrowButtonProps, shouldDisableDate: shouldDisableDate, loadingIndicator: loadingIndicator }))));
    }
    return WrappedKeyboardPicker;
}
exports.makeKeyboardPicker = makeKeyboardPicker;
