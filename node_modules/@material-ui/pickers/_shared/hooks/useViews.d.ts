import * as React from 'react';
import { MaterialUiPickersDate } from '../..';
import { PickerView } from '../../Picker/Picker';
export declare function useViews(views: PickerView[], openTo: PickerView, onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void): {
    handleChangeAndOpenNext: (date: import("../../typings/date").MaterialUiPickersDate, isFinish?: boolean | undefined) => void;
    openView: "date" | "year" | "month" | "hours" | "minutes" | "seconds";
    setOpenView: React.Dispatch<React.SetStateAction<"date" | "year" | "month" | "hours" | "minutes" | "seconds">>;
};
