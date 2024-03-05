const path = require('path')

module.exports = {
    // 파일을 읽는 진입점 설정
    // webpack은 기본적으로 js 파일이 진입점
    entry :'./js/main.js',

    // 결과물 반환 설정
    output : {
        // path : path.resolve(__dirname, 'dist'),
        // filename : 'main.js',
        clean : true
    }
}