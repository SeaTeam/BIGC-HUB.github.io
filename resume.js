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
            $('.input-mi').each( function(i,e) {
                e.type='text'
            })
            $('.tanChuang').remove()
        } else {
            $('#id-tan-input')[0].value = ''
            $('#id-tan-input')[0].placeholder = '密码错误'
        }
    })
    $('#id-tan-Cancel').on('click', function() {
        $('.tanChuang').remove()
    })
    $('#id-tan-input').on('keydown', function() {
        if (event.key === 'Enter') {
            $('#id-tan-OK').click()
        }
    })
}
// 弹窗
var resume = function() {
    var contact = `<!-- 联系方式 -->
    <form class="resume-contact pure-form pure-form-stacked">
        <fieldset>
            <legend>汪洋</legend>
            <div class="pure-g ">
                <div class="pure-u-1 pure-u-md-1-3">
                    <label><i class="fa fa-phone fa-2x" aria-hidden="true"></i></label>
                    <input class="input-mi" value="+86 189-6670-2120" type="password" readonly>
                </div>

                <div class="pure-u-1 pure-u-md-1-3">
                    <label><i class="fa fa-weixin fa-2x" aria-hidden="true"></i></label>
                    <input class="input-mi" value="iwangyang" type="password" readonly>
                </div>

                <div class="pure-u-1 pure-u-md-1-3">
                    <label><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></label>
                    <input class="input-mi" value="c@bigc.cc" type="text" readonly>
                </div>
            </div>
        </fieldset>
    </form>`
    var resume = `<!-- 简历 -->
    <div class="resume pure-g">
            <!-- 左 侧边栏 -->
            <div class="resume-left pure-u-1 pure-u-lg-2-5">
                <hr><h2><i class="fa fa-university" aria-hidden="true"></i>
                毕业院校</h2>2011 ~ 2015 西安美术学院 本科<hr>
                <h2><i class="fa fa-wrench" aria-hidden="true"></i>
                项目与工作经验</h2>
                <p>使用 WordPress 搭架个人网站 并多年维护</p>
                <a target="_blank" href="http://bigc.cc"><i class="fa fa-wordpress fa-2x pull-left"></i>
                    http://bigc.cc<br>Version 4.5.4</a>

                <p>使用 CMD MarkDown 编写学习手册 随时更新 急速查阅</p>
                <a target="_blank" href="https://www.zybuluo.com/iwangyang/note/519509"><i class="fa fa-edit fa-2x pull-left"></i>
                    萧瓜 HTML CSS Javascript<br>Python 3 小甲鱼 笔记</a>

                <p>使用 GitHub 分布式版本存储 管理项目作业</p>
                <a target="_blank" href="https://github.com/BIGC-HUB"><i class="fa fa-github-alt fa-2x pull-left"></i>
                    https://github.com/<br>BIGC-HUB</a>

                <p><li>实现 JD.com 首页轮播图</li></p>
                <p><li>实现 Weibo. 字符限制评论框 页尾</li></p>
                <p><li>制作 TodoList 全功能</li></p>
                <p><li>制作 Chrome 参考线 插件 Ctrl + M</li></p>
                <p><li>纯 JavaScript 编写本页</li></p>

                <p></p><hr>
                <p>2015<br> 杭州印象国际艺术教育 <b>教务老师</b></p>
                <p>2014<br> 三亚雍和国际青年旅舍 <b>义工</b></p>
                <p>2013<br> 西安锁艺人安防设备有限公司 <b>网页美工</b></p>
                <p>2011<br> 西安恒阳电子 <b>销售</b></p>
            </div>
            <!-- 右 侧边栏 -->
            <div class="resume-right pure-u-1 pure-u-lg-3-5">
                <hr><h2><i class="fa fa-cog fa-spin fa-3x fa-fw" aria-hidden="true"></i>
                技能</h2>
                <dl>
                <!-- 技能 -->
                <dt><h3>HTML<i class="fa fa-html5" aria-hidden="true"></i> &#38; CSS3</h3></dt>
                    <p>　　能够编写语义化 HTML，模块化CSS，并实现复杂的布局与功能<br>
                       　　开发符合 W3C 标准的页面，熟练使用 jQuery 框架<br>
                       　　有良好的编码习惯</p>
                <dt><h3>JavaScript <i class="fa fa-plane" aria-hidden="true"></i></h3></dt>
                    <dd><p>熟练运用 log 大法，编写 enSure 测试函数 拆分解决 各种类型 BUG<br>
                       习惯性 注释 &#38; 缩进 增强代码可读性</p></dd>
                    <dd><p>充分利用 盒模型 栅格 浮动定位 各类框架 @media 设计 <b>响应式布局</b><br><br>
                       认真学习 原生DOM API 事件绑定 事件委托 事件冒泡 / 捕获<br>
                       并且运用 原生UI组件和 JSON 数据格式对 Ajax 接口进行封装，定制了 Time 时间函数 等工具<br><br>
                       熟练应用处理各种 对象 集合 数组 字符串 编码 RegExp 正则表达式 并封装成函数 解决实际问题<br>
                       主要依靠 <b>扎实的基本功</b></p></dd>
                <dt><h3><i class="fa fa-flask" aria-hidden="true"></i> 框架  &#38; 工具</h3></dt>
                    <dd><p>善于发现各种库 / 框架<br>
                       熟练运用 jQuery 进行定制 扩展 事件操作 Class 属性 Ajax 请求<br>
                       使用 Font Awesome 添加图标和动态堆叠效果<br>
                       使用 Purecss、 Bootstrap 布局</p></dd>
                <dt><h3><i class="fa fa-refresh" aria-hidden="true"></i> 后端语言</h3></dt>
                    <dd><p>掌握 Python 基础 @decorator 装饰器 pyinstaller 打包可执行文件 beautifulsoup4 网页解析 easygui 图形用户界面<br>
                       使用 PIP 或 Easy Install 管理模块<br>
                       了解 HTTP（1.x / 2）、 TCP/IP、 WebSocket 等协议<br>
                       实现 有道翻译API、TS 视频文件下载/合并、网络爬虫自动抓取图片、网页编码 \ 转译等项目<br>
                       </p></dd>
                <dt><h3>新技术 &#38; 其他</h3></dt>
                    <dd><p>学习了解 ES6 并经常使用类似 集合 Map 类型，const 不可变量 模板字符串 默认参数等 <br>
                       运用 HTML5 audio video 新标签，并学会使用文档编辑 拖拽控制<br>
                       运用 CSS3 新特性 对布局 字体 背景 颜色实现更加精确的掌控<br>
                       日常会使用 Git 分布式控制版本 Atom 编译器 MarkDown 记录笔记与分享工具<br>
                       精通 Adobe illustrator / Photoshop</p></dd>
                </dl>
            <hr></div>
        </div>`
    $('.cont').append(contact)
    $('.cont').append(resume)
}
// 简历
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
                    <input  id="id-comment-input" type="text" value="匿名" placeholder="昵称" maxlength="10" required>
                    <button id="id-comment-put" class="pure-button">提交评论</button>
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
var music = function(button,url) {
    $('head').prepend(`
        <audio id="id-BGM" src=${url} autoplay="autoplay"></audio>`)
    // 添加 BGM
    $(button).on('click', function(event){
        var music = document.querySelector('#id-BGM')
        var bo = $('#id-player')
        if (bo.hasClass("fa-pause")) {
            music.pause()
            bo.removeClass( "fa-pause" )
            bo.addClass( "fa-play" )
        } else if (bo.hasClass("fa-play" )) {
            music.play()
            bo.removeClass( "fa-play" )
            bo.addClass( "fa-pause" )
        }
    })
    // 绑定 BGM 开关
}
// 背景音乐
var __init__ = function() {
    tanChuang('你好，是否知道个人档案密钥','1207')
    resume()
    init_comments()
    comment(comments, id)
    music('#id-home',"ku/BGM.mp3")
    log('想招纳我来工作？请发送邮件到 c@bigc.cc','\nʅ（´◔౪◔）ʃ')
}

__init__()
