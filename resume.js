var tanChuang = function(title, mima) {
    var style = `
        <style>
            /* 弹窗 */
            .tanChuang {
                z-index: 1;
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 1;
                color: white;
                text-align: center;
            }
            /* 背景 */
            .img-background {
                position:relative;
                top: 50%;
                transform: translateY(-88%);
                z-index: -1;
            }
            #img-background { display: inline-block; }
            /* 居中 */
            .tan-center {
                position:relative;
                top: 50%;
                transform: translateY(-61.8%);
                }
            /* 标题 */
            .tan-title {
                font-size: 1.81em;
                font-weight: 300;
                padding: 10px;
            }
            /* 输入框 */
            .tan-message {
                padding: 10px;
            }
            #id-tan-input {
                color: black;
                font-size: 130%;
                text-align: center;
                font-weight: 400;
            }
            /* 按钮 */
            .tan-buttons {
                color: rgb(104, 113, 116);
                background: rgb(0, 0, 0);
                font-size: 110%;
            }
        </style>
        `
    var temp = `
        <div class="tanChuang">
            <div class="tan-center">
                <div class="tan-title">${title}</div>
                <div class="tan-message pure-form">
                    <input id="id-tan-input" type="text" placeholder="">
                </div>
                <div class="tan-button">
                    <button id="id-tan-OK"     class="tan-buttons pure-button" type="button">进入</button>
                    <button id="id-tan-Cancel" class="tan-buttons pure-button" type="button">取消</button>
                </div>
            </div>
            <div class="img-background">
                <img id="img-background pure-img" width="70%" src="imgs/105.Earth.png" alt="background">
            </div>
        </div> `
    $('body').append(style)
    $('body').append(temp)
    $('#id-tan-OK').on('click', function() {
        let value = $('#id-tan-input')[0].value
        if (value === mima) {
            $('.tanChuang').remove()
        } else {
            $('#id-tan-input')[0].value = ''
            $('#id-tan-input')[0].placeholder = '密码错误'
        }
    })
    $('#id-tan-Cancel').on('click', function() {
        $('#id-tan-input')[0].placeholder = '123'
    })
    $('#id-tan-input').on('keydown', function() {
        if (event.key === 'Enter') {
            $('#id-tan-OK').click()
        }
    })
}
// tanChuang('你好，是否知道个人档案密钥','123')

var ckXian = function () {
    var body = document.querySelector('body')
    var style =
    `<style id="xm" media="screen">
        div{outline: 1px red dashed;}
    </style>`
    var i = false
    body.addEventListener('keydown', function(event){
        if (event.keyCode === 77 && event.ctrlKey) {
            if (i) {
                var styletog = document.querySelector('#xm')
                styletog.remove(); i= false
            } else {
                body.insertAdjacentHTML('afterbegin', style); i = true
            }
        }
    })
} //后台添加代码,使用 ctrl+m 显示参考线 如果要全部看用把'div'改'*'
ckXian()
// 参考线

var time = function( z ) {
    if (z === undefined) { z = new Date() }
    var x = z.toString()
    var zh     = '天一二三四五六'
    var Year   = x.slice(10,15)
    var Month  = z.getMonth() + 1
    var Day    = x.slice(8,10)
    var Hour   = x.slice(16,18)
    var Minute = x.slice(19,21)
    var Second = x.slice(22,24)
    var Week   = zh[ z.getDay() ]
    if ( String(Month).length === 1) {
        Month = '0' + Month
    }
    return `${Month}月${Day}日 星期${Week}`
}
// time() === "10月22日 星期六"

var init_comments = function() {
    if (localStorage.comments === undefined || localStorage.comments === "[]") {
        id = 0
        comments = [{No_:id, name:'卡尔萨根',date:'02月14日 星期三',message:'　　1990年旅行者一号飞过海王星轨道，距离地球64亿公里的时候，卡尔萨根终于说服了NASA把相机转向地球，拍下最后一张照片，再看地球最后一眼。<br><br>　　“在那，那就是地球，那里有我们，有你爱的人，有你认识的人，有你听过的每个人，以及在这个世上存在过的每个人，他们都在这里度过了自己的一生。这里充满了我们的欢乐和痛苦，有成千上万的宗教信仰，意识形态和经济学说。 猎手与觅食者，英雄与懦夫，文明的缔造者和毁灭者，国王与农夫，每对年轻的情侣，每一个母亲与父亲和充满希望的孩子们，发明家与探险家，每一位高尚的教师，每一位贪腐的政客，每一位超级明星，每一位最高领袖，人类历史上的每一位圣人和罪人，都生活在这里，如一粒微尘，悬浮在一束阳光之中。”'}]
        } else {
            comments = JSON.parse(localStorage.comments)
            comments.reverse()
            id = comments[0].No_
            comments.reverse()
        }
}
// 初始 评论 comments 数据
var comment = function(comments, id) {
    var words = 140
    var html = `
        <div class="comment">
            <form class="comment-text pure-form">
                <textarea id="id-comment-text" maxlength="${words}" placeholder="在此输入评论" rows="4" required></textarea>
                <div id="id-comment-okay">
                    <span class="pure-button pure-button-disabled">还能输入
                    <span   id="id-words">${words}</span> 个字</span>
                    <input  id="id-comment-input" type="text" placeholder="昵称" maxlength="10" required>
                    <button id="id-comment-put" class="pure-button">提交评论</button>
                </div>
            </form>
        </div>
        `
    $('.cont').after(html)
    $('.comment-text').on('keydown', function() {
        var word = words - $('#id-comment-text').val().length
        $('#id-words').text(word)
    })
    $('#id-comment-put').on('click', function(event) {
        var user = $('#id-comment-input').val()
        var text = $('#id-comment-text').val()
        if ( user.length >= 0 && text.length > 0 ) {
            var ku = { No_:id+1, name: user, date: time(), message: text }
            id = ku.No_
            log(id)
            var temp =`
                <div class="message">
                    <div class="message-time">
                        <button data-id="${ku.No_}" class="message-name pure-button">${ku.name} 评论于 ${ku.date}</button>
                    </div>
                    <div class="message-cont">
                        ${ku.message}
                    </div>
                </div>`
            $('.comment-text').after(temp)
            $('#id-comment-text').val('')
            comments.push(ku)
            localStorage.comments = JSON.stringify(comments)
        }
    })
    $('body').on('dblclick', '.message-name', function(event) {
        $(event.target).closest('.message').remove()
        log('comments ID:',event.target.dataset.id)
        $(comments).each( function(i, e) {
            if (String(e.No_) === event.target.dataset.id) {
                comments.splice(i, 1) // 删除 message 并保存 弟弟舔它
                localStorage.comments = JSON.stringify(comments)
            }
        })
        // delete localStorage.comments
    })
    for (i of comments) {
        var temp =`
            <div class="message">
                <div class="message-time">
                    <button data-id="${i.No_}" class="message-name pure-button">${i.name} 评论于 ${i.date}</button>
                </div>
                <div class="message-cont">
                    ${i.message}
                </div>
            </div>`
        $('.comment-text').after(temp)
    }
}
// 添加 评论 comments 模块
// init_comments()
// comment(comments, id)
