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
var clsx_1 = __importDefault(require("clsx"));
var Calendar_1 = __importDefault(require("../views/Calendar/Calendar"));
var useUtils_1 = require("../_shared/hooks/useUtils");
var useViews_1 = require("../_shared/hooks/useViews");
var ClockView_1 = require("../views/Clock/ClockView");
var styles_1 = require("@material-ui/core/styles");
var YearView_1 = require("../views/Year/YearView");
var MonthView_1 = require("../views/Month/MonthView");
var useIsLandscape_1 = require("../_shared/hooks/useIsLandscape");
var prop_types_1 = require("../constants/prop-types");
var dimensions_1 = require("../constants/dimensions");
var viewsMap = {
    year: YearView_1.YearSelection,
    month: MonthView_1.MonthSelection,
    date: Calendar_1.default,
    hours: ClockView_1.ClockView,
    minutes: ClockView_1.ClockView,
    seconds: ClockView_1.ClockView,
};
var useStyles = styles_1.makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    containerLandscape: {
        flexDirection: 'row',
    },
    pickerView: {
        overflowX: 'hidden',
        minHeight: dimensions_1.VIEW_HEIGHT,
        minWidth: dimensions_1.DIALOG_WIDTH,
        maxWidth: dimensions_1.DIALOG_WIDTH_WIDER,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    pickerViewLandscape: {
        padding: '0 8px',
    },
}, { name: 'MuiPickersBasePicker' });
exports.Picker = function (props) {
    var _a, _b;
    var date = props.date, ampm = props.ampm, views = props.views, disableToolbar = props.disableToolbar, disablePast = props.disablePast, disableFuture = props.disableFuture, hideTabs = props.hideTabs, onChange = props.onChange, openTo = props.openTo, minutesStep = props.minutesStep, dateRangeIcon = props.dateRangeIcon, timeIcon = props.timeIcon, unparsedMinDate = props.minDate, unparsedMaxDate = props.maxDate, animateYearScrolling = props.animateYearScrolling, leftArrowIcon = props.leftArrowIcon, rightArrowIcon = props.rightArrowIcon, renderDay = props.renderDay, shouldDisableDate = props.shouldDisableDate, allowKeyboardControl = props.allowKeyboardControl, onMonthChange = props.onMonthChange, onYearChange = props.onYearChange, leftArrowButtonProps = props.leftArrowButtonProps, rightArrowButtonProps = props.rightArrowButtonProps, ToolbarComponent = props.ToolbarComponent, loadingIndicator = props.loadingIndicator, orientation = props.orientation;
    var utils = useUtils_1.useUtils();
    var classes = useStyles();
    var isLandscape = useIsLandscape_1.useIsLandscape(orientation);
    var _c = useViews_1.useViews(views, openTo, onChange), openView = _c.openView, setOpenView = _c.setOpenView, handleChangeAndOpenNext = _c.handleChangeAndOpenNext;
    var minDate = React.useMemo(function () { return utils.date(unparsedMinDate); }, [unparsedMinDate, utils]);
    var maxDate = React.useMemo(function () { return utils.date(unparsedMaxDate); }, [unparsedMaxDate, utils]);
    return (React.createElement("div", { className: clsx_1.default(classes.container, (_a = {},
            _a[classes.containerLandscape] = isLandscape,
            _a)) },
        !disableToolbar && (React.createElement(ToolbarComponent, __assign({ date: date, onChange: onChange, setOpenView: setOpenView, openView: openView, hideTabs: hideTabs, dateRangeIcon: dateRangeIcon, timeIcon: timeIcon, isLandscape: isLandscape }, props))),
        React.createElement("div", { className: clsx_1.default(classes.pickerView, (_b = {}, _b[classes.pickerViewLandscape] = isLandscape, _b)) },
            openView === 'year' && (React.createElement(YearView_1.YearSelection, { date: date, onChange: handleChangeAndOpenNext, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onYearChange: onYearChange, animateYearScrolling: animateYearScrolling })),
            openView === 'month' && (React.createElement(MonthView_1.MonthSelection, { date: date, onChange: handleChangeAndOpenNext, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onMonthChange: onMonthChange })),
            openView === 'date' && (React.createElement(Calendar_1.default, { date: date, onChange: handleChangeAndOpenNext, onMonthChange: onMonthChange, disablePast: disablePast, disableFuture: disableFuture, minDate: minDate, maxDate: maxDate, leftArrowIcon: leftArrowIcon, leftArrowButtonProps: leftArrowButtonProps, rightArrowIcon: rightArrowIcon, rightArrowButtonProps: rightArrowButtonProps, renderDay: renderDay, shouldDisableDate: shouldDisableDate, allowKeyboardControl: allowKeyboardControl, loadingIndicator: loadingIndicator })),
            (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && (React.createElement(ClockView_1.ClockView, { date: date, ampm: ampm, type: openView, minutesStep: minutesStep, onHourChange: handleChangeAndOpenNext, onMinutesChange: handleChangeAndOpenNext, onSecondsChange: handleChangeAndOpenNext })))));
};
exports.Picker.defaultProps = __assign({}, prop_types_1.datePickerDefaultProps, { views: Object.keys(viewsMap) });
