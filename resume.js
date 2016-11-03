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
                margin: 0 auto;
            }
            /* 按钮 */
            .tan-buttons {
                color: rgb(104, 113, 116);
                background: rgb(0, 0, 0);
                font-size: 110%;
            }
        </style>`
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
                $('.input-mi').each(function(i, e) {
                    e.type = 'text'
                })
                location.href = '#'
                $('.tanChuang').remove()
                localStorage.tan = 'Hasaki'
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
if (localStorage.tan === undefined) {
    tanChuang('你好，是否知道个人档案密钥','123')
}
$('#id-js-tan').on('click', function() {
    tanChuang('你好，是否知道个人档案密钥','123')
    $('#id-tan-input')[0].value = '123'
})
// 弹窗
var ckXian = function() {
        var body = document.querySelector('body')
        var style =
            `<style id="xm" media="screen">
        div{outline: 1px red dashed;}
    </style>`
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
    } //后台添加代码,使用 ctrl+m 显示参考线 如果要全部看用把'div'改'*'
ckXian()
// 参考线
var time = function(z) {
    if (z === undefined) {
        z = new Date()
    }
    var x = z.toString()
    var zh = '天一二三四五六'
    var Year = x.slice(10, 15)
    var Month = z.getMonth() + 1
    var Day = x.slice(8, 10)
    var Hour = x.slice(16, 18)
    var Minute = x.slice(19, 21)
    var Second = x.slice(22, 24)
    var Week = zh[z.getDay()]
    if (String(Month).length === 1) {
        Month = '0' + Month
    }
    return `${Month}月${Day}日 星期${Week}`
}
// 时间 函数
var init_comments = function() {
        if (localStorage.comments === undefined || localStorage.comments === "[]") {
            id = 0
            comments = [{
                No_: id,
                name: '卡尔萨根',
                date: '02月14日 星期三',
                message: '　　1990年旅行者一号飞过海王星轨道，距离地球64亿公里的时候，卡尔萨根终于说服了NASA把相机转向地球，拍下最后一张照片，再看地球最后一眼。<br><br>　　“在那，那就是地球，那里有我们，有你爱的人，有你认识的人，有你听过的每个人，以及在这个世上存在过的每个人，他们都在这里度过了自己的一生。这里充满了我们的欢乐和痛苦，有成千上万的宗教信仰，意识形态和经济学说。 猎手与觅食者，英雄与懦夫，文明的缔造者和毁灭者，国王与农夫，每对年轻的情侣，每一个母亲与父亲和充满希望的孩子们，发明家与探险家，每一位高尚的教师，每一位贪腐的政客，每一位超级明星，每一位最高领袖，人类历史上的每一位圣人和罪人，都生活在这里，如一粒微尘，悬浮在一束阳光之中。”'
            }]
        } else {
            comments = JSON.parse(localStorage.comments)
            comments.reverse()
            id = comments[0].No_
            comments.reverse()
        }
    }
init_comments()
// 初始 评论 comments 数据
var comment = function(comments, id) {
        var words = 140
        var html = `
        <div class="comment">
            <form class="comment-text pure-form">
                <textarea id="id-comment-text" maxlength="${words}" placeholder="在此输入评论" rows="4" required="required"></textarea>
                <div id="id-comment-okay">
                    <span class="pure-button pure-button-disabled">还能输入
                    <span   id="id-words">${words}</span> 个字</span>
                    <input  id="id-comment-user" type="text" placeholder="昵称" maxlength="10" required="required">
                    <button id="id-comment-put" type="submit" class="pure-button">提交评论</button>
                </div>
            </form>
            </div>
            `
        $('body').append(html)
        $('.comment-text').on('keydown', function() {
            var word = words - $('#id-comment-text').val().length
            $('#id-words').text(word)
        })
        $('#id-comment-put').on('click', function(event) {
            var user = $('#id-comment-user')[0].value
            var text = $('#id-comment-text')[0].value
            var text = text.replace( /\n/mg, "<br>" )
            if (user.length > 0 && text.length > 0) {
                var ku = {
                    No_: id + 1,
                    name: user,
                    date: time(),
                    message: text
                }
                id = ku.No_
                var temp = `
                <div class="message">
                    <div class="message-time">
                        <button data-id="${ku.No_}" class="message-name pure-button">${ku.name} 评论于 ${ku.date}</button>
                    </div>
                    <div class="message-cont">
                        <p>${ku.message}</p>
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
            log('comments ID:', event.target.dataset.id)
            $(comments).each(function(i, e) {
                    if (String(e.No_) === event.target.dataset.id) {
                        comments.splice(i, 1) // 删除 message 并保存 弟弟舔它
                        localStorage.comments = JSON.stringify(comments)
                    }
                })
                // delete localStorage.comments
        })
        for (i of comments) {
            var temp = `
            <div class="message">
                <div class="message-time">
                    <button data-id="${i.No_}" class="message-name pure-button">${i.name} 评论于 ${i.date}</button>
                </div>
                <div class="message-cont">
                    <P>${i.message}</p>
                </div>
            </div>`
            $('.comment-text').after(temp)
        }
    }
