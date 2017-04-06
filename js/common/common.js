define(['jquery','jqueryCookie'],function($, undefined){
    if(!$.cookie('PHPSESSID')){
        location.href = '/html/home/login.html';
    };
});