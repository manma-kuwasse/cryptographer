'use strict';
const fs = require('fs');
const pug = require('pug');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('<!DOCTYPE html><html lang="jp"><body>' +
    '<h1>ログアウトしました</h1>' +
    '<a href="/posts">ログイン</h1>' +
    '</body></html>');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のリクエストです');
}

function handleInfo(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/info.pug'));
}

function Encode(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/encode.pug'));
}

function Decode(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/decode.pug'));
}

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon'
  });
  const favicon = fs.readFileSync('./favicon.ico');
  res.end(favicon);
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest,
  handleInfo,
  Encode,
  Decode,
  handleFavicon
};