import 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IColors {
  primary: string;
  blue: string;
  light: string;
  grey: string;
  white: string;
  offWhite: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
