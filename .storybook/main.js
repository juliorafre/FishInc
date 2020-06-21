module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    '../src/components/**/*.stories.js',
    '../src/components/**/stories/*.stories.js',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
