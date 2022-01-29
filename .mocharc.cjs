'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.
// For options look for: https://mochajs.org/#command-line-usage
// And: https://mochajs.org/#configuring-mocha-nodejs

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 4000,
  ui: 'bdd',
  exit: true,
  fullTrace: true,
  spec: [
    'src/**/*.spec.js',
  ],
};
