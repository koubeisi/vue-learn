/*
    Vue的插件
 */
(function (global) {
    //需要向外暴露的插件对象
    const MyPlugin = {}
    global.MyPlugin = MyPlugin
    //插件对象必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("Vue函数对象的myGlobalMethod方法")
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (value, binding) {
            value.innerText = binding.value.toUpperCase()
        })

        // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //     ...
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log("Vue实例对象的$myMethod方法")
        }
    }
})(window)