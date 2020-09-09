import React from 'react';
import { PanelProps, dateTimeFormatTimeAgo } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Canvas } from 'components/Canvas';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, id }) => {
  let graphOptions = { ...options, colors: [options.color1, options.color2] };
  //	const theme = useTheme();
  console.log(data);
  let parsedData = parseData(data);
  return <Canvas height={height} width={width} panelId={id} options={graphOptions} />;
};

const parseData = data => {
  if (data.series.length) {
    let seriesData = data.series;
    // let countris = seriesData.map(data => data.name);
    let timestamp = seriesData[0].fields[0].values.buffer;
    let labels = timestamp.map(data => timeConverter(data));

    //let datasets = seriesData.map();
    console.log(countris, labels);
  }
};

const timeConverter = UNIX_timestamp => {
  var a = new Date(UNIX_timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  //var hour = a.getHours();
  //var min = a.getMinutes();
  //var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  var time = date + ' ' + month + ' ' + year;
  return time;
};
