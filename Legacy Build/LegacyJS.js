/**
 * Created by kyle on 2016-06-06.
 */
//Kreon font injector
WebFontConfig = {
    google: {
        families: ['Kreon::latin']
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
//
//
//First Level: prelude or Fugue
var menu = function () {
    //When you over over items...
    $('.lvl1BUTTON').hover(function () {
        $(this).addClass('selectedNoS'); //Add hover effect
    }, function () {
        $(this).removeClass('selectedNoS'); //remove hover effect when you leave
    });
    //When you click items...
    $('.lvl1BUTTON').click(function () {
        $('.keyboard').hide(); //Show keyboard
        $(this).siblings().show(); //Hide other keyboard
        $('.lvl1BUTTON').removeClass('clicked'); //remove others from being clicked
        $(this).addClass('clicked'); //Show you're clicked
        $('.majItem, .minItem').hide();
        $('#defaultKeyboard').hide();
    });
};
//
//Second Level Keyboard Menu
var keyboard = function () {
    //When Hovering....
    $('.key, .blackkey').hover(function () {
        if ($(this).next().length > 0) { //If there is anything "in" (technically next to) the key, toggle the hover
            $(this).toggleClass('selectedNoS');
        } //Else do nothing
    });
    //When Clicking....
    $('.key, .blackkey').click(function () {
        if ($(this).next().length > 0) { //If the button has anything in it... Then allow users to click
            $('.key, .blackkey').removeClass('clickedKeyboard');
            $(this).addClass('clickedKeyboard');
            $('.majItem, .minItem').removeClass('clicked');

        }
    });
};
//
//
//Third Level: Major/Minor controllers
var majmin = function () {
    //When you hover over...
    $('.majItem, .minItem').hover(

        function () {
            $(this).addClass('selectedNoS');
        }, function () {
            $(this).removeClass('selectedNoS');
        });
    //When you click...
    $('.majItem, .minItem').click(

        function () {
            if ($(this).hasClass('clicked') === true) {

            } else {
                $('.defaultMM').hide()
                $('.majItem, .minItem').removeClass('clicked');
                $(this).addClass('clicked');
                $('.content').hide();
                $('.defaultMM').hide();
                $(this).siblings().show();
                $('.button, .data').removeClass('btnclicked').addClass('fade');
            }
        });
};
//
//STOP EVERYTHING
var stop = function () {
    $('#stopALL').hover(function () {
        $(this).toggleClass('selectedNoS');
    });
    $('#stopALL').click(function () {
        $('.button').removeClass('btnclicked');
        $('.button').addClass('fade');
        $('.caption').fadeOut(250);
        aPiece = document.getElementById('audio')
        aPiece.pause();
        aPiece.currentTime = 0;
        $.each($('.data'), function () {
            $(this).addClass('fade');
            $(this).removeClass('btnclicked');
        });
        $('.score').fadeOut(250);
        $('.content').hide();
        $('.defaultMM').show();
        $('.majItem, .minItem').removeClass('clicked');
        $('.majItem, .minItem').hide();
        $('.key, .blackkey').removeClass('clickedKeyboard');
        $('.keyboard').hide();
        $('.dataPlot').hide();
        $('#defaultPlot').show();
        $('#defaultKeyboard').show();
        $('.lvl1BUTTON').removeClass('clicked');
        var offset = 341;
        $('.d1').animate({top: (offset) +"px"});
        $('.d2').animate({top: (offset) +"px"});
        $('.d3').animate({top: (offset) +"px"});
        $('.d4').animate({top: (offset) +"px"});
        $('.d5').animate({top: (offset) +"px"});
        $('.d6').animate({top: (offset) +"px"});
        $('.d7').animate({top: (offset) +"px"});
        $('.d8').animate({top: (offset) +"px"});
        $('.d9').animate({top: (offset) +"px"});
        $('.d10').animate({top: (offset) +"px"});
        $('.d11').animate({top: (offset) +"px"});
        $('.d12').animate({top: (offset) +"px"});
        $('.d13').animate({top: (offset) +"px"});
    });
};


//
//
//
//Function Injection
$(document).ready(keyboard);
$(document).ready(stop);
$(document).ready(menu);
$(document).ready(majmin);
//


//
//
//New Album + Data effects
$(document).ready(function () {
    //Hewitt
    $('.linkHewitt').hover(function () {
        $('.linkHewitt').toggleClass('fadeIN');
    });
    $('.linkHewitt').click(function () {
        clearTimeout(tout);
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkHewitt').addClass('fade');
            $('.linkHewitt').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkHewitt').removeClass('fade');
            $('.linkHewitt').addClass('btnclicked');
        }
    });
    //Martins
    $('.linkMartins').hover(function () {
        $('.linkMartins').toggleClass('fadeIN');
    });
    $('.linkMartins').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkMartins').addClass('fade');
            $('.linkMartins').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkMartins').removeClass('fade');
            $('.linkMartins').addClass('btnclicked');
        }
    });
    //Fischer
    $('.linkFischer').hover(function () {
        $('.linkFischer').toggleClass('fadeIN');
    });
    $('.linkFischer').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkFischer').addClass('fade');
            $('.linkFischer').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkFischer').removeClass('fade');
            $('.linkFischer').addClass('btnclicked');
        }
    });
    //Gould
    $('.linkGould').hover(function () {
        $('.linkGould').toggleClass('fadeIN');
    });
    $('.linkGould').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkGould').addClass('fade');
            $('.linkGould').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkGould').removeClass('fade');
            $('.linkGould').addClass('btnclicked');
        }
    });
    //Gulda
    $('.linkGulda').hover(function () {
        $('.linkGulda').toggleClass('fadeIN');
    });
    $('.linkGulda').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkGulda').addClass('fade');
            $('.linkGulda').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkGulda').removeClass('fade');
            $('.linkGulda').addClass('btnclicked');
        }
    });
    //Richter
    $('.linkRichter').hover(function () {
        $('.linkRichter').toggleClass('fadeIN');
    });
    $('.linkRichter').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkRichter').addClass('fade');
            $('.linkRichter').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkRichter').removeClass('fade');
            $('.linkRichter').addClass('btnclicked');
        }
    });
    //Demus
    $('.linkDemus').hover(function () {
        $('.linkDemus').toggleClass('fadeIN');
    });
    $('.linkDemus').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkDemus').addClass('fade');
            $('.linkDemus').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkDemus').removeClass('fade');
            $('.linkDemus').addClass('btnclicked');
        }
    });
    //Hamilton
    $('.linkHamilton').hover(function () {
        $('.linkHamilton').toggleClass('fadeIN');
    });
    $('.linkHamilton').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkHamilton').addClass('fade');
            $('.linkHamilton').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkHamilton').removeClass('fade');
            $('.linkHamilton').addClass('btnclicked');
        }
    });
    //Galling
    $('.linkGalling').hover(function () {
        $('.linkGalling').toggleClass('fadeIN');
    });
    $('.linkGalling').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkGalling').addClass('fade');
            $('.linkGalling').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkGalling').removeClass('fade');
            $('.linkGalling').addClass('btnclicked');
        }
    });
    //Tureck
    $('.linkTureck').hover(function () {
        $('.linkTureck').toggleClass('fadeIN');
    });
    $('.linkTureck').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkTureck').addClass('fade');
            $('.linkTureck').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkTureck').removeClass('fade');
            $('.linkTureck').addClass('btnclicked');
        }
    });
    //Landowska
    $('.linkLandowska').hover(function () {
        $('.linkLandowska').toggleClass('fadeIN');
    });
    $('.linkLandowska').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkLandowska').addClass('fade');
            $('.linkLandowska').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkLandowska').removeClass('fade');
            $('.linkLandowska').addClass('btnclicked');
        }
    });
    //Kirkpatrick
    $('.linkKirkpatrick').hover(function () {
        $('.linkKirkpatrick').toggleClass('fadeIN');
    });
    $('.linkKirkpatrick').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkKirkpatrick').addClass('fade');
            $('.linkKirkpatrick').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkKirkpatrick').removeClass('fade');
            $('.linkKirkpatrick').addClass('btnclicked');
        }
    });
    //Leonhardt
    $('.linkLeonhardt').hover(function () {
        $('.linkLeonhardt').toggleClass('fadeIN');
    });
    $('.linkLeonhardt').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkLeonhardt').addClass('fade');
            $('.linkLeonhardt').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkLeonhardt').removeClass('fade');
            $('.linkLeonhardt').addClass('btnclicked');
        }
    });//Newman
    $('.linkNewman').hover(function () {
        $('.linkNewman').toggleClass('fadeIN');
    });
    $('.linkNewman').click(function () {
        if ($(this).hasClass('btnclicked') === true) {
            $('.linkNewman').addClass('fade');
            $('.linkNewman').removeClass('btnclicked');
        } else {
            $('.button').addClass('fade');
            $('.button').removeClass('btnclicked');
            $('.data').addClass('fade');
            $('.data').removeClass('btnclicked');
            $('.linkNewman').removeClass('fade');
            $('.linkNewman').addClass('btnclicked');
        }
    });
});
//
//
//
//
//
//
//
//
//
//
//DEFAULT CANVAS
//
//
//Clear Canvas
//Establish connection to canvas into ctx
var c = document.getElementById("chartArea");
var ctx = c.getContext("2d");



