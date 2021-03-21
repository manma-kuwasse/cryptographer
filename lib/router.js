'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/posts?delete=1':
      postsHandler.handleDelete(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    case '/info':
      util.handleInfo(req, res);
      break;
    case '/encode':
      util.Encode(req, res);
      break;
    case '/decode':
      util.Decode(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};