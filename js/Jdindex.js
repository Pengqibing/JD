/**
 * Created by ±ù on 2017-1-10.
 */
$(function () {
    $("#j_event #j_event_lk").css({"display":"block","width":"100%","height":"80px"});
    $("#j_event #j_event_close").click(function () {
        $("#j_event").css({"display":"none"});
    })

    $("#shortcut").find("dorpdown").mouseenter(function () {
        $(this).toggleClass("hover");
    })

    $(".cate_menu_item").mouseenter(function () {
        $(this).addClass("cate_menu_item_on").css({"background-color":"#999395"})
            .siblings().removeClass("cate_menu_item_on").css({"background-color":"#6e6568"});
        /*$(".cate_pop").css({"display":"block"})
            .find(".cate_part").eq($(this).index()).css({"display":"block"}).siblings().css({"display":"none"});*/

    })

})
