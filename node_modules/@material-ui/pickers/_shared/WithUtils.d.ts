import * as React from 'react';
import { Omit } from '@material-ui/core';
import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../typings/date';
export interface WithUtilsProps {
    utils: IUtils<MaterialUiPickersDate>;
}
export declare const withUtils: () => <P extends WithUtilsProps>(Component: React.ComponentType<P>) => React.FunctionComponent<Omit<P, "utils">>;
