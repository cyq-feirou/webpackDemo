module.exports = {
    parse: "babel-eslint",// 需要一个parser解析器把源代码转换成抽象语法树,
    // 继承airbnb
    extends: "airbnb",
    // 指定运行环境
    env: {
        browser: true,
        "node": true
    }
}