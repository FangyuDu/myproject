
module.exports = app => {
  /* 页面 */
  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/', app.controller.app.index);
  /* 接口 */
  app.get('/api/test', app.controller.app.list)
  app.get('/api/fontDownload', app.controller.api.fontDownload)
};
