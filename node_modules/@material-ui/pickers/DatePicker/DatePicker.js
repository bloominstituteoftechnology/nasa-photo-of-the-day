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
Object.defineProperty(exports, "__esModule", { value: true });
var useUtils_1 = require("../_shared/hooks/useUtils");
var DatePickerToolbar_1 = require("./DatePickerToolbar");
var date_utils_1 = require("../_helpers/date-utils");
var prop_types_1 = require("../constants/prop-types");
var WrappedPurePicker_1 = require("../Picker/WrappedPurePicker");
var WrappedKeyboardPicker_1 = require("../Picker/WrappedKeyboardPicker");
var defaultProps = __assign({}, prop_types_1.datePickerDefaultProps, { openTo: 'date', views: ['year', 'date'] });
function useOptions(props) {
    var utils = useUtils_1.useUtils();
    return {
        getDefaultFormat: function () { return date_utils_1.getFormatByViews(props.views, utils); },
    };
}
exports.DatePicker = WrappedPurePicker_1.makePurePicker({
    useOptions: useOptions,
    DefaultToolbarComponent: DatePickerToolbar_1.DatePickerToolbar,
});
exports.KeyboardDatePicker = WrappedKeyboardPicker_1.makeKeyboardPicker({
    useOptions: useOptions,
    DefaultToolbarComponent: DatePickerToolbar_1.DatePickerToolbar,
});
exports.DatePicker.defaultProps = defaultProps;
exports.KeyboardDatePicker.defaultProps = defaultProps;
