var log = function() {
        console.log.apply(console, arguments)
    }
    //定义自己的log很重要 enSure增强进化版 穿衣服
var ensure = function(def, result, message) {
    if (JSON.stringify(def) !== JSON.stringify(result)) {
        log('异常————————————>', message)
        log('def    = "' + def + '"\nresult = "' + result + '"')
    }
}
var ckXian = function(mc) {
        var body = document.querySelector('body')
        var style =
            `<style id="xm" media="screen">
            ${mc}{outline: 1px red dashed} </style>`
        var i = false
        body.addEventListener('keydown', function(event) {
            if (event.keyCode === 77 && event.ctrlKey) {
                if (i) {
                    var styletog = document.querySelector('#xm')
                    styletog.remove();
                    i = false
                } else {
                    body.insertAdjacentHTML('afterbegin', style);
                    i = true
                }
            }
        })
    }
ckXian('*')
// 定义 log enSure

$('#id-top').on('mouseover', function() {
    $('.top').fadeIn()
})
$('.top').on('click', function() {
    $('.search').slideToggle(1000)
    setTimeout("$('.engine').slideToggle(1000)", 1000)
})
// 绑定 导航
var engine = [
    {id:0,
        name:'搜狗',
        url:`http://www.sogou.com/web?ie={inputEncoding}&query=`,
    },{
        id:1,
        name:'搜狗',
        url:`http://www.sogou.com/web?ie={inputEncoding}&query=`,
    },{
        id:2,
        name:'必应',
        url:`http://cn.bing.com/search?q=`,
    },{
        id:3,
        name:'百度',
        url:`http://www.baidu.com/#ie={inputEncoding}&wd=`,
    },{
        id:4,
        name:'微信',
        url:`http://weixin.sogou.com/weixin?type=2&query=`,
    },{
        id:5,
        name:'百度百科',
        url:`http://baike.baidu.com/item/`,
    },
]
$(engine).each( function(i,e) {
    if (i > 0) {
        var temp = `<engine data-id=${e.id}>${e.name}</engine>`
        $('.engine-init').append(temp)
    }
})
// 初始化 引擎
$('.search-button').on('click', function() {
    var input = $('.search-input')
    var value = input.val()
    var id    = input.data('id')
    for (i of engine) {
        if (i.id === id) {
            var url = i.url + value
        }
    }
    if (value !== '') {
        window.open( url )
    }
})
$('.search-input' ).on('keydown', function() {
    if (event.key === 'Enter') {
        $('.search-button').click()
    }
})
// 搜索 按钮
$('.engine-init').on('click', 'engine', function(event) {
    var id = event.target.dataset.id
    var input = $('.search-input')[0]
    input.dataset.id = id
    input.placeholder = $(event.target).text()
    $('#id-top-button').click()
})
