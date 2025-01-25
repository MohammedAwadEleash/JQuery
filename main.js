




 


 $(document).ready(function()
{



    //Header Style App

$("ul li a").on('click',function(){



    $(this).addClass("active").parent().siblings().find('a').removeClass("active");

    


});


/// Window App

var homeOffset=$(".home").offset().top;

console.log(homeOffset)
$(window).scroll(function()
{



    var windowScroll=$(this).scrollTop();

    if(windowScroll>200)

        {


         //   var windowScroll =$(this).scrollTop();
            $("header").addClass("changeHeader");


        }

        else

        {
;
            $("header").removeClass("changeHeader");
            

        }



});



//Dynamic Taps
// $("ul li a").click(function(){





//    var myId=( $(this).attr("id"));   // id value : home about  portoflio contact


//    $("body    section").hide()

//    //or:
// //    $('.'+myId).siblings().not("header").hide();
// $("."+myId).fadeIn(2000);




// })




$(".tabs button").click(function()

{

var myClass=($(this).attr("class"));


if(myClass=="all")


    $(".images img").slideDown(2000);


    else
    {

$(".images img").fadeOut();


$(".images ."+myClass).fadeIn(2000);    //.images .image1or2or3

///or:
// $(".images").children().fadeOut();
// $(".images").find("."+myClass).fadeIn(2000);


    }

      
})




$("header a").click(function(){



    var headerHeight=$("header").height();
var id=$(this).attr("id");


    var topOffset=$("."+id).offset().top;

    topOffset-=headerHeight

    $("html").animate
        (
            {
                
                scrollTop:topOffset 



            })


})

$(window).scroll(function(){


if($(window).scrollTop()>200)

    {

        $(".scrollTop").show();
    }

    else
    {
        $(".scrollTop").hide();

    }

    {



    }



});





$(".scrollTop").click(function()

{


    $("html").animate
    (
        {
            
            scrollTop:0 



        },1000)
});


$("textarea").keyup(function(e)

{



if(e.target.value.length>=100)

    {

e.target.value=e.target.value.substr(0,100);
    }
    console.log(e.target.value.length);



});
}) ;