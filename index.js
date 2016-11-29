import fs from 'fs';
import path from 'path';
import koa from 'koa';
import convert from 'koa-convert';
import koaStatic from 'koa-static-cache';
import Webpack from 'webpack';
import { devMiddleware } from 'koa-webpack-middleware';
import webpackConfig from './webpack.config';

const app = new koa();

app.use(convert(koaStatic(path.join(__dirname, 'static'))));

const compiler = Webpack(webpackConfig);

app.use(devMiddleware(compiler, {
  publicPath: '/build/',
  stats: {
    color: true
  }
}));

const examples = path.join(__dirname, 'examples');
const items = [];
fs.readdirSync(examples).forEach(file => {
  const F = path.join(examples, file, 'index.html');
  if (fs.existsSync(F)) {
    items.push(`<li><a href="/${file}">${file}</a></li>`);
    app.use(gen('/' + file + '/?.*', F));
  }
});
// Generate the Index
app.use((ctx, next) => {
  if (ctx.url === '/') {
    ctx.body = `<ul>${items.join("")}</ul>`;
  } else {
    next();
  }
});

app.listen(6060, () => {
  console.log('Server listening on http://localhost:6060, Ctrl+C to stop')
});

function gen(url, file) {
  const urlReg = new RegExp(url);
  return (ctx, next) => {
    if (urlReg.test(ctx.url)) {
      ctx.status = 200;
      ctx.body = fs.readFileSync(file, 'utf-8');
    } else {
      next();
    }
  }
}