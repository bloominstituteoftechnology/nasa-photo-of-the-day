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
var DateTimePickerToolbar_1 = require("./DateTimePickerToolbar");
var text_field_helper_1 = require("../_helpers/text-field-helper");
var prop_types_1 = require("../constants/prop-types");
var WrappedPurePicker_1 = require("../Picker/WrappedPurePicker");
var WrappedKeyboardPicker_1 = require("../Picker/WrappedKeyboardPicker");
var defaultProps = __assign({}, prop_types_1.dateTimePickerDefaultProps, { wider: true, orientation: 'portrait', openTo: 'date', views: ['year', 'date', 'hours', 'minutes'] });
function useOptions(props) {
    var utils = useUtils_1.useUtils();
    if (props.orientation !== 'portrait') {
        throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
    }
    return {
        getDefaultFormat: function () {
            return text_field_helper_1.pick12hOr24hFormat(props.format, props.ampm, {
                '12h': utils.dateTime12hFormat,
                '24h': utils.dateTime24hFormat,
            });
        },
    };
}
exports.DateTimePicker = WrappedPurePicker_1.makePurePicker({
    useOptions: useOptions,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
});
exports.KeyboardDateTimePicker = WrappedKeyboardPicker_1.makeKeyboardPicker({
    useOptions: useOptions,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
    getCustomProps: function (props) { return ({
        refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi,
    }); },
});
exports.DateTimePicker.defaultProps = defaultProps;
exports.KeyboardDateTimePicker.defaultProps = defaultProps;
