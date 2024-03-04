/**
 * ESM - import, export는 브라우저 실행 방식
 * CommonJS - require(), module.export ... node.js 내 실행 방식
 */

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export { [ plugins : autoprefixer ]}
module.exports = {
    plugins : [
        require('autoprefixer')
    ]
}