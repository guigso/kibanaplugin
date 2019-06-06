export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'inspiring_injector',
    uiExports: {
      app: {
        title: 'Inspiring Injector',
        description: 'Custom CSS Injector',
        main: 'plugins/inspiring_injector/app',
        publicDir: require('path').resolve(__dirname, 'public/assets'),
        styleSheetPath: require('path').resolve(__dirname, 'public/app.scss'),
      },
      hacks: [
        'plugins/inspiring_injector/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
