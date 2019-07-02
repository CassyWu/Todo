const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //在内存中自动生成index页面的插件

const config = {
    mode: 'development', //development:代码不压缩 production:代码压缩
    //webpack 4.x 中约定大于配置。
    //默认入口文件./src/index.js，把打包后的文件放在./dist/main.js。如果单入口和出口可以不写entry，output.
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//源文件(双下划线，别写错咯)
            filename: 'index.html'//生成的内存中首页名称
        })
    ],
    module: { //第三方模块的配置规则
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude:/node_modules/},
            { test:/\.css$/,use: ['style-loader', 'css-loader']},
            { test:/\.scss$/,use: ['style-loader', 'css-loader','sass-loader']}
        ]
    }
};

//向外暴露一个打包的配置对象
module.exports = config;