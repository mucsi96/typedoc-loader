const path = require('path');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const compiler = require('./compiler');

test('writes a module exporting TypeDoc JSON', () => {
  return compiler('test-file.ts', {
    mode: 'modules',
    tsConfig: tsconfigPath
  }).then(stats => {
    const output = stats.toJson().modules[0].source;
    expect(output).toMatch(/^export default /);
    const json = JSON.parse(output.replace(/^export default /, ''));
    expect(json).toMatchSnapshot();
  });
});