/// <reference types="react" />
import { BasePickerProps } from '../../typings/BasePicker';
export interface StateHookOptions {
    getDefaultFormat: () => string;
}
export declare function usePickerState(props: BasePickerProps, options: StateHookOptions): {
    pickerProps: {
        date: import("../../typings/date").MaterialUiPickersDate;
        onChange: (newDate: import("../../typings/date").MaterialUiPickersDate, isFinish?: boolean) => void;
    };
    inputProps: {
        inputValue: string;
        validationError: import("react").ReactNode;
        onClick: () => false | void;
    };
    wrapperProps: {
        format: string;
        open: boolean;
        onClear: () => void;
        onAccept: () => void;
        onSetToday: () => void;
        onDismiss: () => void;
    };
};
