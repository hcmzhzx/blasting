/**插入信息填写及品牌
 * @param id [插入位置id]
 * @param In [是否插入表单/布尔值]
 * @param bra [是否插入品牌/布尔值]
 */
function InfoBrand(id,Info,bra) {
    if(Info){
        var info = '<form id="perfect" class="alert">' +
            '<div class="mask"></div> ' +
            '<div class="content perfect">' +
            '<i class="flex center bls bls-cuo cuo"></i>' +
            '<h3 class="flex center title">您的信息不完整</h3>' +
            '<p class="flex center tis">立刻完善资料，让客户找到您</p>' +
            '<div class="flex center input">' +
            '<span class="flex centerv">姓名</span>' +
            '<input type="text" class="flexitem" placeholder="请输入姓名">' +
            '</div>' +
            '<div class="flex center input">' +
            '<span class="flex centerv">手机号</span>' +
            '<input type="tel" class="flexitem" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号">' +
            '</div>' +
            '<div class="flex centerv input brands">' +
            '<span class="flex centerv">品牌</span>' +
            '<input class="flexitem cenk" type="text" readonly="readonly" unselectable="on" onfocus="this.blur()" placeholder="请选择品牌">' +
            '<i class="flex smtxt"></i>' +
            '<i class="flex center bls bls-xia brand"></i>' +
            '</div>' +
            '<button class="flex center button">保存修改</button>' +
            '</div>' +
            '</form>';

        $(id).append(info);
    }

    if(bra){
        var brands = '<div id="brand" class="flexv dialog_box">' +
            '<div class="flex center brand-head">' +
            '<a href="javascript:;" class="bls bls-zjt"></a>' +
            '<h1 class="flexitem center" style="margin-left:-2rem;">选择品牌</h1>' +
            '</div>' +
            '<ul class="flexitemv mainbox company" style="padding-top:2rem"></ul>' +
            '<ul class="flexitemv lettrt">' +
            '<li class="flexitem center"><a href="#">#</a></li>' +
            '<li class="flexitem center"><a href="#A">A</a></li>' +
            '<li class="flexitem center"><a href="#B">B</a></li>' +
            '<li class="flexitem center"><a href="#C">C</a></li>' +
            '<li class="flexitem center"><a href="#D">D</a></li>' +
            '<li class="flexitem center"><a href="#E">E</a></li>' +
            '<li class="flexitem center"><a href="#F">F</a></li>' +
            '<li class="flexitem center"><a href="#G">G</a></li>' +
            '<li class="flexitem center"><a href="#H">H</a></li>' +
            '<li class="flexitem center"><a href="#I">I</a></li>' +
            '<li class="flexitem center"><a href="#J">J</a></li>' +
            '<li class="flexitem center"><a href="#K">K</a></li>' +
            '<li class="flexitem center"><a href="#L">L</a></li>' +
            '<li class="flexitem center"><a href="#M">M</a></li>' +
            '<li class="flexitem center"><a href="#N">N</a></li>' +
            '<li class="flexitem center"><a href="#O">O</a></li>' +
            '<li class="flexitem center"><a href="#P">P</a></li>' +
            '<li class="flexitem center"><a href="#Q">Q</a></li>' +
            '<li class="flexitem center"><a href="#R">R</a></li>' +
            '<li class="flexitem center"><a href="#S">S</a></li>' +
            '<li class="flexitem center"><a href="#T">T</a></li>' +
            '<li class="flexitem center"><a href="#U">U</a></li>' +
            '<li class="flexitem center"><a href="#V">V</a></li>' +
            '<li class="flexitem center"><a href="#W">W</a></li>' +
            '<li class="flexitem center"><a href="#X">X</a></li>' +
            '<li class="flexitem center"><a href="#Y">Y</a></li>' +
            '<li class="flexitem center"><a href="#Z">Z</a></li>' +
            '</ul>' +
            '</div>';

        $(id).append(brands);
    }

    //  品牌
    var brands = [
        {id: 1, title: '安利', pinyin: 'anli'},
        {id: 1, title: '安惠', pinyin: 'anhui'},
        {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
        {id: 1, title: '完美', pinyin: 'wanmei'}
    ];
    var char = '', charlist = [];
    var charTpl = [], listTpl = [];
    for (var k = 0; k < brands.length; k++) {
        var ch = brands[k].pinyin.substring(0, 1);
        if (char == ch) {
            charlist[char].push(brands[k]);
            listTpl.push('<div>' + brands[k].title + '</div>');
        } else {
            if (char != '') listTpl.push('</li>');
            char = ch;
            charlist[char] = [brands[k]];
            listTpl.push('<li id="' + char.toUpperCase() + '">');
            listTpl.push('<p>' + char.toUpperCase() + '</p>');
            listTpl.push('<div>' + brands[k].title + '</div>');
            charTpl.push('<li><a href="#' + char + '">' + char.toUpperCase() + '</a></li>');
        }
    }
    listTpl.push('</li>');
    $(".company").append(listTpl.join(''));
    //console.log(listTpl.join(''));
    //console.log(charTpl.join(''))

    //   选择
    $(".brands").click(function () {
        $("#brand").addClass('show');
        $("#brand ul li div").click(function () {
            $(".cenk").val($(this).text());
            $("#brand").removeClass('show');
        });
        $('#brand .bls-zjt').click(function () {
            $("#brand").removeClass('show');
        })
    });
    //	关闭
    $(".cuo").click(function(){
        $(".alert").hide();
    });
}

/**分页
 * @param outerBox [外部容器]
 * @param innerBox [列表容器]
 */
function pages(outerBox,innerBox){
    var loadBtn = false,page = 1
    $(outerBox).scroll(function() {
        var h = Math.ceil($(this).scrollTop()),lh = $(this).height(),ih = $(innerBox).height();
        if((h + lh) >= ih) {
            if(loadBtn) return;
            loadBtn = true;
            page++;
            var loadTpl = '<div id="more" class="flex center"><i></i><span>正在加载..</span></div>';
            $(loadTpl).appendTo($(innerBox));
            setTimeout(function () {
                //$(innerBox).append($(".reg-container>li").clone(2));
                $('#more').remove();
                loadBtn = false;
            },2000)
        }
    });
}