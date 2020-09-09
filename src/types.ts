type colorInterpolation = 'gradient' | 'palette';
// export interface SimpleOptions {
//   text: string;
//   showSeriesCount: boolean;
//   seriesCountSize: SeriesSize;
// }

export interface SimpleOptions {
  backgroundColor: string;
  stroke: boolean;
  strokePerc: number;
  strokeColor: string;
  rounded: boolean;
  roundedRadius: number;
  paddingScale: number;
  colorInterpolation: colorInterpolation;
  color1: string;
  color2: string;
  showLabels: boolean;
  labelScale: number;
  labelFontColor: string;
}
