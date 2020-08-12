import 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IColors {
  primary: string;
  blue: string;
  light: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
