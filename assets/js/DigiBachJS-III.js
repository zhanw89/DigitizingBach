// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// Git Repo: https://github.com/gauderkd/DigitizingBach
// file 5: Code for everything else (functionality, html sketchboard, etc)
//
// As this is an unwieldly file, there are some key terms for the different sections you can search for
// to navigate quickly.
//
// s_MenuFunction
// s_MenuControl
// s_MenuVisuals
// s_FXActivator
// s_PerformerButton
// s_HTMLGraph
//
//////////////////////////////////////////////
//
/////////////////////////////
// Data Menu Functionality //
/////////////////////////////
//
// s_MenuFunction
//
// Activates all the objects previously defined 
//
//////////////////////////////
//
var scoreActivater = function () {
    list_of_pieces.forEach(function (value) {
        button = eval(value);
        button.insertAAxis();
        button.insertTAxis();
        button.putinNote();
        if (loadOpti == "OFF") {
            button.createScore();
        } else {
        }
        ;
    });
};
//Activating file
var buttonActivater = function () {
    list_of_files.forEach(function (value) {
        button = eval(value);
        if (appMODE == "demoMODE") {
        } else {
            button.initialize();
        }
        button.dataInitialize();
        button.autoEnable();
        button.toolTIPS();
        button.toolTIPSFX();
        button.play();
        button.fX();
    });
    list_of_OFFfiles.forEach(function (value) {
        button = eval(value);
        button.dataInitialize();
        button.toolTIPS();
        button.toolTIPSFX();
    });
};
$(document).ready(scoreActivater);
$(document).ready(buttonActivater);
var list_of_keys = ["C", "Dflat", "D", "Eflat", "E", "F", "Gflat", "G", "Aflat",
    "A", "Bflat", "B"
];

