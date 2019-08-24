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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TimePickerToolbar_1 = __importDefault(require("./TimePickerToolbar"));
var useUtils_1 = require("../_shared/hooks/useUtils");
var prop_types_1 = require("../constants/prop-types");
var text_field_helper_1 = require("../_helpers/text-field-helper");
var WrappedPurePicker_1 = require("../Picker/WrappedPurePicker");
var WrappedKeyboardPicker_1 = require("../Picker/WrappedKeyboardPicker");
var defaultProps = __assign({}, prop_types_1.timePickerDefaultProps, { openTo: 'hours', views: ['hours', 'minutes'] });
function useOptions(props) {
    var utils = useUtils_1.useUtils();
    return {
        getDefaultFormat: function () {
            return text_field_helper_1.pick12hOr24hFormat(props.format, props.ampm, {
                '12h': utils.time12hFormat,
                '24h': utils.time24hFormat,
            });
        },
    };
}
exports.TimePicker = WrappedPurePicker_1.makePurePicker({
    useOptions: useOptions,
    DefaultToolbarComponent: TimePickerToolbar_1.default,
});
exports.KeyboardTimePicker = WrappedKeyboardPicker_1.makeKeyboardPicker({
    useOptions: useOptions,
    DefaultToolbarComponent: TimePickerToolbar_1.default,
    getCustomProps: function (props) { return ({
        refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi,
    }); },
});
exports.TimePicker.defaultProps = defaultProps;
exports.KeyboardTimePicker.defaultProps = defaultProps;
