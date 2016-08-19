// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// Git Repo: https://github.com/gauderkd/DigitizingBach
// file 6: Hotkeys
//
//
////////////////////////
// Keypress Listeners //
////////////////////////
//
// This set of code manages the 'hotkeys',
// adding functionality for quick navigation through
// the application without needing to click anything
//
////////////////////////
//
window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};
//
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function scrollPerformer(direction) {
    currentPerformer = menuPERFORMER.substring(1);
    currentIndex = masterList.indexOf(currentPerformer);
    if (direction == "fwd") {
        if ( currentIndex == (masterList.length - 1) ) {
            newPerformer = masterList[0];
        } else {
            newPerformer = masterList[currentIndex+1];
        }
        // Make sure you're not in a blank spot
        if (newPerformer.length <= 0) {
            newPerformer = masterList[currentIndex+2];
        }
    } else if (direction == "rev") {
        if ( currentIndex == 0 ) {
            newPerformer = masterList[masterList.length-1];
        } else {
            newPerformer = masterList[currentIndex-1];
        }
        // Make sure you're not in a blank spot
        if (newPerformer.length <= 0) {
            newPerformer = masterList[currentIndex-2];
        }
    } else {
        // Repeat of forward
        if ( currentIndex == (masterList.length - 1) ) {
            newPerformer = masterList[0];
        } else {
            newPerformer = masterList[currentIndex+1];
        }
        if (newPerformer.length <= 0) {
            newPerformer = masterList[currentIndex+2];
        }
    }
    menuPERFORMER = "c" + newPerformer;
}
//Keypress listeners
$(document).ready(function () {
    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
            case 189:
                if (key.ctrlKey) {
                    if (scoreLoadFlag == true) {
                    } else {
                        scoreLoadFlag = true;
                        list_of_pieces.forEach(function (value) {
                            button = eval(value);
                            gu
                            button.createScore();
                        });
                    }
                }
                break;

            case 219:
                scrollPerformer("rev");
                $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + menuPERFORMER).trigger(
                    "click");
                break;
            case 221:
                scrollPerformer("fwd");
                $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + menuPERFORMER).trigger(
                    "click");
                break;

            //# Hotkeys for Chroma
            case 192: //~ key = 0
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                }
                break;
            case 49: // 1 key = 1
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaDflat').trigger(
                        "click");
                }
                break;
            case 50: // 1 key = 1
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaD').trigger(
                        "click");
                }
                break;
            case 51:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaEflat').trigger(
                        "click");
                }
                break;
            case 52:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaE').trigger(
                        "click");
                }
                break;
            case 53:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaF').trigger(
                        "click");
                }
                break;
            case 54:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaGflat').trigger(
                        "click");
                }
                break;
            case 55:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaG').trigger(
                        "click");
                }
                break;
            case 56:
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaAflat').trigger(
                        "click");
                }
                break;
            case 57: //9 key = 9
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaA').trigger(
                        "click");
                }
                break;
            case 48: //0 key = 10
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaBflat').trigger(
                        "click");
                }
                break;
            case 189: //- key = 11
                if (!$('#pieceNum').hasClass('pNumSelect')) {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                }
                break;
            //}
            //z,x,c,v Hotkeys for Form/Key
            case 90:
                $('#fugue .lvlONEBUTTON').trigger("click");
                $('#minor .lvlTHREEBUTTON').trigger("click");
                break;
            case 88:
                $('#prelude .lvlONEBUTTON').trigger("click");
                $('#minor .lvlTHREEBUTTON').trigger("click");
                break;
            case 67:
                $('#fugue .lvlONEBUTTON').trigger("click");
                $('#major .lvlTHREEBUTTON').trigger("click");
                break;
            case 86:
                $('#prelude .lvlONEBUTTON').trigger("click");
                $('#major .lvlTHREEBUTTON').trigger("click");
                break;


            // Data scrolling hotkeys [ , ]
            case 219: // open bracket "["
                $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + nextPerformer).trigger("click");
                break;
            case 221: // close bracket "]"
                $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + prevPerformer).trigger("click");
                break;



            // Score Scrolling hotkeys < , >
            case 190:
                if ($('.bartokTAB').hasClass(
                        'scoretabselected')) {
                    $('.bischoffTAB').trigger("click");
                    break;
                }
                if ($('.bischoffTAB').hasClass(
                        'scoretabselected')) {
                    $('.czernyTAB').trigger("click");
                    break;
                }
                if ($('.czernyTAB').hasClass('scoretabselected')) {
                    $('.hughesTAB').trigger("click");
                    break;
                }
                if ($('.hughesTAB').hasClass('scoretabselected')) {
                    $('.mugelliniTAB').trigger("click");
                    break;
                }
                if ($('.mugelliniTAB').hasClass(
                        'scoretabselected')) {
                    $('.palmerTAB').trigger("click");
                    break;
                }
                if ($('.palmerTAB').hasClass('scoretabselected')) {
                    $('.bartokTAB').trigger("click");
                    break;
                } else {
                    break;
                }
            case 188:
                if ($('.bartokTAB').hasClass(
                        'scoretabselected')) {
                    $('.palmerTAB').trigger("click");
                    break;
                }
                if ($('.bischoffTAB').hasClass(
                        'scoretabselected')) {
                    $('.bartokTAB').trigger("click");
                    break;
                }
                //if ( $('.busoniTAB').hasClass('scoretabselected') ) {
                //$('.bischoffTAB').trigger("click");
                //break;
                //} 
                if ($('.czernyTAB').hasClass('scoretabselected')) {
                    $('.bischoffTAB').trigger("click");
                    break;
                }
                if ($('.hughesTAB').hasClass('scoretabselected')) {
                    $('.czernyTAB').trigger("click");
                    break;
                }
                if ($('.mugelliniTAB').hasClass(
                        'scoretabselected')) {
                    $('.hughesTAB').trigger("click");
                    break;
                }
                if ($('.palmerTAB').hasClass('scoretabselected')) {
                    $('.mugelliniTAB').trigger("click");
                    break;
                } else {
                    break;
                }
            case 13:
                if ($('#pieceNum').val() === "1") {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                    menuKEY = "cMajor";
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "2") {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "3") {
                    $('#regularKeyboard .chromaDflat').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "4") {
                    $('#regularKeyboard .chromaDflat').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "5") {
                    $('#regularKeyboard .chromaD').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "6") {
                    $('#regularKeyboard .chromaD').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "7") {
                    $('#regularKeyboard .chromaEflat').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "8") {
                    $('#regularKeyboard .chromaEflat').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "9") {
                    $('#regularKeyboard .chromaE').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "10") {
                    $('#regularKeyboard .chromaE').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "11") {
                    $('#regularKeyboard .chromaF').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "12") {
                    $('#regularKeyboard .chromaF').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "13") {
                    $('#regularKeyboard .chromaGflat').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "14") {
                    $('#regularKeyboard .chromaGflat').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "15") {
                    $('#regularKeyboard .chromaG').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "16") {
                    $('#regularKeyboard .chromaG').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "17") {
                    $('#regularKeyboard .chromaAflat').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "18") {
                    $('#regularKeyboard .chromaAflat').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "19") {
                    $('#regularKeyboard .chromaA').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "20") {
                    $('#regularKeyboard .chromaA').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "21") {
                    $('#regularKeyboard .chromaBflat').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "22") {
                    $('#regularKeyboard .chromaBflat').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "23") {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
                if ($('#pieceNum').val() === "24") {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                    $('#major .lvlTHREEBUTTON').trigger("click");
                    menuFunction();
                    dataMenuFunction();
                    $('#pieceNum').val('');
                    $('#pieceNum').removeClass('pNumSelect');
                    break;
                }
            // Space bar pressed
            case 32:
                // If the app is in the main tempi mode, don't do anything...
                if (appMODE == "mainMODE") {
                } else {
                    $('.stopPlay').trigger("click");
                }
                break;
            // #1 key pressed
            //PRESS P
            case 80:
                if (menuFORM === "cPrelude") {
                    $('#prelude .lvlONEBUTTON').trigger("click");
                } else if (menuFORM === "cFugue") {
                    $('#fugue .lvlONEBUTTON').trigger("click");
                } else {
                    $('#fugue .lvlONEBUTTON').trigger("click");
                }
                break;
            //PRESS M
            case 77:
                if (menuKEY === "cMajor") {
                    $('#major .lvlTHREEBUTTON').trigger("click");
                } else if (menuKEY === "cMinor") {
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                } else {
                    $('#minor .lvlTHREEBUTTON').trigger("click");
                }
                break;
            //case 66:
            //$('.bachBUTTON').trigger("click");
            //break;
            // #c key pressed
            //case 67:
            //$('.chopinBUTTON').trigger("click");
            //break;
            //              
            // A key pressed
            case 65:
                $('#regularKeyboard .chromaC').trigger("click");
                break;
            // W key pressed
            case 87:
                $('#regularKeyboard .chromaDflat').trigger(
                    "click");
                break;
            // S key pressed
            case 83:
                $('#regularKeyboard .chromaD').trigger("click");
                break;
            // E key pressed
            case 69:
                $('#regularKeyboard .chromaEflat').trigger(
                    "click");
                break;
            // D key pressed
            case 68:
                $('#regularKeyboard .chromaE').trigger("click");
                break;
            // F key pressed
            case 70:
                $('#regularKeyboard .chromaF').trigger("click");
                break;
            // T key pressed
            case 84:
                $('#regularKeyboard .chromaGflat').trigger(
                    "click");
                break;
            // G key pressed
            case 71:
                $('#regularKeyboard .chromaG').trigger("click");
                break;
            // Y key pressed
            case 89:
                $('#regularKeyboard .chromaAflat').trigger(
                    "click");
                break;
            // H key pressed
            case 72:
                $('#regularKeyboard .chromaA').trigger("click");
                break;
            // U key pressed
            case 85:
                $('#regularKeyboard .chromaBflat').trigger(
                    "click");
                break;
            // J key pressed
            case 74:
                $('#regularKeyboard .chromaB').trigger("click");
                break;
            case 16:
                $('.dataToggle').trigger("click");
                $('.tooltipboxA').hide();
                $('.tooltipboxT').hide();
                break;
            //
            //RIGHT ARROW                
            case 39:
                if (menuCHROMA === "c0") {
                    $('#regularKeyboard .chromaDflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c1") {
                    $('#regularKeyboard .chromaD').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c2") {
                    $('#regularKeyboard .chromaEflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c3") {
                    $('#regularKeyboard .chromaE').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c4") {
                    $('#regularKeyboard .chromaF').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c5") {
                    $('#regularKeyboard .chromaGflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c6") {
                    $('#regularKeyboard .chromaG').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c7") {
                    $('#regularKeyboard .chromaAflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c8") {
                    $('#regularKeyboard .chromaA').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c9") {
                    $('#regularKeyboard .chromaBflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c10") {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c11") {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                    break;
                } else {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                    break;
                }
                break;
            //
            //LEFT ARROW
            case 37:
                if (menuCHROMA === "c2") {
                    $('#regularKeyboard .chromaDflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c3") {
                    $('#regularKeyboard .chromaD').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c4") {
                    $('#regularKeyboard .chromaEflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c5") {
                    $('#regularKeyboard .chromaE').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c6") {
                    $('#regularKeyboard .chromaF').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c7") {
                    $('#regularKeyboard .chromaGflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c8") {
                    $('#regularKeyboard .chromaG').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c9") {
                    $('#regularKeyboard .chromaAflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c10") {
                    $('#regularKeyboard .chromaA').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c11") {
                    $('#regularKeyboard .chromaBflat').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c0") {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                    break;
                }
                if (menuCHROMA === "c1") {
                    $('#regularKeyboard .chromaC').trigger(
                        "click");
                    break;
                } else {
                    $('#regularKeyboard .chromaB').trigger(
                        "click");
                    break;
                }
        }
    });
});