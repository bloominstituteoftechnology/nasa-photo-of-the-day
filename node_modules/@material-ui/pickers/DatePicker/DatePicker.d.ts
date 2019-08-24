/// <reference types="react" />
import { MaterialUiPickersDate } from '../typings/date';
import { OutterCalendarProps } from '../views/Calendar/Calendar';
import { ParsableDate } from '../constants/prop-types';
import { WrappedPurePickerProps } from '../Picker/WrappedPurePicker';
import { WrappedKeyboardPickerProps } from '../Picker/WrappedKeyboardPicker';
export declare type DatePickerView = 'year' | 'date' | 'month';
export interface BaseDatePickerProps extends OutterCalendarProps {
    /**
     * Min selectable date
     * @default Date(1900-01-01)
     */
    minDate?: ParsableDate;
    /**
     * Max selectable date
     * @default Date(2100-01-01)
     */
    maxDate?: ParsableDate;
    /**
     * Compare dates by the exact timestamp, instead of start/end of date
     * @default false
     */
    strictCompareDates?: boolean;
    /**
     * Disable past dates
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates
     * @default false
     */
    disableFuture?: boolean;
    /**
     * To animate scrolling to current year (using scrollIntoView)
     * @default false
     */
    animateYearScrolling?: boolean;
    /** Callback firing on year change */
    onYearChange?: (date: MaterialUiPickersDate) => void;
}
export interface DatePickerViewsProps extends BaseDatePickerProps {
    /**
     * Array of views to show
     * @type {Array<"year" | "date" | "month">}
     */
    views?: DatePickerView[];
    /** Open to DatePicker */
    openTo?: DatePickerView;
}
export declare type DatePickerProps = WrappedPurePickerProps & DatePickerViewsProps;
export declare type KeyboardDatePickerProps = WrappedKeyboardPickerProps & DatePickerViewsProps;
export declare const DatePicker: import("react").FunctionComponent<DatePickerProps>;
export declare const KeyboardDatePicker: import("react").FunctionComponent<import("../_helpers/text-field-helper").DateValidationProps & import("../_shared/hooks/useKeyboardPickerState").BaseKeyboardPickerProps & {
    variant?: "dialog" | "inline" | "static" | undefined;
} & Pick<import("../wrappers/ModalWrapper").ModalWrapperProps<{}>, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps"> & Pick<import("../wrappers/InlineWrapper").InlineWrapperProps<import("@material-ui/core/TextField").TextFieldProps>, "PopoverProps"> & Pick<import("../_shared/KeyboardDateInput").KeyboardDateInputProps, "children" | "ref" | "label" | "select" | "style" | "title" | "mask" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "innerRef" | "error" | "disabled" | "name" | "margin" | "key" | "autoFocus" | "type" | "fullWidth" | "autoComplete" | "required" | "rows" | "hiddenLabel" | "FormHelperTextProps" | "helperText" | "InputLabelProps" | "inputRef" | "multiline" | "rowsMax" | "SelectProps" | "InputProps" | "inputProps" | "inputVariant" | "TextFieldComponent" | "KeyboardButtonProps" | "InputAdornmentProps" | "maskChar" | "refuse" | "keyboardIcon" | "rifmFormatter"> & DatePickerViewsProps>;
