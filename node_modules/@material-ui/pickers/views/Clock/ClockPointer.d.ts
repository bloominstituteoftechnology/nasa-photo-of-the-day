import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles';
export interface ClockPointerProps extends WithStyles<typeof styles> {
    value: number;
    hasSelected: boolean;
    isInner: boolean;
    type: ClockViewType;
}
export declare class ClockPointer extends React.Component<ClockPointerProps> {
    static getDerivedStateFromProps: (nextProps: ClockPointerProps, state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    }) => {
        toAnimateTransform: boolean;
        previousType: ClockViewType;
    };
    state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    };
    getAngleStyle: () => {
        height: string;
        transform: string;
    };
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"animateTransform" | "pointer" | "thumb" | "noPoint", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
declare const _default: import("react").ComponentType<(Pick<ClockPointerProps, "type" | "value" | "hasSelected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"animateTransform" | "pointer" | "thumb" | "noPoint">) | (Pick<React.PropsWithChildren<ClockPointerProps>, "children" | "type" | "value" | "hasSelected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"animateTransform" | "pointer" | "thumb" | "noPoint">)>;
export default _default;
