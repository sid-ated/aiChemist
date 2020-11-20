const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){
	app.use(createProxyMiddleware('/get_symptoms', {target: 'http://localhost:5000'}));
}
