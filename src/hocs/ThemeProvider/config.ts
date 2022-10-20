import type { TThemeType, TTheme } from './types';

export enum Color {
  VIOLET = '#9E25FC',
  DARK = '#16161a',
  LIGHT_GRAY = '#F4F4F4',
  WHITE = '#FFF',
}

export const THEMES: Record<TThemeType, TTheme> = {
  light: {
    '--primary': Color.VIOLET,
    '--secondary': Color.DARK,
    '--background': Color.LIGHT_GRAY,
  },
  dark: {
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.DARK,
  },
};
