const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    // 파일을 읽는 진입점 설정
    // webpack은 기본적으로 js 파일이 진입점
    entry :'./js/main.js',

    // 결과물 반환 설정
    output : {
        // path : path.resolve(__dirname, 'dist'),
        // filename : 'main.js',
        clean : true
    },

    // 번들링 후 결과물의 처리 방식 
    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),

        new CopyPlugin({
            patterns : [
                {from : 'static'}
            ]
        })
    ],

    devServer : {
        host : 'localhost'
    }
}