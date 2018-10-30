const { Application } = require('typedoc');
const { getOptions } = require('loader-utils');

module.exports = function() {
  const app = new Application(getOptions(this));
  const result = app.converter.convert([this.resourcePath]);

  if (result.errors && result.errors.length) {
    result.errors.forEach(error => {
      throw new Error(error.messageText);
    });
  }

  const projectObject = app.serializer.projectToObject(result.project);
  return `export default ${ JSON.stringify(projectObject) }`;
}
