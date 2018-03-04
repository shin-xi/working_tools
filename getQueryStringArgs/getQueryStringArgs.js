/**
 * 获取url中search的各项值，存放到自定义对象中
 * @returns {{}}
 */
function getQueryStringArgs() {
    //取得查询字符串并去掉开头的问号
    let qs = (location.search.length > 0 ? location.search.substring(1) : ''),
        //保存数据的对象
        args = {},//取得每一项
        items = qs.length ? qs.split('&') : [],
        item = null,
        name = null,
        value = null;

    //逐个将每一项添加到args对象中
    for (let i = 0; i < items.length; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}