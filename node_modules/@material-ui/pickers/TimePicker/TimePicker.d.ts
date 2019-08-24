/// <reference types="react" />
import { WrappedPurePickerProps } from '../Picker/WrappedPurePicker';
import { WrappedKeyboardPickerProps } from '../Picker/WrappedKeyboardPicker';
export interface BaseTimePickerProps {
    /**
     * 12h/24h view for hour selection clock
     * @default true
     */
    ampm?: boolean;
    /**
     * Step over minutes
     * @default 1
     */
    minutesStep?: number;
}
export interface TimePickerViewsProps extends BaseTimePickerProps {
    /** Array of views to show */
    views?: ('hours' | 'minutes' | 'seconds')[];
    /** Open to timepicker */
    openTo?: 'hours' | 'minutes' | 'seconds';
}
export declare type TimePickerProps = WrappedPurePickerProps & TimePickerViewsProps;
export declare type KeyboardTimePickerProps = WrappedKeyboardPickerProps & TimePickerViewsProps;
export declare const TimePicker: import("react").FunctionComponent<TimePickerProps>;
export declare const KeyboardTimePicker: import("react").FunctionComponent<KeyboardTimePickerProps>;
