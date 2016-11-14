// 定义 log enSure
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
// 绑定 导航
$('#id-top').on('mouseover', function() {
    $('.top').fadeIn(618)
})
$('.top').on('click', function() {
    if ($('.search').css("display") !== 'none') {
        $('.search').slideUp(618)
        setTimeout("$('.engine').slideDown(618)", 618)
    } else {
        $('.engine').slideUp(618)
        setTimeout("$('.search').slideDown(618)", 618)
    }
})
// 初始化 引擎
var engine = {
    all : [
        {id:0,
            name:'',
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
            name:'知乎',
            url:`http://www.zhihu.com/search?q=`,
        },{
            id:4,
            name:'微信',
            url:`http://weixin.sogou.com/weixin?type=2&query=`,
        },{
            id:5,
            name:'百度百科',
            url:`http://baike.baidu.com/item/`,
        },
    ],
    id  : 0,
}
for (i of engine.all) {
    if (i.id > 0) {
        var temp = `<engine data-id=${i.id}>${i.name}</engine>`
        $('.engine-often').append(temp)
    }
    if (i.id === engine.id) {
        var input = $('.search-input')[0]
        input.dataset.id  = i.id
        input.placeholder = i.name
    }
}
// 搜索 按钮
$('.search-button').on('click',   function() {
    so.search()
})
// 引擎 按钮
$('.engine-often').on('click', 'engine', function(event) {
    var id = event.target.dataset.id
    var input = $('.search-input')[0]
    input.dataset.id = id
    input.placeholder = $(event.target).text()
    $('#id-top-button').click()
})
// 智能提示
var so = {
    search: function(value){
        var input = $('.search-input')[0]
        var id    = Number(input.dataset.id)
        if (value === undefined) {
            var value = input.value
        }
        for (i of engine.all) {
            if (i.id === id) {
                var url = i.url + value
            }
        }
        if (value !== '') {
            window.open( url )
        } else {
            $('.search-input').focus()
        }
    },
    gou: function(content) {
        //组装 URL
        var data = encodeURI(content)
        var sugurl = `https://www.sogou.com/suggnew/ajajjson?type=web&key=${data}`
        //回调函数
        window.sogou = { sug: function(json) {
            so.sug = json[1]
            $('.search-li').remove()
            if(so.sug.length === 0) {
                so.hide()
            } else {
                so.show()
            }
        }}
        //动态 JS脚本
        var temp =  `<script src=${sugurl}></script>`
        $("#id-Sug").html(temp)
        //http://www.cnblogs.com/woider/p/5805248.html
    },
    sug: [],
    now: -1,
    addClass: function(hover) {
        $('.search-li').each( function(i, e) {
            if (i === so.now) {
                var e = $(e)
                e.addClass('search-li-hover')
                if (!hover) { //如果不是悬浮
                    $('.search-input').val(e.text())
                }
            } else {
                $(e).removeClass('search-li-hover')
            }
        })
    },
    upDown: function(next) {
        if (so.sug.length > 1) {
            var all = so.sug.length
            var old = (so.now  + all) % all
            so.now  = (old + next) % all
            so.addClass()
        } else if (so.sug.length === 1) {
            $('.search-li').addClass('search-li-hover')
        }
    },
    hide: function() {
        $('.search-list').css('border-color','transparent')
        setTimeout("$('.search-li').hide()", 100)
    },
    show: function() {
        $('.search-list').css('border-color','#037dd8')
        for (var i = 0; i < so.sug.length; i++) {
            $('.search-list').append(`<div data-id=${i} class="search-li">${so.sug[i]}</div>`)
        }
        $('.search-list').append(`<div class="search-space"><i class="fa fa-angle-double-up fa-lg" aria-hidden="true"></i></div>`)
        $('.search-space')[0].remove()
    },
}
$('.search-list' ).on('mouseover', '.search-li', function(event) {
    so.now = Number(event.target.dataset.id)
    var hover = true
    so.addClass(hover)
})
$('.search-list' ).on('click',     '.search-li', function(event) {
    var value = $(event.target).text()
    so.search(value)
})
$('.search-input').on('keyup', function() {
    if (event.keyCode === 13) {
        $('.search-button').click()
    } else if (event.keyCode === 38) {
        so.upDown(-1)
    } else if (event.keyCode === 40) {
        so.upDown(1)
    } else {
        so.gou(event.target.value)
        so.now = -1
    }
})
$('.search-input').on('blur',  function() {
    so.hide()
})
$('.search-input').on('focus', function() {
    if(so.sug.length === 0) {
        so.hide()
    } else {
        $('.search-list').css('border-color','#037dd8')
        $('.search-li').show()
    }
})
// 2. engine自动排序 和 添加/删除 功能engine
