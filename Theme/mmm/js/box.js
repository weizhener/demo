
//function $(id) {
//    return typeof id === 'string' ? document.getElementById(id) : id;
//}

window.onload=function(){
  // 标签的索引
  var index=0;
  var timer=null;

  var lis=$('notice-tit').getElementsByTagName('li'),
      divs=$('notice-con').getElementsByTagName('div');

  var tg = $("#tg");
  var js = $("#js");
  if(lis.length!=divs.length) return;

  // 遍历所有的页签
  //for(var i=0;i<lis.length;i++){
  //  lis[i].id=i;
  js.onclick = function () {
      alert("aaa");
      // 用that这个变量来引用当前滑过的li
      var that=this;
      // 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
      if(timer){
        clearTimeout(timer);
        timer=null;
      }
      // 延迟半秒执行
     timer=window.setTimeout(function(){
        for(var j=0;j<lis.length;j++){
          lis[j].className='';
          divs[j].style.display='none';
        }
        lis[that.id].className='select';
        divs[that.id].style.display='block';
      },0);
    }
 // }
}


function js()
{
    //alert("a");
    // 标签的索引
    var index = 0;
    var timer = null;

   // var lis = document.getElementById("notice-tit").getElementsByTagName('li');
   // var   divs = document.getElementById("notice-con").getElementsByTagName('div');
   //// alert(lis.length);
   //// if (lis.length != divs.length) return;

   //   // 遍历所有的页签

  
   //     // 用that这个变量来引用当前滑过的li
   //     var that = this;
   //     // 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
   //     if (timer) {
   //         clearTimeout(timer);
   //         timer = null;
   //     }
   //     // 延迟半秒执行
   //     timer = window.setTimeout(function () {
          
            $(".mod1").css("display", "none");
            //lis[that.id].className = 'select';
            //divs[that.id].style.display = 'block';
            $(".mod2").css("display", "block");
            $("#js").attr("class", "select");
            $("#tg").attr("class", "");
       // }, 0);
}

function tg() {
    // 标签的索引
    var index = 0;
    var timer = null;

    //var lis = document.getElementById("notice-tit").getElementsByTagName('li');
    //var divs = document.getElementById("notice-con").getElementsByTagName('div');
    //// alert(lis.length);
    //if (lis.length != divs.length) return;

    //// 遍历所有的页签


    //// 用that这个变量来引用当前滑过的li
    //var that = lis[1];
    //// 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
    //if (timer) {
    //    clearTimeout(timer);
    //    timer = null;
    //}
    //// 延迟半秒执行
    //timer = window.setTimeout(function () {
       
            //divs[j].style.display = 'none';
        //lis[that].className = 'select';
        // document.getElementsByClassName('mod1').style.display = 'block';
            $(".mod1").css("display", "block");
            $(".mod2").css("display", "none");
        document.getElementById('js').className = '';
        $("#tg").attr("class", "select");
       
    //}, 0);
}


function tgqux(val,type)
{
    layer.confirm("您确定要退出队列么？",
    {
        btn: ['是的', '不是，点错了'], //按钮
    }, function () {
        $.post("/usercenter/home/qux", { id: val,type:type }, function (data) {
            if(data.result=="ok")
            {
                layer.msg("你已成功退出队列！");
            } else {
                layer.msg(data.msg);
            }
        })
    })
    //$.post("/usercenter/home/qux", {}, function (data) {
    //})
}

function queb()
{
    layer.confirm("您确定拨款了么？",
        {
            btn: ['是的', '不是，点错了'], //按钮
        }, function () {
            $.post("/usercenter/home/queb", { id: val, type: type }, function (data) {
                if (data.result == "ok") {
                    layer.msg("确认成功！");
                } else {
                    layer.msg(data.msg);
                }
            })
        })
}