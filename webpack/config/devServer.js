const isWindows = require('is-windows');
const { devServerProxyConfig } = require('./devServerProxy');

const defaultPort = 3000;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

const devServerConfig = {
    port: defaultPort,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: devServerProxyConfig,
    hot: true,
    host: devServerHost,
};

module.exports = {
    devServerUrl,
    devServerConfig
}