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
var PropTypes = __importStar(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var styles_1 = require("@material-ui/core/styles");
var useKeyDown_1 = require("../_shared/hooks/useKeyDown");
var dimensions_1 = require("../constants/dimensions");
exports.useStyles = styles_1.makeStyles({
    popoverPaper: {
        width: dimensions_1.DIALOG_WIDTH,
        paddingBottom: 8,
    },
    popoverPaperWider: {
        width: dimensions_1.DIALOG_WIDTH_WIDER,
    },
}, { name: 'MuiPickersInlineWrapper' });
exports.InlineWrapper = function (_a) {
    var _b;
    var open = _a.open, wider = _a.wider, children = _a.children, PopoverProps = _a.PopoverProps, onClear = _a.onClear, onDismiss = _a.onDismiss, onSetToday = _a.onSetToday, onAccept = _a.onAccept, showTabs = _a.showTabs, DateInputProps = _a.DateInputProps, InputComponent = _a.InputComponent, other = __rest(_a, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);
    var ref = React.useRef();
    var classes = exports.useStyles();
    useKeyDown_1.useKeyDown(open, {
        Enter: onAccept,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(InputComponent, __assign({}, other, DateInputProps, { inputRef: ref })),
        React.createElement(Popover_1.default, __assign({ open: open, onClose: onDismiss, anchorEl: ref.current, classes: {
                paper: clsx_1.default(classes.popoverPaper, (_b = {}, _b[classes.popoverPaperWider] = wider, _b)),
            }, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            }, children: children }, PopoverProps))));
};
exports.InlineWrapper.propTypes = {
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    PopoverProps: PropTypes.object,
};
