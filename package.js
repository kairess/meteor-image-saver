Package.describe({
  name: 'taehee:image-saver',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Save images to server from url',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('coffeescript', ['client', 'server']);

  api.export('ImageSaver');

  api.versionsFrom('1.1.0.2');
  api.addFiles('image-saver.coffee', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('taehee:image-saver');
  api.addFiles('image-saver-tests.js');
});

Npm.depends({
  'request': '2.55.0',
});
