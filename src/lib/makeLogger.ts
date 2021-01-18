import strToHash from './_strToHash';

const colors = [
  '#264653',
  '#2a9d8f',
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#606c38',
];

interface consoleInterface {
  (...arg: any[]): void;
}
const makeLogger = (loggerName: string): consoleInterface => {
  const seed = strToHash(loggerName);
  const colorIndex = Math.ceil(seed * colors.length);
  const color = colors[colorIndex];
  const colorStyle = `color:${color};`;
  return (...args: any[]) =>
    console.log(`%c ${loggerName} -> `, colorStyle, ...args);
};

export default makeLogger;
