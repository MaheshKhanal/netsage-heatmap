import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addColorPicker({
      path: 'backgroundColor',
      name: 'Background Color',
      defaultValue: '#fff',
    })
    .addNumberInput({
      path: 'strokePerc',
      name: 'Stroke size',
      defaultValue: 0.05,
    })
    .addBooleanSwitch({
      path: 'stroke',
      name: 'Show Stroke',
      defaultValue: false,
    })
    .addColorPicker({
      path: 'strokeColor',
      name: 'Stroke Color',
      defaultValue: 'rgb(128,128,128)',
    })
    .addBooleanSwitch({
      path: 'rounded',
      name: 'Rounded',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'roundedRadius',
      name: 'Round radius',
      defaultValue: 0.1,
    })
    .addNumberInput({
      path: 'paddingScale',
      name: 'Padding',
      defaultValue: 0.05,
    })
    .addRadio({
      path: 'colorInterpolation',
      defaultValue: 'gradient',
      name: 'Color Interploation type',
      settings: {
        options: [
          {
            value: 'gradient',
            label: 'Gradient',
          },
          {
            value: 'palette',
            label: 'Palette',
          },
        ],
      },
    })
    .addColorPicker({
      path: 'color1',
      name: 'Starting color',
      defaultValue: 'rgba(220,220,220,0.9)',
    })
    .addColorPicker({
      path: 'color2',
      name: 'End color',
      defaultValue: 'rgba(151,187,205,0.9)',
    })
    .addBooleanSwitch({
      path: 'showLabels',
      name: 'Show Labels',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'labelScale',
      name: 'Label Scale',
      defaultValue: 0.2,
    })
    .addColorPicker({
      path: 'labelFontColor',
      name: 'Label Color',
      defaultValue: 'rgba(0,0,0,0.5)',
    });
});
