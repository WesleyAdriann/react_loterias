import 'styled-components';
import { TTheme } from './tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
