/**
 * addcart 将商品加入购物车
 * @goods_id  商品id
 * @num   商品数量
 * @form_id  商品详情页所在的 form表单
 * @to_catr 加入购物车后再跳转到 购物车页面 默认不跳转 1 为跳转
 */
//
// var clickState = 0;//初始化点击状态
//
// $(function(){
//     $('#carts').click(function(){
//         var aa=$('#carts').css("background-color","#dddddc");
//         if( clickState == 1){
//             //如果状态为1就什么都不做
//         }else{
//
//             clickState = 1;  //如果状态不是1  则添加状态 1
//             aa;
//             setTimeout(addAjax,2000);
//         }
//     });
// });

function addAjax(to_catr) {
    // var bb = $('#carts').css("background-color", "#ff873e");
    // 如果有商品规格 说明是商品详情页提交
    if ($("#buy_form").length > 0) {

        $.ajax({
            type: "POST",
            url: "../../../../../Carts/ajax_add",
            data: $('#buy_form').serialize(),// 你的formid 搜索表单 序列化提交
            dataType: 'json',
            success: function (data) {
                if (data.status == -9 || data.status == -2 || data.status == -3 || data.status == -4 || data.status == -5) {
                    $('.my_modal_con').html(data.msg);
                    $('.my_modal').fadeIn(300);
                    $('.my_modal_bg').fadeIn(300);
                    return false;
                }
                if (data.status == -101) {
                    alert(data.msg);
                    location.href = '../../../../../Customer/Login';
                    return false;
                }
                // 加入购物车后再跳转到 购物车页面
                if (to_catr == 1)  //直接购买
                {
                    location.href = "../../../../../Carts/index";
                } else {
                    alert(data.msg);
                }
            }
        });
        // clickState = 0;
        // bb;
    }
}