//
/////////////////////////////
// Data Menu Functionality //
/////////////////////////////
//
// s_MenuFunction
//
// This sets up all of the functionality of the menu, whose main role is
// to change global variables and trigger the "datamenuFunction();" and
// "menuFunciton();" scripts. There is also code to manage changes in the
// data points of the plots, change the data point shown and moving it 
// vertically based on hidden data values attatched to the point.
//
//////////////////////////////
//
var dataMenuFunction = function () {
    $('.attackAxis').hide();
    $('.tempoAxis').hide();
    $('#defaultAttackaxis').hide();
    $('#defaultTempoaxis').hide();
    var axislabel = '';
    if (currentdataType === "tempoData") {
        axislabel = "_aAxis";
        $('#defaultTempoaxis').show();
    }
    if (currentdataType === "attackData") {
        axislabel = "_tAxis";
        $('#defaultAttackaxis').show();
    } else {
        axislabel = "_aAxis";
        $('#defaultTempoaxis').show();
    }
    var currentAAxis = menuPIECE + menuFORM + menuCHROMA + menuKEY +
        axislabel;
    $('.' + currentAAxis).show();
    for (i = 1; i < 22; i++) {
        diData = $('.d' + i + ' .' + menuPIECE + '.' + menuFORM + '.' +
            menuCHROMA + '.' + menuKEY + ' .' + "actualData").text();
        diattackData = $('.d' + i + ' .' + menuPIECE + '.' + menuFORM + '.' +
            menuCHROMA + '.' + menuKEY + ' .' + "attackData").text();
        if (quickPerformer === true) {
            $('.noData').show();
        } else {
            if (diData.length === 0) {
                $('.d' + i + ' .noData').show();
            }
            if (diData.length > 0) {
                $('.d' + i + ' .noData').hide();
            }
        }
        if (currentdataType === "tempoData") {
            $('.d' + i).animate({
                top: (-((diData / 160) * 300)) + "px"
            }, {
                queue: false
            });
        }
        if (currentdataType === "attackData") {
            $('.d' + i).animate({
                top: (-((diattackData / 13) * 300)) + "px"
            }, {
                queue: false
            });
        }
    }
};
//
///////////////////
// Menu Function //
///////////////////
//
// s_MenuFunction
//
// This function uses global parameters to hide and show the selected elements.
// It's the crux of the object creation and menu
//
////////////////////
//
var listOfActivated = [];
var menuFunction = function () {
    // Optimization
    // Bach_WTC1_Prelude_0_Minor_SCORE
    if (optiFORM === "default") {
    } else if (optiCHROMA === "default") {
    } else if (optiKEY === "default") {
    } else if (loadOpti == "OFF") {

    } else {
        // SCORES
        var currentScoreName = "Bach_WTC1_" + optiFORM + "_" + optiCHROMA + "_" + optiKEY + "_SCORE";
        var evalCurrentScoreName = eval(currentScoreName);
        var listActiveLength = listOfActivated.length;
        // Iterate across already-added scores
        var scoreFlag = "no";
        for (i = 0; i < listActiveLength; i++) {
            var thisScoreName = listOfActivated[i];
            if (evalCurrentScoreName === thisScoreName) {
                scoreFlag = "yes";
            } else {
            }
        }
        // If flag was found, do nothing
        if (scoreFlag === "yes") {
        } else { // else, add to the list and initiate score
            listOfActivated.push(evalCurrentScoreName);
            evalCurrentScoreName.createScore();
        }
        //
        // BUTTONS AND DATA
        // Bach_WTC1_Demus_Prelude_0_Major
        //var currentObjectName = "Bach_WTC1_" + optiFORM + "_" + optiCHROMA + "_" + optiKEY;
        //var currentObjectName = "Bach_WTC1_Demus_Prelude_0_Major";
        //var evalCurrObject = eval(currentObjectName);


    }
    // Rest of the Function
    $('.button').hide();
    $('.data').hide();
    $('.score').hide();
    $('.scoreNote').hide();
    $('.tab').fadeIn(250);
    $('.scatterdata').removeClass('scatterClicked');
    $('.scatterdata').css('box-shadow', '0px 0px 0px black');
    $('.' + scatterFORM + '.' + scatterCHROMA + '.' + scatterKEY).addClass(
        'scatterClicked');
    if (scatterColortoggle === "scatterColorOn") {
        if ($('.' + scatterFORM + '.' + scatterCHROMA + '.' + scatterKEY).hasClass(
                'cSMajor') === true) {
            $('.' + scatterFORM + '.' + scatterCHROMA + '.' + scatterKEY).css(
                "box-shadow", "0px 0px 10px red");
        } else {
            $('.' + scatterFORM + '.' + scatterCHROMA + '.' + scatterKEY).css(
                "box-shadow", "0px 0px 10px blue");
        }
    } else {
        $('.' + scatterFORM + '.' + scatterCHROMA + '.' + scatterKEY).css(
            "box-shadow", "0px 0px 10px #000");
    }
    if (quickPerformer === true) {
        //When quickPerformer is ON
        if ($('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA + '.' +
                menuKEY).length) {
            $('.score.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY).show();
            $('.scoreNote.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY).show();
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA + '.' +
                menuKEY + '.' + menuPERFORMER).show();
            $('.noData').show();
            if ($('.stopPlay').hasClass('menuclicked') === true) { // If stopPlay is active, don't trigger clicks
            } else {
                $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + menuPERFORMER).trigger(
                    "click");
            }
        } else {
        }
    } else {
        //When quickPerformer is OFF
        if ($('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA + '.' +
                menuKEY).length) {
            $('.score.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY).show();
            $('.scoreNote.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY).show();
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA + '.' +
                menuKEY).show();
        } else {
        }
    }
};
//
////////////////////////
// Menu Functionality //
////////////////////////
//
// s_MenuControl
//
// This sets up all of the functionality of the menu, whose main role is
// to change global variables and trigger the "datamenuFunction();" and
// "menuFunciton();" scripts. There is also code to manage changes in the
// data points of the plots, change the data point shown and moving it 
// vertically based on hidden data values attatched to the point.
//
//////////////////////////////
//
var menuControl = function () {
    $('#pieceNum').click(function () {
        $(this).addClass('pNumSelect');
    });
    $('#scatterTab').click(function () {
        if (!$('#scatterplotContainer').hasClass(
                'scatterplotVISIBLE')) {
            $('#scatterplotContainer').css('top', 120 + "px");
            $('#scatterplotContainer').css('opacity', 0);
            $('#scatterplotContainer').show();
            $('#scatterplotContainer').animate({
                opacity: 1,
                top: 152 + "px",
            }, {
                queue: false
            }, 'slow');
            $('#scatterplotContainer').addClass(
                'scatterplotVISIBLE');
        } else {
            $('#scatterplotContainer').animate({
                opacity: 0,
                top: 120 + "px"
            }, {
                queue: false
            }, 'slow');
            $('#scatterplotContainer').fadeOut();
            $('#scatterplotContainer').removeClass(
                'scatterplotVISIBLE');
        }
    });
    $('#scatterPrelude').click(function () {
        $('.cSFugue').fadeOut();
        $('.cSPrelude').fadeIn();
    });
    $('#scatterFugue').click(function () {
        $('.cSFugue').fadeIn();
        $('.cSPrelude').fadeOut();
    });
    $('#scatterAll').click(function () {
        $('.cSFugue').fadeIn();
        $('.cSPrelude').fadeIn();
    });
    $('.autoButton').click(function () {
        if (quickPerformer === true) {
            $('.noData').hide();
            quickPerformer = false;
            menuFunction();
        } else {
            quickPerformer = true;
            $('.button').hide();
            $('.data').hide();
            $('.score.' + menuPIECE + '.' + menuFORM + '.' +
                menuCHROMA + '.' + menuKEY + '.' +
                menuPERFORMER).show();
            $('.scoreNote.' + menuPIECE + '.' + menuFORM + '.' +
                menuCHROMA + '.' + menuKEY + '.' +
                menuPERFORMER).show();
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).show();
            $('.noData').show();
            $('.display').replaceWith('<p class="display">' +
                menuPIECE + ' ' + menuFORM + ' ' + menuCHROMA +
                ' ' + menuKEY + ' ' + menuPERFORMER + '</p>');
        }
    });
    //
    //
    $('.dataToggle').click(function () {
        if (currentdataType === "tempoData") {
            currentdataType = "attackData";
            toolTipHolder = "toolTipBoxA";
            $('.dataToggleDot').animate({
                top: "15px"
            }, {
                queue: false
            });
            dataMenuFunction();
            $('.noteDisplay').animate({
                left: "860px"
            }, {
                queue: false
            });
        } else {
            currentdataType = "tempoData";
            toolTipHolder = "toolTipBoxT";
            $('.dataToggleDot').animate({
                top: "3px"
            }, {
                queue: false
            });
            dataMenuFunction();
            $('.noteDisplay').animate({
                left: "420px"
            }, {
                queue: false
            });
        }
    });
    //
    $('.scatterdataToggle').click(function () {
        if (scatterColortoggle === "scatterColorOn") {
            scatterColortoggle = "scatterColorOff";
            $('.scatterdataToggleDot').animate({
                top: "15px"
            }, {
                queue: false
            });
            $('.cSMajor').css("background-color", "gray");
            $('.cSMinor').css("background-color", "gray");
            $("." + scatterFORM + "." + scatterCHROMA + "." + scatterKEY).css("box-shadow", "0px 0px 10px #000");
        } else {
            scatterColortoggle = "scatterColorOn";
            $('.scatterdataToggleDot').animate({
                top: "3px"
            }, {
                queue: false
            });
            $('.cSMajor').css("background-color", "red");
            $('.cSMinor').css("background-color", "blue");
            if (menuKEY === "cMajor") {
                $("." + scatterFORM + "." + scatterCHROMA + "." + scatterKEY).css("box-shadow", "0px 0px 10px red");
            } else {
                $("." + scatterFORM + "." + scatterCHROMA + "." + scatterKEY).css("box-shadow", "0px 0px 10px blue");
            }
        }
    });
    //
    //Menu functions
    //Composers
    $('.plotPerformerBUTTON').click(function () {
        if (menuPLOT === "plotPerformer") {
            menuPLOT = "plotEditor";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').show();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').fadeOut("fast");
            $('#editorXaxis').fadeIn("fast");
            $('#combinedXaxis').fadeOut("fast");
            $(editorPoints).show();
            $(performerPoints).hide();
            $(editorTicks).fadeIn("fast");
            $(performerTicks).fadeOut("fast");
            multiplier = 1.25;
            numberOffset = 0;
            for (i = 0; i < listofEditors.length; i++) {
                var currentText = listofEditors[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 14 - numberOffset);
                    var currentTick = ".dx" + (i + 14 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        } else {
            menuPLOT = "plotEditor";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').show();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').fadeOut("fast");
            $('#editorXaxis').fadeIn("fast");
            $('#combinedXaxis').fadeOut("fast");
            $(editorPoints).show();
            $(performerPoints).hide();
            $(editorTicks).fadeIn("fast");
            $(performerTicks).fadeOut("fast");
            multiplier = 1.25;
            numberOffset = 0;
            for (i = 0; i < listofEditors.length; i++) {
                var currentText = listofEditors[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 14 - numberOffset);
                    var currentTick = ".dx" + (i + 14 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }

    });
    $('.plotEditorBUTTON').click(function () {
        if (menuPLOT === "plotEditor") {
            menuPLOT = "plotCombined";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').hide();
            $('.plotCombinedBUTTON').show();
            $('#performerXaxis').fadeOut("fast");
            $('#editorXaxis').fadeOut("fast");
            $('#combinedXaxis').fadeIn("fast");
            $(editorPoints).show();
            $(performerPoints).show();
            $(editorTicks).fadeIn("fast");
            $(performerTicks).fadeIn("fast");
            multiplier = 0.58;
            numberOffset = 0;
            for (i = 0; i < listofCombined.length; i++) {
                var currentText = listofCombined[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 1 - numberOffset);
                    var currentTick = ".dx" + (i + 1 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        } else {
            menuPLOT = "plotEditor";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').show();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').fadeOut("fast");
            $('#editorXaxis').fadeIn("fast");
            $('#combinedXaxis').fadeOut("fast");
            $(editorPoints).show();
            $(performerPoints).hide();
            $(editorTicks).fadeIn("fast");
            $(performerTicks).fadeOut("fast");
            multiplier = 1.25;
            numberOffset = 0;
            for (i = 0; i < listofEditors.length; i++) {
                var currentText = listofEditors[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 14 - numberOffset);
                    var currentTick = ".dx" + (i + 14 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }
    });
    $('.plotCombinedBUTTON').click(function () {
        if (menuPLOT === "plotCombined") {
            menuPLOT = "plotPerformer";
            $('.plotPerformerBUTTON').show();
            $('.plotEditorBUTTON').hide();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').fadeIn("fast");
            ;
            $('#editorXaxis').fadeOut("fast");
            $('#combinedXaxis').fadeOut("fast");
            $(editorPoints).hide();
            $(performerPoints).show();
            $(editorTicks).fadeOut("fast");
            $(performerTicks).fadeIn("fast");
            multiplier = 0.98;
            numberOffset = 0;
            for (i = 0; i < listofPerformers.length; i++) {
                var currentText = listofPerformers[i];
                var currentTextLength = currentText.length;
                //var currentTick = ".x" + listofPerformers[i];
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 1 - numberOffset);
                    var currentTick = ".dx" + (i + 1 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        } else {
            menuPLOT = "plotEditor";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').show();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').fadeOut("fast");
            $('#editorXaxis').fadeIn("fast");
            $('#combinedXaxis').fadeOut("fast");
            $(editorPoints).show();
            $(performerPoints).hide();
            $(editorTicks).fadeIn("fast");
            $(performerTicks).fadeOut("fast");
            multiplier = 1.25;
            numberOffset = 0;
            for (i = 0; i < listofEditors.length; i++) {
                var currentText = listofEditors[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 14 - numberOffset);
                    var currentTick = ".dx" + (i + 14 - numberOffset);
                    var newLocal = 24 * i * multiplier + "px";
                    $(currentSpot).css("left", newLocal);
                    $(currentTick).css("left", newLocal);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }
    });
    //
    //
    //
    $('.chopinBUTTON').click(function () {
        if (menuPIECE === "cChopin") {
        } else {
            menuPIECE = "cChopin";
            $('.bachPlaceholder').hide();
            $('.chopinPlaceholder').show();
            $('.content').hide();
            $('.contentBach').hide();
            $('.contentChopin').show();
            $('.defbutton').hide();
            $('.defbutton.cChopin').show();
            menuFunction();
            dataMenuFunction();
        }
    });
    //
    //Prelude vs Fugue
    $('#formBUT .lvlONEBUTTON').click(function () {
        $(this).hide();
        $('#prelude .lvlONEBUTTON').show();
        menuFORM = "cPrelude";
        scatterFORM = "cSPrelude";
        optiFORM = "Prelude";
        menuFunction();
        dataMenuFunction();
    });
    $('#prelude .lvlONEBUTTON').click(function () {
        $(this).hide();
        $('#fugue .lvlONEBUTTON').show();
        menuFORM = "cFugue";
        scatterFORM = "cSFugue";
        optiFORM = "Fugue";
        menuFunction();
        dataMenuFunction();
    });
    $('#fugue .lvlONEBUTTON').click(function () {
        $(this).hide();
        $('#prelude .lvlONEBUTTON').show();
        menuFORM = "cPrelude";
        scatterFORM = "cSPrelude";
        optiFORM = "Prelude";
        menuFunction();
        dataMenuFunction();
    });
    //
    //
    //
    //Prelude Keyboard controls
    if ($('.cPrelude.c0').length) {
        $('#regularKeyboard .chromaC').addClass('activeWhite');
        $('#regularKeyboard .chromaC').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c0";
            scatterCHROMA = "cS0";
            optiCHROMA = "0";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c1').length) {
        $('#regularKeyboard .chromaDflat').addClass('activeBlack');
        $('#regularKeyboard .chromaDflat').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c1";
            scatterCHROMA = "cS1";
            optiCHROMA = "1";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c2').length) {
        $('#regularKeyboard .chromaD').addClass('activeWhite');
        $('#regularKeyboard .chromaD').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c2";
            scatterCHROMA = "cS2";
            optiCHROMA = "2";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c3').length) {
        $('#regularKeyboard .chromaEflat').addClass('activeBlack');
        $('#regularKeyboard .chromaEflat').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c3";
            scatterCHROMA = "cS3";
            optiCHROMA = "3";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c4').length) {
        $('#regularKeyboard .chromaE').addClass('activeWhite');
        $('#regularKeyboard .chromaE').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c4";
            scatterCHROMA = "cS4";
            optiCHROMA = "4";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c5').length) {
        $('#regularKeyboard .chromaF').addClass('activeWhite');
        $('#regularKeyboard .chromaF').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c5";
            scatterCHROMA = "cS5";
            optiCHROMA = "5";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c6').length) {
        $('#regularKeyboard .chromaGflat').addClass('activeBlack');
        $('#regularKeyboard .chromaGflat').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c6";
            scatterCHROMA = "cS6";
            optiCHROMA = "6";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c7').length) {
        $('#regularKeyboard .chromaG').addClass('activeWhite');
        $('#regularKeyboard .chromaG').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c7";
            scatterCHROMA = "cS7";
            optiCHROMA = "7";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c8').length) {
        $('#regularKeyboard .chromaAflat').addClass('activeBlack');
        $('#regularKeyboard .chromaAflat').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c8";
            scatterCHROMA = "cS8";
            optiCHROMA = "8";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c9').length) {
        $('#regularKeyboard  .chromaA').addClass('activeWhite');
        $('#regularKeyboard  .chromaA').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c9";
            scatterCHROMA = "cS9";
            optiCHROMA = "9";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c10').length) {
        $('#regularKeyboard  .chromaBflat').addClass('activeBlack');
        $('#regularKeyboard  .chromaBflat').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c10";
            scatterCHROMA = "cS10";
            optiCHROMA = "10";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c11').length) {
        $('#regularKeyboard  .chromaB').addClass('activeWhite');
        $('#regularKeyboard  .chromaB').click(function () {
            if ($(this).hasClass('menuclicked')) {
            } else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c11";
            scatterCHROMA = "cS11";
            optiCHROMA = "11";
            menuFunction();
            dataMenuFunction();
        });
    }
    //Major Minor Controls
    $('#modeBUT .lvlTHREEBUTTON').click(function () {
        $(this).hide();
        $('#major .lvlTHREEBUTTON').show();
        menuKEY = "cMajor";
        scatterKEY = "cSMajor";
        optiKEY = "Major";
        menuFunction();
        dataMenuFunction();
    });
    $('#major .lvlTHREEBUTTON').click(function () {
        $(this).hide();
        $('#minor .lvlTHREEBUTTON').show();
        menuKEY = "cMinor";
        scatterKEY = "cSMinor";
        optiKEY = "Minor";
        menuFunction();
        dataMenuFunction();
    });
    $('#minor .lvlTHREEBUTTON').click(function () {
        $(this).hide();
        $('#major .lvlTHREEBUTTON').show();
        menuKEY = "cMajor";
        scatterKEY = "cSMajor";
        optiKEY = "Major";
        menuFunction();
        dataMenuFunction();
    });
};
$(document).ready(menuControl);
//
/////////////////////////
// Menu Effects Coding //
/////////////////////////
//
// s_MenuVisuals
//
// This code sets up all the visual effects of the menu to make it feel
// dynamic. This includes hover effects and click effects.
// Most of these are achieved by adding and removing predefined classes 
// (from CSS)
//
//////////////////////////////
//
var composerFX = function () {
    $('.bachBUTTON').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.bachBUTTON').click(function () {
        if ($(this).hasClass('menuclicked')) {
            $('.bachBUTTON').removeClass('menuclicked');
        } else {
            $('.chopinBUTTON').removeClass('menuclicked');
            $('.editorBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
            $(this).removeClass('menuclicked');
        }
    });
    $('.chopinBUTTON').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.chopinBUTTON').click(function () {
        if ($(this).hasClass('menuclicked')) {
        } else {
            $('.bachBUTTON').removeClass('menuclicked');
            $('.editorBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
    $('.editorBUTTON').hover(function () {
        $(this).toggleClass('menuhovered');
    });
    $('.editorBUTTON').click(function () {
        if ($(this).hasClass('menuclicked')) {
        } else {
            $('.bachBUTTON').removeClass('menuclicked');
            $('.chopinBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
//
// Tempo Plot Button
var tempoPlotButtonFX = function () {
    $('.tempoPlotButton').hover(function () {
        $(this).toggleClass('menuhovered');
    }, function () {
        $('.tempoPlotButton').removeClass('menuhovered');
    });
};
//
// Play Pause button
var stopPlayFX = function () { // Sets the hover visuals only
    $('.stopPlay').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
};
var stopPlayFunction = function () { // The main functioning of Stop Play. Controls what happens when you click. State is read by other functions by .menuclicked class
    aPiece = document.getElementById('audio');
    $('.stopPlay').click(function () {
        if ($(this).hasClass('menuclicked')) {
            $('.stopPlay').removeClass('menuclicked');
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).removeClass(
                'btnclicked');
        } else {
            aPiece = document.getElementById('audio');
            aPiece.pause();
            aPiece.currentTime = 0;
            $('.pauseDisplay').show();
            $('.playDisplay').hide();
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).removeClass(
                'btnclicked');
            $('.stopPlay').addClass('menuclicked');
        }
        if (quickPerformer === true) {
            $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).trigger(
                "click");
        } else {
        }
    });
};
//
var autoFX = function () {
    $('.autoButton').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.autoButton').click(function () {
        $(this).toggleClass('menuclicked');
    });
};
//
var scatterTabFX = function () {
    $('#scatterTab').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterTab').click(function () {
        $(this).toggleClass('menuclicked');
    });
};
var scatterPreludeFX = function () {
    $('#scatterPrelude').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterPrelude').click(function () {
        $(this).addClass('menuclicked');
        $('#scatterFugue').removeClass('menuclicked');
        $('#scatterAll').removeClass('menuclicked');
    });
};
var scatterFugueFX = function () {
    $('#scatterFugue').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterFugue').click(function () {
        $(this).addClass('menuclicked');
        $('#scatterPrelude').removeClass('menuclicked');
        $('#scatterAll').removeClass('menuclicked');
    });
};
var scatterAllFX = function () {
    $('#scatterAll').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterAll').click(function () {
        $(this).addClass('menuclicked');
        $('#scatterFugue').removeClass('menuclicked');
        $('#scatterPrelude').removeClass('menuclicked');
    });
};
//
var formFX = function () {
    $('.lvlONEBUTTON').hover(function () {
        $(this).toggleClass('menuclickedhover');
    });
    $('.lvlONEBUTTON').click(function () {
        if ($(this).hasClass('menuclicked')) {
        } else {
            $('.lvlONEBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
var chromaFX = function () {
    $('.key.activeWhite, .blackkey.activeBlack').hover(function () {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function () {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
};
var keyFX = function () {
    $('.lvlTHREEBUTTON').hover(function () {
        $(this).toggleClass('menuclickedhover');
    });
    $('.lvlTHREEBUTTON').click(function () {
        if ($(this).hasClass('menuclicked')) {
        } else {
            $('.lvlTHREEBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
var scoreButtonsFX = function () {
    $('.nextScore, .prevScore').hover(function () {
        $(this).toggleClass('scoreButtonHover');
    });
};
//
var tabBTN = function () {
    $('.tab').hover(function () {
        $(this).toggleClass('menuhovered');
    });
    $('.czernyTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cCzernyscore";
        $('.tab').removeClass('scoretabselected');
        $('.czernyTAB').addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
    $('.mugelliniTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cMugelliniscore";
        $('.tab').removeClass('scoretabselected');
        $(this).addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
    $('.palmerTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cPalmerscore";
        $('.tab').removeClass('scoretabselected');
        $(this).addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
    $('.bischoffTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cBischoffscore";
        $('.tab').removeClass('scoretabselected');
        $(this).addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
    $('.hughesTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cHughesscore";
        $('.tab').removeClass('scoretabselected');
        $(this).addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
    $('.bartokTAB').click(function () {
        $('.scoreAuthor, .scorePic').hide();
        menuScorechooser = "cBartokscore";
        $('.tab').removeClass('scoretabselected');
        $(this).addClass('scoretabselected');
        $('.' + menuScorechooser).show();
    });
}
//
////////////////////////////
// FX Variable Activators //
////////////////////////////
//
// s_FXActivator
//
// This is simply where most of the previous code is initialized for the webpage.
// Most of these are visual effects for the different elements.
//
////////////////////////////
//    
$(document).ready(composerFX);
$(document).ready(autoFX);
$(document).ready(scatterTabFX);
$(document).ready(scatterPreludeFX);
$(document).ready(scatterFugueFX);
$(document).ready(scatterAllFX);
$(document).ready(keyFX);
$(document).ready(formFX);
$(document).ready(chromaFX);
$(document).ready(scoreButtonsFX);
$(document).ready(stopPlayFX);
$(document).ready(stopPlayFunction);
$(document).ready(tabBTN);
$(document).ready(tempoPlotButtonFX);
//
//////////////////////////////
// Performer Button Artwork //
//////////////////////////////
//
// s_PerformerButton
//
// This code scrubs through a list of the performers and loads their album
// images for their buttons (the ones found beneath the piano menu). These
// images are grabbed automatically from the websites server, the url being
// built dynamically based on object properties. It should be case-insensitive.
//
//////////////////////////////
//
var setButtonArt = function () {
    list_of_performers.forEach(function (name) {
        $("<style>").prop("type", "text/css").html("\
        ." +
            name.toLowerCase().caps() +
            "Button {\
        background-image: url('" +
            urlPrefix + "bachWTC1/" + name.toLowerCase() + "/" +
            name.toLowerCase().caps() +
            "album.jpg');\
    }\
        ." + name.toLowerCase()
                .caps() +
            "portrait {\
        background-image: url('" +
            urlPrefix + "bachWTC1/" + name.toLowerCase() + "/" +
            name.toLowerCase().caps() + "portrait.jpg');\
}").appendTo(
            "head");
    });
};
$(document).ready(setButtonArt);
var setExtraElements = function () {
    $("<style>").prop("type", "text/css").html(
        "\
        .stopPlay{\
        background-image: url('" +
        urlPrefix +
        "Elements/stopPlay.png');\
	}\
        .logoMAPLE{\
        background-image: url('" +
        urlPrefix +
        "Elements/MAPLElogo.png');\
	}\
        .bachPor{\
        background-image: url('" +
        urlPrefix +
        "Elements/Bachpor.png');\
	}\
		.halfnotePICaxis{\
        background-image: url('" +
        urlPrefix +
        "Elements/halfnote.png');\
    }\
		.pauseDisplay{\
        background-image: url('" +
        urlPrefix +
        "Elements/pauseDisplay.png');\
    }\
		.playDisplay{\
        background-image: url('" +
        urlPrefix +
        "Elements/playDisplay.png');\
	}\
		.halfnotePICtooltip{\
        background-image: url('" +
        urlPrefix +
        "Elements/halfnotewhite.png');\
	}\
		.halfnoteDOTPICtooltip{\
        background-image: url('" +
        urlPrefix +
        "Elements/halfnoteDOTwhite.png');\
	}\
        .chopinPor{\
        background-image: url('" +
        urlPrefix + "Elements/Chopinpor.png');\
	}").appendTo("head");
};
$(document).ready(setExtraElements);
//
var scatterActivater = function () {
    list_of_scatterpoints.forEach(function (value) {
        scatterVal = eval(value);
        scatterVal.scatterdataInitialize();
        scatterVal.scatterfX();
        scatterVal.scattertoolTIPSFX();
    });
};
$(document).ready(scatterActivater);
//
//////////////////////////////
// HTML Canvas Graph Drawer //
//////////////////////////////
//
// s_HTMLGraph
//
// This code manages the Tempo and Scatterplot graphs, drawing the main axes
// and labels for the different views. There is a Performer view, Editor view, 
// and Combined view. There is also an attack axis drawn.
//
//////////////////////////////
//
$(document).ready(function () {
    /////////////////////////
    // Scatter Plot Canvas //
    /////////////////////////
    //
    // X Axis //
    //
    // Set up initial variables
    var cScatterX = document.getElementById("scatterplotXaxis");
    var cScatterXarea = cScatterX.getContext("2d");
    // Set up empty step variable.
    step = 0;
    // Set up bounds
    lowData = 30;
    highData = 56;
    rangeData = highData - lowData;
    interData = 2;
    // Draw font
    cScatterXarea.font = "20px Arial";
    cScatterXarea.fillText("Pitch Height", 100, 355);
    cScatterXarea.font = "10px Arial";
    // Initial coordinates of graph
    lineHeight = 310;
    lineLength = 70;
    // Draw 0 tick tick
    cScatterXarea.moveTo(lineLength, lineHeight);
    cScatterXarea.lineTo(lineLength, lineHeight + 5);
    cScatterXarea.fillText(30, lineLength - 3, lineHeight + 20);
    cScatterXarea.moveTo(lineLength, lineHeight);
    // Draw sequential ticks
    for (i = 0; i < 65 / 5; i++) {
        step = step + 19 // Number is how stretched-out the axis is.
        lineHeight = 310;
        cScatterXarea.lineTo(lineLength + step, lineHeight);
        cScatterXarea.lineTo(lineLength + step, lineHeight + 5);
        cScatterXarea.fillText((lowData + interData * (i + 1)),
            lineLength + step - 3, lineHeight + 20);
        cScatterXarea.moveTo(lineLength + step, lineHeight);
    }
    //Finally, stroke in the path we drew
    cScatterXarea.strokeStyle = '#000000';
    cScatterXarea.stroke();
    //
    //
    // Y Axis //
    //
    var cScatterY = document.getElementById("scatterplotYaxis");
    var cScatterYarea = cScatterY.getContext("2d");
    // Set up empty step variable.
    step = 0;
    // Set up bounds
    lowData = 0;
    highData = 13;
    rangeData = highData - lowData;
    interData = 1;
    // Draw font on an angle
    cScatterYarea.rotate(-90 * Math.PI / 180);
    cScatterYarea.font = "20px Arial";
    cScatterYarea.fillText("Attack Rate (notes/sec)", -260, 30);
    cScatterYarea.rotate(90 * Math.PI / 180);
    cScatterYarea.font = "10px Arial";
    // height of graph
    lineHeight = 310;
    lineLength = 70;
    // Draw 0 tick tick
    cScatterYarea.moveTo(lineLength, lineHeight);
    cScatterYarea.lineTo(lineLength - 5, lineHeight);
    cScatterYarea.fillText(0, lineLength - 30, lineHeight + 2);
    cScatterYarea.moveTo(lineLength, lineHeight);
    // Draw sequential ticks
    for (i = 0; i < 13; i++) {
        step = step + 22; // How stretched-out the axis is.
        lineHeight = 310;
        cScatterYarea.lineTo(lineLength, lineHeight - step);
        cScatterYarea.lineTo(lineLength - 5, lineHeight - step);
        cScatterYarea.fillText((lowData + interData * (i + 1)),
            lineLength - 30, lineHeight + 2 - step);
        cScatterYarea.moveTo(lineLength, lineHeight - step);
    }
    //  Finally, stroke in the path we drew
    cScatterYarea.strokeStyle = '#000000';
    cScatterYarea.stroke();
    //
    //
    //
    //
    //
    ///////////////////////////
    // Tempo and Attack Plot //
    ///////////////////////////
    //
    // Performer version //
    //
    namePOSx = 12;
    namePOSy = 14.2;
    nameStart = 215;
    var cPerformer = document.getElementById("performerXaxis");
    var cPerformerarea = cPerformer.getContext("2d");
    // Set up empty step variable.
    step = 0;
    // Collect Data
    data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 160];
    // Set up bounds
    lowData = Math.min.apply(Math, data);
    highData = Math.max.apply(Math, data);
    rangeData = highData - lowData;
    interData = rangeData / 10;
    // height of graph
    lineHeight = 310;
    lineLength = 70;
    // Draw x-axis labels
    cPerformerarea.rotate(-50 * Math.PI / 180);
    // Draw x-axis names
    multiplier = 1.27;
    numberOffset = 0;
    cPerformerarea.font = "9px Consolas";
    for (i = 0; i < listofPerformers.length; i++) {
        var currentText = listofPerformers[i];
        var currentTextLength = currentText.length;
        //var currentTick = ".x" + listofPerformers[i];
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 1 - numberOffset);
            var currentTick = ".dx" + (i + 1 - numberOffset);
            var newLocal = 24 * i * 0.98 + "px";
            if (menuPLOT == "plotPerformer") {
                $(currentSpot).css("left", newLocal);
                $(currentTick).css("left", newLocal);
            }
        } else {
            numberOffset = numberOffset + 1;
        }
        //$(currentTick).css("left", (20*i) + "px");
        cPerformerarea.fillText(currentText, (-nameStart + 5 + namePOSx *
            multiplier * i) - (currentTextLength - 4) * 5, (270.1 +
        namePOSy * multiplier * i));
    }
    cPerformerarea.font = "10px Arial";
    cPerformerarea.rotate(50 * Math.PI / 180);
    // Draw x-axis
    cPerformerarea.moveTo(lineLength, lineHeight);
    cPerformerarea.lineTo(430, lineHeight);
    // Draw 0 tick tick
    cPerformerarea.moveTo(lineLength, lineHeight);
    cPerformerarea.lineTo(lineLength - 5, lineHeight);
    cPerformerarea.fillText(0, lineLength - 30, lineHeight + 2);
    cPerformerarea.moveTo(lineLength, lineHeight);
    // Finally, stroke in the path we drew
    cPerformerarea.strokeStyle = '#000000';
    cPerformerarea.stroke();
    //
    //
    // Editor version //
    //
    var cEditor = document.getElementById("editorXaxis");
    var cEditorarea = cEditor.getContext("2d");
    //Set up empty step variable.
    step = 0;
    //Collect Data
    data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 160];
    //Set up bounds
    lowData = Math.min.apply(Math, data);
    highData = Math.max.apply(Math, data);
    rangeData = highData - lowData;
    interData = rangeData / 10;
    //height of graph
    lineHeight = 310;
    lineLength = 70;
    //Draw x-axis labels
    cEditorarea.rotate(-50 * Math.PI / 180);
    multipliera = 1.6;
    numberOffset = 0;
    cEditorarea.font = "9px Consolas";
    multiplier = 1.25;
    for (i = 0; i < listofEditors.length; i++) {
        var currentText = listofEditors[i];
        var currentTextLength = currentText.length;
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 14 - numberOffset);
            var currentTick = ".dx" + (i + 14 - numberOffset);
            var newLocal = 24 * i * multiplier + "px";
            if (menuPLOT == "plotEditor") {
                $(currentSpot).css("left", newLocal);
                $(currentTick).css("left", newLocal);
            }
        } else {
            numberOffset = numberOffset + 1;
        }
        cEditorarea.fillText(currentText, (-nameStart + namePOSx * multipliera *
            i) - (currentTextLength - 5) * 5, (270 + namePOSy *
        multipliera * i));
    }
    cEditorarea.rotate(50 * Math.PI / 180);
    // Draw x-axis
    cEditorarea.moveTo(lineLength, lineHeight);
    cEditorarea.lineTo(430, lineHeight);
    // Draw 0 tick tick
    cEditorarea.moveTo(lineLength, lineHeight);
    cEditorarea.lineTo(lineLength - 5, lineHeight);
    cEditorarea.fillText(0, lineLength - 30, lineHeight + 2);
    cEditorarea.moveTo(lineLength, lineHeight);
    // Finally, stroke in the path we drew
    cEditorarea.strokeStyle = '#000000';
    cEditorarea.stroke();
    //
    //
    // Combined version //
    //
    var cCombined = document.getElementById("combinedXaxis");
    var cCombinedarea = cCombined.getContext("2d");
    // Set up empty step variable.
    step = 0;
    // Collect Data
    data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 160];
    // Set up bounds
    lowData = Math.min.apply(Math, data);
    highData = Math.max.apply(Math, data);
    rangeData = highData - lowData;
    interData = rangeData / 10;
    // height of graph
    lineHeight = 310;
    lineLength = 70;
    // Draw x-axis labels
    cCombinedarea.rotate(-50 * Math.PI / 180);
    // Draw x-axis names
    multiplier = 0.75;
    numberOffset = 0;
    cCombinedarea.font = "9px Consolas";
    for (i = 0; i < listofCombined.length; i++) {
        var currentText = listofCombined[i];
        var currentTextLength = currentText.length;
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 1 - numberOffset);
            var currentTick = ".dx" + (i + 1 - numberOffset);
            var newLocal = 24 * i * 0.58 + "px";
            if (menuPLOT == "plotCombined") {
                $(currentSpot).css("left", newLocal);
                $(currentTick).css("left", newLocal);
            }
        } else {
            numberOffset = numberOffset + 1;
        }
        cCombinedarea.fillText(currentText, (-nameStart + namePOSx *
            multiplier * i) - (currentTextLength - 5) * 5, (270 +
        namePOSy * multiplier * i));
    }
    cCombinedarea.font = "10px Arial";
    cCombinedarea.rotate(50 * Math.PI / 180);
    // Draw x-axis
    cCombinedarea.moveTo(lineLength, lineHeight);
    cCombinedarea.lineTo(430, lineHeight);
    // Draw 0 tick tick
    cCombinedarea.moveTo(lineLength, lineHeight);
    cCombinedarea.lineTo(lineLength - 5, lineHeight);
    cCombinedarea.fillText(0, lineLength - 30, lineHeight + 2);
    cCombinedarea.moveTo(lineLength, lineHeight);
    // Finally, stroke in the path we drew
    cCombinedarea.strokeStyle = '#000000';
    cCombinedarea.stroke();
    //
    //
    //
    //Attack default CANVAS
    //Establish connection to canvas into ctx
    var cd = document.getElementById("defaultAttackaxis");
    var cdA = cd.getContext("2d");
    //Set up empty step variable.
    step = 0;
    //Collect Data
    data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 13];
    //Set up bounds
    lowData = Math.min.apply(Math, data);
    highData = Math.max.apply(Math, data);
    rangeData = highData - lowData;
    interData = rangeData / 13;
    cdA.rotate(-90 * Math.PI / 180);
    cdA.font = "20px Arial";
    cdA.fillText("Attack Rate (notes/sec)", -260, 25);
    cdA.rotate(90 * Math.PI / 180);
    cdA.font = "10px Arial";
    //height of graph
    lineHeight = 310;
    lineLength = 70;
    //Draw 0 tick tick
    cdA.moveTo(lineLength, lineHeight);
    cdA.lineTo(lineLength - 5, lineHeight);
    cdA.fillText(0, lineLength - 30, lineHeight + 2);
    cdA.moveTo(lineLength, lineHeight);
    //Draw sequential ticks
    for (i = 0; i < 13; i++) {
        step = step + 23.33333; //How stretched-out the axis is.
        lineHeight = 310;
        cdA.lineTo(lineLength, lineHeight - step);
        cdA.lineTo(lineLength - 5, lineHeight - step);
        cdA.fillText((lowData + interData * (i + 1)), lineLength - 30,
            lineHeight + 2 - step);
        cdA.moveTo(lineLength, lineHeight - step);
    }
    //Finally, stroke in the path we drew
    cdA.strokeStyle = '#000000';
    cdA.stroke();
    //
    //
    //
    //
    //
    //tempo default CANVAS
    //Establish connection to canvas into ctx
    var ct = document.getElementById("defaultTempoaxis");
    var cdT = ct.getContext("2d");
    //Set up empty step variable.
    step = 0;
    //Collect Data
    data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 160];
    //Set up bounds
    lowData = Math.min.apply(Math, data);
    highData = Math.max.apply(Math, data);
    rangeData = highData - lowData;
    interData = rangeData / 10;
    cdT.rotate(-90 * Math.PI / 180);
    cdT.font = "20px Arial";
    cdT.fillText("Tempo (bpm)", -230, 25);
    cdT.rotate(90 * Math.PI / 180);
    cdT.font = "10px Arial";
    //height of graph
    lineHeight = 310;
    lineLength = 70;
    //Draw 0 tick tick
    cdT.moveTo(lineLength, lineHeight);
    cdT.lineTo(lineLength - 5, lineHeight);
    cdT.fillText(0, lineLength - 30, lineHeight + 2);
    cdT.moveTo(lineLength, lineHeight);
    //Draw sequential ticks
    for (i = 0; i < 10; i++) {
        step = step + 30; //How stretched-out the axis is.
        lineHeight = 310;
        cdT.lineTo(lineLength, lineHeight - step);
        cdT.lineTo(lineLength - 5, lineHeight - step);
        cdT.fillText((lowData + interData * (i + 1)), lineLength - 30,
            lineHeight + 2 - step);
        cdT.moveTo(lineLength, lineHeight - step);
    }
    //Finally, stroke in the path we drew
    cdT.strokeStyle = '#000000';
    cdT.stroke();
});
