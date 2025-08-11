
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wissen-technolgies-test-completed/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/wissen-technolgies-test-completed"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 814, hash: '59326df6139461d0123423ec6a89c8892e4e912aa53cb43b69779dba044bcd4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: '3b9cc6ad826fb020e7b33d05bef8a547bc2d09b6d21ee9f5ea0e8bdb98d98238', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7799, hash: '34477e2dff76553cb3ee1dd546f87522b4da208f5a43dcf93dd69f75c430030a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P2RSGMKF.css': {size: 293, hash: 'hG+F3XzkIwI', text: () => import('./assets-chunks/styles-P2RSGMKF_css.mjs').then(m => m.default)}
  },
};
