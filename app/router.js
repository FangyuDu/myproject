
module.exports = app => {
  /* 页面 */
  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/', app.controller.app.index);
  /* 接口 */
  app.get('/api/test', app.controller.app.list)
  app.get('/api/fontDownload', app.controller.api.fontDownload)
  app.get('/api/checkFonts', app.controller.api.checkFonts)
  app.get('/api/scanFonts', app.controller.api.scanFonts)
  app.get('/api/getAllFonts', app.controller.api.getAllFonts)
  app.post('/api/downloadFonts', app.controller.api.zipFonts)
};
