define(['jquery','jqueryCookie','template'],function($,undefined,template){
    //获取本地存储的客户信息
    var userInfoStr = $.cookie('userInfo');
    console.log(userInfoStr);
    //把用户的信息解析成js对象方便使用
    var userInfoObj = JSON.parse(userInfoStr);
    console.log(userInfoObj);
    //拼接用户信息模板字符串
    var prifileTpl = 
        '<div class="profile">' + 
        	'<div class="avatar img-circle">' +
            //如果有缓存，就用缓存的，如果没有，就用系统默认的；
            	'<img src={{ tc_avatar? tc_avatar: "/img/default.png" }}>' + 
        	'</div>' +
        	'<h4>{{ tc_name }}</h4>' +
    	'</div>';
        //调用模板引擎的compile方法编译这个模板字符串，得到一个渲染函数
        var userInfoRender = template.compile(prifileTpl);
        //调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
        var userInfoHTML = userInfoRender(userInfoObj);
        console.log(userInfoHTML);
        //最后把这个html替换到页面指定位置
        $('.aside').prepend(userInfoHTML);


        //导航栏下拉列表
        //点击具有下拉列表功能的a标签，显示下面的ul列表
        $('.navSlide').on('click',function(){
            $(this).next().slideToggle();
        });



        //根据页面定义左侧导航栏焦点
        //获取当前页面的路径
        //移除所有a标签的active类名
        //把路径当做属性选择器选择对应的a标签，给对应的a标签单独添加
        // var pathname = location.pathname;
        // $('.navs a').removeClass('active').filter('[href="' + pathname+ '"]').addClass('active');
        var pathHref = {
            '/html/teacher/teacher_add.html' : '/html/teacher/teacher_list.html'
        };
        var pathname = location.pathname;
        var aHref = pathHref[pathname]?pathHref[pathname]:pathname;
        $('.navs a').removeClass('active').filter('[href="' +aHref +'"]').addClass('active');
});