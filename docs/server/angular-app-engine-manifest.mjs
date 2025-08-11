
export default {
  basePath: '/wissen-technolgies-test-completed',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
