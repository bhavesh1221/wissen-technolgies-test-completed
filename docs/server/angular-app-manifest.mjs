
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cron-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cron-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 793, hash: '03a881827edf87818a8560b1d3ff19bd904ce3e34922af0338bddf9803ae22b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 965, hash: '9fcfd8d13910ab0cdf9abc9d8215b336da2938f9edaf771e57f7cbbe511e2dd4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7778, hash: '92c97025681112c7ecda56b7dc85fdbd5815b872480ff722cdf7934267b81192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P2RSGMKF.css': {size: 293, hash: 'hG+F3XzkIwI', text: () => import('./assets-chunks/styles-P2RSGMKF_css.mjs').then(m => m.default)}
  },
};
