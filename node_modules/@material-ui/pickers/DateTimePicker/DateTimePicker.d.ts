/// <reference types="react" />
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
import { BaseTimePickerProps } from '../TimePicker/TimePicker';
import { WrappedPurePickerProps } from '../Picker/WrappedPurePicker';
import { WrappedKeyboardPickerProps } from '../Picker/WrappedKeyboardPicker';
export declare type DateTimePickerView = 'year' | 'date' | 'month' | 'hours' | 'minutes';
export declare type BaseDateTimePickerProps = BaseTimePickerProps & BaseDatePickerProps;
export interface DateTimePickerViewsProps extends BaseDateTimePickerProps {
    /** Array of views to show */
    views?: ('year' | 'date' | 'month' | 'hours' | 'minutes')[];
    /** Open to DatePicker */
    openTo?: 'year' | 'date' | 'month' | 'hours' | 'minutes';
    /** To show tabs */
    hideTabs?: boolean;
    /** Date tab icon */
    dateRangeIcon?: React.ReactNode;
    /** Time tab icon */
    timeIcon?: React.ReactNode;
}
export declare type DateTimePickerProps = WrappedPurePickerProps & DateTimePickerViewsProps;
export declare type KeyboardDateTimePickerProps = WrappedKeyboardPickerProps & DateTimePickerViewsProps;
export declare const DateTimePicker: import("react").FunctionComponent<DateTimePickerProps>;
export declare const KeyboardDateTimePicker: import("react").FunctionComponent<KeyboardDateTimePickerProps>;
