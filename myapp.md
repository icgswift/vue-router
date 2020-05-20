vue项目  卖座电影 

    1.路由的注册与使用   
                     注册  router.js
                     使用 
                           路由容器        <router-view></router-view>
                           路由跳转        
                                          声明式导航  <router-link  to  tag   activeClass></router-link>
                                          编程式导航   this.$router.push()  
                                                                          携带参数      动态路由   （注册路由时应用占位符）  `/details/${id}`
                                                                                       命名路由
                                                                          参数获取     （在到的组件中） this.$route.params.id
                                                     this.$route, this.$router区别   $router,全称VueRouter（路由器：包含所有路由的容器） 
                                                                                      $route(路由：描述当前路径的对象) 

    2.swiper   
              初始化 必须在DOM加载完成后new Swiper   如涉及数据请求（异步处理）  应用DOM DIFF重新挂载 ：为节点动态添加key值
              差异化复用swiper应用  父（应用组件）传子（swiper组件）   传递props，且class必须 但传递得是为class值的attribute

    3.组件的生命周期
                 组件：可复用的vue实例，因此其具有vue完整的生命周期
                 vue开发一切皆组件化   组件绑定的全局事件监听  后续组件持续作用 如不需要应删除之       

    4.组件中拿到节点   this.$refs.NAME.$el  

    5.iconfont字体图标   
                         资源引入  添加到public文件夹下
                         应用      标签法 <i class="iconfont icon-good"></i>   i标签表示斜体文本，这里借用 相当于p标签
                         
    6.吸顶灯效果     
                 绑定事件监听 （定义methods）  
                 获取滚动距离 一定条件修改data                
                 动态（利用data）为吸住的div绑定class

    7.解决nav固定定位和各个页面的冲突
                                       添加空白div
                                       应用better-scroll

    8.父组件（祖先组件）子组件的生命周期先后顺序  
            没有用到子组件时子组件不存在生命周期， 如果一开始就访问子组件 父组件也要进行他的生命周期如下
            用处例子：事件总线订阅与发布的先后问题
                                  beforeMount           父组件开始挂载
                                                        子组件开始挂载
                                  mounted              子组件挂载完毕
                                                        父组件挂载完毕 
    9.vuex   
           几大作用   1.追踪状态变化
                     2.便于调试，实现事件穿梭                                                                                     
                     3.数据快照 用state保存后端数据，切换页面无需重复向后台请求数据 
             创建store      注意大小写
             注入store      从根组件注入即可    子组件无需引入store
             应用store
                        读取state      $store.state.NAME
                        过滤state      应用store的'计算属性'getters  用于处理一定复杂逻辑 过滤的数据再传递给组件，提高性能
                        修改state    
                                 mutations触发                               this.$store.commit('mutationNAME',data)
                                 actions触发mutations(异步操作，对应作用3)     this.$store.dispatch('actionNAME')  
                                 
                     组件化开发时 应避免直接读取store的state       应用计算属性，mapState函数  组件需要获取多个状态的时使用mapState函数减少我们的工作量，降低代码耦合性
                                        ，调用mutations/actions  commit/dispatch

    10.vue组件库            
                    桌面端      elementUI  
                          全局引入    组件/css 
                          并注册
                          按需引入    借助babel-plugin-component 并配置.babelrc  
                    移动端      mintUI
                           触屏设备手势库     Hammer.js   --> vue-touch（对Hammer.js的封装）

     11.vue服务端渲染       ssr    nuxt.js                 