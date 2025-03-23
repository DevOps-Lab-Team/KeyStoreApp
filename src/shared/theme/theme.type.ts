export type ShadedColor = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type TPalette = {
  primary: string;
  secondary: string;
  tertiary: string;

  gray: ShadedColor;
  red: ShadedColor;
  orange: ShadedColor;

};

export type TTheme = {
  palette: TPalette
};