comment(comments, id)
// 添加 评论 comments 模块
var mList = [{
        id: '0',
        type: 'mp3',
        name: 'Time',
        artist: '盗梦空间'
    }, {
        id: '1',
        type: 'mp3',
        name: '漂洋过海来看你',
        artist: '周深'
    }, {
        id: '2',
        type: 'mp3',
        name: '我的天坑',
        artist: '南征北战'
    }, {
        id: '3',
        type: 'mp3',
        name: 'Paramita(Demo)',
        artist: '丝绵Silkfloss'
    }, {
        id: '4',
        type: 'mp3',
        name: '成都(2016无法长大演唱会Live)',
        artist: '赵雷'
    }, {
        id: '5',
        type: 'mp3',
        name: 'Is this love',
        artist: '逃跑计划'
}, ]
var music = function(mList, button) {
    // http://www.epooll.com/archives/422/ audio 标签事件
    // http://seiyria.com/bootstrap-slider/ input range 样式
    var style = ` <!-- 播放器样式 -->
        <style>
            .playing {
                color: rgb(199, 199, 199);
            }
            .playing:hover {
                color: rgb(104, 104, 104);
            }
            #id-BGM,
            #id-BGM-range {
                margin: 0.8em auto;
            }
            #id-BGM-volume {
                width: 30%;
                margin: 1.5em auto 0.5em auto;
            }
            #id-BGM-name {
                color: black;
                font-size: 1.1em;
                font-weight: bold;
                margin: 0.8em auto;
            }
            music {
                display: inline-block;
                padding: 0.2em 0 0.2em 0;
            }
            music:hover {
                color: red;
                cursor: pointer;
            }
        </style>
        <!-- 进度条样式 -->
        <style>
            .slider {
                position: relative;
                margin: 0 auto;
                display: block;
                background: #565656;
                height: 7px;
                box-shadow: 0 1px 0px rgba(255, 255, 255, 0.25), inset 0 0 4px rgba(0, 0, 0, 0.9);
                -moz-border-radius: 7px;
                -webkit-border-radius: 7px;
                border-radius: 7px;
            }

            .slider div.ui-slider-range {
                display: block;
                height: 7px;
                -moz-border-radius: 7px;
                -webkit-border-radius: 7px;
                border-radius: 7px;
                -moz-transition-property: background-color;
                -o-transition-property: background-color;
                -webkit-transition-property: background-color;
                transition-property: background-color;
                -moz-transition-duration: 100ms;
                -o-transition-duration: 100ms;
                -webkit-transition-duration: 100ms;
                transition-duration: 100ms;
            }

            .slider.red div.ui-slider-range {
                background-color: #e69e9b;
                box-shadow: inset 0 0 4px rgba(163, 18, 0, 0.7), inset 0 0 2px rgba(0, 0, 0, 0.5);
            }

            .slider.red div.ui-slider-range.hilite,
            .slider.red div.ui-slider-range.dragging {
                background-color: #ffa09b;
            }

            .slider.blue div.ui-slider-range {
                background-color: #9FD0E9;
                box-shadow: inset 0 0 4px rgba(0, 85, 151, 0.8), inset 0 0 2px rgba(0, 0, 0, 0.5);
            }

            .slider.blue div.ui-slider-range.hilite,
            .slider.blue div.ui-slider-range.dragging {
                background-color: #9fd5ff;
            }

            .slider.green div.ui-slider-range {
                background-color: #9edbbc;
                box-shadow: inset 0 0 4px rgba(19, 121, 72, 0.8), inset 0 0 2px rgba(0, 0, 0, 0.5);
            }

            .slider.green div.ui-slider-range.hilite,
            .slider.green div.ui-slider-range.dragging {
                background-color: #9ee7c2;
            }

            .slider.black div.ui-slider-range {
                background-color: #aaaaaa;
                box-shadow: inset 0 0 4px rgba(24, 24, 24, 0.8), inset 0 0 2px rgba(0, 0, 0, 0.5);
            }

            .slider.black div.ui-slider-range.hilite,
            .slider.black div.ui-slider-range.dragging {
                background-color: #bbbbbb;
            }

            .slider.white div.ui-slider-range {
                background-color: #e3e3e3;
                box-shadow: inset 0 0 4px rgba(88, 88, 88, 0.5), inset 0 0 2px rgba(0, 0, 0, 0.3);
            }

            .slider.white div.ui-slider-range.hilite,
            .slider.white div.ui-slider-range.dragging {
                background-color: #f0f0f0;
            }

            .slider a.ui-slider-handle {
                position: absolute;
                top: -5px;
                margin-left: -9px;
                z-index: 1;
                height: 16px;
                width: 16px;
                -moz-border-radius: 20px;
                -webkit-border-radius: 20px;
                border-radius: 20px;
                background-color: #d4d4d4;
                -moz-background-size: 100% 100%;
                -o-background-size: 100% 100%;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                border: 0px solid rgba(0, 0, 0, 0.1);
                box-shadow: 0 0px 2px rgba(0, 0, 0, 0.4), inset 0 0px 1px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.6), 0 4px 2px rgba(0, 0, 0, 0.2), 0 9px 4px rgba(0, 0, 0, 0.1), inset 0 2px 1px white;
                outline: none;
            }

            .slider a.ui-slider-handle:after {
                content: "";
                position: absolute;
                width: 15px;
                height: 15px;
                left: -1px;
                top: -4px;
                background-color: none;
                -moz-border-radius: 12px;
                -webkit-border-radius: 12px;
                border-radius: 12px;
                background-image: -moz-radial-gradient(#ffffff, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
                background-image: -webkit-radial-gradient(#ffffff, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
                background-image: radial-gradient(#ffffff, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
            }
        </style>`
    var html = `<!-- 播放器 -->
        <div class="BGM">
            <span style="display: block; height: 3em"></span>
            <div class="works"><h2>Works - BIGC Player</h2></div>
            <span style="display: block; height: 2em"></span>
            <audio id="id-BGM" data-id=0 src="music/0.mp3" autoplay></audio>
            <!-- 进度条 -->
            <div class="slider green" id="id-BGM-range"></div>
            <!-- 00:00 / 00:00 -->
            <span id="id-BGM-now" style="display: inline-block;float: left;">00:00</span>
            <span id="id-BGM-end" style="display: inline-block;float: right;">00:00</span>
            <!-- 歌曲信息 -->
            <br>
            <div id="id-BGM-name">歌曲名</div>
            <div id="id-BGM-artist">艺术家</div>
            <hr>
            <!-- 列表 -->
            <div id="id-BGM-mList"></div>
            <!-- 音量 -->
            <div class="slider white" id="id-BGM-volume"></div>
            <hr>
            <!-- 按钮 -->
            <div class="pure-g ">
                <div class="pure-u-1-3">
                    <a id="id-BGM-last"><i class="fa fa-caret-left fa-3x"></i></a>
                </div>
                <div class="pure-u-1-3">
                    <a id="id-BGM-play"><i class="fa fa-play-circle fa-3x"></i></a>
                </div>
                <div class="pure-u-1-3">
                    <a id="id-BGM-next"><i class="fa fa-caret-right fa-3x"></i></a>
                </div>
            </div>
            <hr>
        </div>`
    $('.HomeWork').append(html)
    $('.HomeWork').append(style)
    $('#id-BGM')[0].pause()
    $(mList).each(function(i, e) {
            var src = `music/${e.id}.${e.type}`
            var name = `${e.name} - ${e.artist}`
            var temp = `<div><music data-id=${e.id} data-src=${src} >${name}</music></div>`
            $('#id-BGM-mList').append(temp)
        })
    // 初始化 歌单
    $(button).on('click', function(event) {
        var music = document.querySelector('#id-BGM')
        if (music.paused) {
            music.play()
        } else {
            music.pause()
        }
    })
    $('#id-BGM').on('pause', function() {
        var play = $($('#id-BGM-play').children()[0])
        play.removeClass("fa-pause-circle")
        play.addClass("fa-play-circle")
        var home = $('#id-player')
        home.removeClass("fa-pause")
        home.addClass("fa-play")
    })
    $('#id-BGM').on('play', function() {
        var play = $($('#id-BGM-play').children()[0])
        play.removeClass("fa-play-circle")
        play.addClass("fa-pause-circle")
        var home = $('#id-player')
        home.removeClass("fa-play")
        home.addClass("fa-pause")
    })
    // 绑定 BGM 开关
    $('#id-BGM').on('playing', function(event) {
        var chang = $('#id-BGM')[0].duration
        $("#id-BGM-range").slider({ max: chang })
        var m = String(Math.floor(chang / 60))
        var s = String(Math.floor(chang % 60))
        if (m.length === 1) {
            m = '0' + m
        }
        if (s.length === 1) {
            s = '0' + s
        }
        $('#id-BGM-end').text(`${m}:${s}`)
        var id = event.target.dataset.id
        $('music').each( function(i, e) {
            if (e.dataset.id === id) {
                $(e).addClass('playing')
            } else {
                $(e).removeClass('playing')
            }
        })
    })
    // 当音乐开始播放 设置进度条最大长度 最大时间 和 当前播放CSS
    $('#id-BGM').on('timeupdate', function() {
             var now = event.target.currentTime
             var m = String(Math.floor(now / 60))
             var s = String(Math.floor(now % 60))
             if (m.length === 1) {
                 m = '0' + m
             }
             if (s.length === 1) {
                 s = '0' + s
             }
             $('#id-BGM-now').text(`${m}:${s}`)
             $("#id-BGM-range").slider({ value: now })
         })
    // 进度条
    $(".BGM").on('mousedown', function() {
       $('#id-BGM').off('timeupdate')
    })
    // 停止 进度条
    $("#id-BGM-range").on('mouseup', function() {
        var range = $("#id-BGM-range").slider("value")
        $('#id-BGM')[0].currentTime = range
    })
    // 跳转 进度
    $(".BGM").on('mouseup', function() {
        var volume = $("#id-BGM-volume").slider("value") / 100
        $('#id-BGM')[0].volume = volume
        $('#id-BGM').on('timeupdate', function() {
                 var now = event.target.currentTime
                 var m = String(Math.floor(now / 60))
                 var s = String(Math.floor(now % 60))
                 if (m.length === 1) {
                     m = '0' + m
                 }
                 if (s.length === 1) {
                     s = '0' + s
                 }
                 $('#id-BGM-now').text(`${m}:${s}`)
                 $("#id-BGM-range").slider({ value: now })
             })
        // 进度条
    })
    // 跳转 音量
    $("#id-BGM-mList").on('click', 'music', function(event) {
        var id  = event.target.dataset.id
        var src = event.target.dataset.src
        var player = $("#id-BGM")[0]
        player.src = src
        player.dataset.id  = id
        $(mList).each( function(i ,e) {
            if (e.id == id) {
                $('#id-BGM-name').text(e.name)
                $('#id-BGM-artist').text(e.artist)
            }
        })
    })
    // 歌单 点击 切歌
    $('#id-BGM-play').on('click', function(event) {
        var music = document.querySelector('#id-BGM')
        var bo = $('#id-BGM-play').children()
        if (music.paused) {
            music.play()
        } else {
            music.pause()
        }
    })
    // 播放 按钮
    $('#id-BGM-next').on('click', function(event) {
        var all = mList.length
        var old = Number($('#id-BGM')[0].dataset.id) + all
        var id = (old + 1) % all
        $(mList).each( function(i ,e) {
            if (Number(e.id) === id) {
                var player = $("#id-BGM")[0]
                player.src = `music/${id}.${e.type}`
                player.dataset.id = id
            }
        })
        $(mList).each( function(i ,e) {
            if (e.id == id) {
                $('#id-BGM-name').text(e.name)
                $('#id-BGM-artist').text(e.artist)
            }
        })
    })
    // 播放 下一曲
    $('#id-BGM-last').on('click', function(event) {
        var all = mList.length
        var old = Number($('#id-BGM')[0].dataset.id) + all
        var id = (old - 1) % all
        $(mList).each( function(i ,e) {
            if (Number(e.id) === id) {
                var player = $("#id-BGM")[0]
                player.src = `music/${id}.${e.type}`
                player.dataset.id = id
            }
        })
        $(mList).each( function(i ,e) {
            if (e.id == id) {
                $('#id-BGM-name').text(e.name)
                $('#id-BGM-artist').text(e.artist)
            }
        })
    })
    // 播放 上一曲
    $('#id-BGM').on('ended', function(event) {
        var player = $("#id-BGM")[0]
        var all = mList.length
        var old = Number(player.dataset.id) + all
        var id  = (old + 1) % all
        $(mList).each( function(i ,e) {
            if (Number(e.id) === id) {
                player.src = `music/${id}.${e.type}`
                player.dataset.id = id
                $('#id-BGM-name').text(e.name)
                $('#id-BGM-artist').text(e.artist)
            }
        })
    })
    // 循环播放
    // $('#id-BGM').on('ended', function(event) {
    //     var player = $("#id-BGM")[0]
    //     var all = mList.length
    //     var old = player.dataset.id
    //     var id  = Math.floor(Math.random() * mList.length)
    //     $(mList).each( function(i ,e) {
    //         if (Number(e.id) === id) {
    //             player.src = `music/${id}.${e.type}`
    //             player.dataset.id = id
    //             $('#id-BGM-name').text(e.name)
    //             $('#id-BGM-artist').text(e.artist)
    //         }
    //     })
    // })
    // 随机播放
}
music(mList, '#id-home')
// 背景音乐
$( document ).ready(function() {
  function createHoverState (myobject){
    myobject.hover(function() {
      $(this).prev().toggleClass('hilite');
    });
    myobject.mousedown(function() {
      $(this).prev().addClass('dragging');
      $("*").mouseup(function() {
        $(myobject).prev().removeClass('dragging');
      });
    });
  }
  $(".slider").slider({
    orientation: "horizontal",
    range: "min",
    max: 100,
    value: 0,
    animate: 1300
  })
  // $("#blue").slider( "value", 100 )
  // $('.slider').each(function(index) {
  //   $(this).slider( "value", 75-index*(50/($('.slider').length-1)));
  // })
  createHoverState($(".slider a.ui-slider-handle"))
  $("#id-BGM-volume").slider("value", 25)
})
// 进度条 样式
log('想招纳我来工作？请发送邮件到 c@bigc.cc','\nʅ（´◔౪◔）ʃ')