//Set up empty step variable.
step = 0;

//Collect Data
data = [0,10,20,30,40,50,60,70,80,90,100]
//Set up bounds
lowData = Math.min.apply(Math, data);
highData = Math.max.apply(Math, data);
rangeData = highData - lowData;
interData = rangeData / 10

//Draw 0 tick tick
ctx.moveTo(80, 345);
ctx.lineTo(75, 345);
ctx.moveTo(80, 345);

//Draw squiggle
squigSize = 4;
ctx.lineTo(80, 339);
ctx.lineTo(80 + squigSize, 334);
ctx.lineTo(80 - squigSize, 329);
ctx.lineTo(80, 324);
ctx.lineTo(80, 315);

//First number and tick
ctx.lineTo(75, 315);
ctx.moveTo(80, 315);
ctx.fillText(lowData, 50, 318);


//Draw sequential ticks
for (i = 0; i < 10; i++) {
    step = step + 30;
    ctx.lineTo(80, 315 - step);
    ctx.lineTo(75, 315 - step);
    ctx.fillText((lowData + interData * (i + 1)), 50, 318 - step);
    ctx.moveTo(80, 315 - step);

}

//Finally, stroke in the path we drew
ctx.strokeStyle = '#000000'
ctx.stroke();

$(document).ready(function () {
    $('.data').hover(
        function () {
            $(this).children( ".toolTipBox" ).show();
        },
        function () {
            $(this).children(".toolTipBox").hide();
        }

    );
})