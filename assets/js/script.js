// $('.btn-primary')
function myfunction(){
    alert('Hello');
}

$(document).ready(function(){
// myfunction();
    var card = '.card';
    var speed = 1000;
    $('.btn-primary').click(function(){
        console.log('clicked in console');
        // alert('CLicked');
        // $('.card').hide();
        // $('.card').show();
        // $('.card').toggle();
         $(card).slideToggle(speed);
    });

    $('.btn-primary').mouseover(function(){
        console.log('clicked in console');
        // alert('CLicked');
        // $('.card').hide();
        // $('.card').show();
        // $('.card').toggle();
    });

    

});
// 2nd start
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});
// 2nd end

// 3rd start

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeIn();
//         $("#div2").fadeIn("slow");
//         $("#div4").fadeIn(3000);
        
//     });
// });

// 3rd end

// 4th start

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

// 4th end
