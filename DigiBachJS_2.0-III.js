// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// v2.0.1
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
// s_KeyListen
// s_AppInit
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
var scoreActivater = function() {
    list_of_pieces.forEach(function(value) {
        button = eval(value);
        button.createScore();
        button.insertAAxis();
        button.insertTAxis();
        button.putinNote();
    });
};
//Activating file
var buttonActivater = function() {
    list_of_files.forEach(function(value) {
        button = eval(value);
        button.initialize();
        button.dataInitialize();
        button.autoEnable();
        button.toolTIPS();
        button.toolTIPSFX();
        button.play();
        button.fX();
    });
    list_of_OFFfiles.forEach(function(value) {
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
var dataMenuFunction = function() {
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
    for (i = 0; i < 22; i++) {
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
var menuFunction = function() {
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
            aPiece = document.getElementById('audio');
            aPiece.pause();
            aPiece.currentTime = 0;
            if ($('.playPause').hasClass('menuclicked') === true) {
                $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + menuPERFORMER).trigger(
                    "click");
                $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA + '.' +
                    menuKEY + '.' + menuPERFORMER).addClass(
                    'btnclicked');
                $('.data.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                    '.' + menuKEY + '.' + menuPERFORMER).addClass(
                    'btnclicked');
            } else {}
            $('.display').replaceWith('<p class="display">' + menuPIECE +
                ' ' + menuFORM + ' ' + menuCHROMA + ' ' + menuKEY + ' ' +
                menuPERFORMER + '</p>');
        } else {
            $('.display').replaceWith('<p class="display">' + menuPIECE +
                ' ' + menuFORM + ' ' + menuCHROMA + ' ' + menuKEY + ' ' +
                menuPERFORMER + ': Nothing Found</p>');
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
            $('.display').replaceWith('<p class="display">' + menuPIECE +
                ' ' + menuFORM + ' ' + menuCHROMA + ' ' + menuKEY +
                '</p>');
        } else {
            $('.display').replaceWith('<p class="display">' + menuPIECE +
                ' ' + menuFORM + ' ' + menuCHROMA + ' ' + menuKEY +
                ': Nothing Found</p>');
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
var menuControl = function() {
    $('#pieceNum').click(function() {
        $(this).addClass('pNumSelect');
    });
    $('#scatterTab').click(function() {
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
    $('#scatterPrelude').click(function() {
        $('.cSFugue').fadeOut();
        $('.cSPrelude').fadeIn();
    });
    $('#scatterFugue').click(function() {
        $('.cSFugue').fadeIn();
        $('.cSPrelude').fadeOut();
    });
    $('#scatterAll').click(function() {
        $('.cSFugue').fadeIn();
        $('.cSPrelude').fadeIn();
    });
    $('.autoButton').click(function() {
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
    $('.dataToggle').click(function() {
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
                left: "470px"
            }, {
                queue: false
            });
        }
    });
    //
    $('.scatterdataToggle').click(function() {
        if (scatterColortoggle === "scatterColorOn") {
            scatterColortoggle = "scatterColorOff";
            $('.scatterdataToggleDot').animate({
                top: "15px"
            }, {
                queue: false
            });
            $('.cSMajor').css("background-color", "gray");
            $('.cSMinor').css("background-color", "gray");
        } else {
            scatterColortoggle = "scatterColorOn";
            $('.scatterdataToggleDot').animate({
                top: "3px"
            }, {
                queue: false
            });
            $('.cSMajor').css("background-color", "red");
            $('.cSMinor').css("background-color", "blue");
        }
    });
    //
    //Menu functions
    //Composers
    $('.plotPerformerBUTTON').click(function() {
        if (menuPLOT === "plotPerformer") {
            menuPLOT = "plotEditor";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').show();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').hide();
            $('#editorXaxis').show();
            $('#combinedXaxis').hide();
            $('.d21').show();
            $('.d20').show();
            $('.d19').show();
            $('.d18').show();
            $('.d17').show();
            $('.d16').show();
            $('.d15').show();
            $('.d14').show();
            $('.d13').hide();
            $('.d12').hide();
            $('.d11').hide();
            $('.d10').hide();
            $('.d9').hide();
            $('.d8').hide();
            $('.d7').hide();
            $('.d6').hide();
            $('.d5').hide();
            $('.d4').hide();
            $('.d3').hide();
            $('.d2').hide();
            $('.d1').hide();
            var listofEditors = ["Bartok", "Bischoff", "Czerny",
                "Hughes", "Mugellini", "", "Palmer", "",
                "Bodky", "Keller"
            ];
            multiplier = 1.9;
            numberOffset = 0;
            var listofEditorLocations = [];
            for (i = 0; i < listofEditors.length; i++) {
                var currentText = listofEditors[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 21 - numberOffset);
                    $(currentSpot).css("left", (31 * i) + "px");
                    listofEditorLocations.push(31 * i);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }
	menuFunction();
	dataMenuFunction();
    });
    $('.plotEditorBUTTON').click(function() {
        if (menuPLOT === "plotEditor") {
            menuPLOT = "plotCombined";
            $('.plotPerformerBUTTON').hide();
            $('.plotEditorBUTTON').hide();
            $('.plotCombinedBUTTON').show();
            $('#performerXaxis').hide();
            $('#editorXaxis').hide();
            $('#combinedXaxis').show();
            $('.d21').show();
            $('.d20').show();
            $('.d19').show();
            $('.d18').show();
            $('.d17').show();
            $('.d16').show();
            $('.d15').show();
            $('.d14').show();
            $('.d13').show();
            $('.d12').show();
            $('.d11').show();
            $('.d10').show();
            $('.d9').show();
            $('.d8').show();
            $('.d7').show();
            $('.d6').show();
            $('.d5').show();
            $('.d4').show();
            $('.d3').show();
            $('.d2').show();
            $('.d1').show();
            var listofCombined = ["Fischer", "Tureck", "Gould",
                "Martins", "Demus", "Richter", "Gulda", "",
                "Landowska", "Galling", "Hamilton",
                "Kirkpatrick", "Leonhardt", "Newman", "",
                "Bartok", "Bischoff", "Czerny", "Hughes",
                "Mugellini", "", "Palmer", "", "Bodky",
                "Keller"
            ];
            multiplier = 0.9;
            numberOffset = 0;
            for (i = 0; i < listofCombined.length; i++) {
                var currentText = listofCombined[i];
                var currentTextLength = currentText.length;
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 21 - numberOffset);
                    $(currentSpot).css("left", (31 * i) + "px");
                    listofCombinedLocations.push(31 * i);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }
    });
    $('.plotCombinedBUTTON').click(function() {
        if (menuPLOT === "plotCombined") {
            menuPLOT = "plotPerformer";
            $('.plotPerformerBUTTON').show();
            $('.plotEditorBUTTON').hide();
            $('.plotCombinedBUTTON').hide();
            $('#performerXaxis').show();
            $('#editorXaxis').hide();
            $('#combinedXaxis').hide();
            $('.d21').hide();
            $('.d20').hide();
            $('.d19').hide();
            $('.d18').hide();
            $('.d17').hide();
            $('.d16').hide();
            $('.d15').hide();
            $('.d14').hide();
            $('.d13').show();
            $('.d12').show();
            $('.d11').show();
            $('.d10').show();
            $('.d9').show();
            $('.d8').show();
            $('.d7').show();
            $('.d6').show();
            $('.d5').show();
            $('.d4').show();
            $('.d3').show();
            $('.d2').show();
            $('.d1').show();
            var listofPerformers = ["Fischer", "Tureck", "Gould",
                "Martins", "Demus", "Richter", "Gulda", "",
                "Landowska", "Galling", "Hamilton", "Kirkpat.",
                "Leonhardt", "Newman"
            ];
            multiplier = 1.5;
            numberOffset = 0;
            var listofPerformerLocations = [];
            for (i = 0; i < listofPerformers.length; i++) {
                var currentText = listofPerformers[i];
                var currentTextLength = currentText.length;
                //var currentTick = ".x" + listofPerformers[i];
                if (currentTextLength > 0) {
                    var currentSpot = ".d" + (i + 1 - numberOffset);
                    $(currentSpot).css("left", (24 * i) + "px");
                    listofPerformerLocations.push(24 * i);
                } else {
                    numberOffset = numberOffset + 1;
                }
            }
        }
    });
    //
    //
    //
    $('.chopinBUTTON').click(function() {
        if (menuPIECE === "cChopin") {} else {
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
    $('#formBUT .lvlONEBUTTON').click(function() {
        $(this).hide();
        $('#prelude .lvlONEBUTTON').show();
        menuFORM = "cPrelude";
        scatterFORM = "cSPrelude";
        menuFunction();
        dataMenuFunction();
    });
    $('#prelude .lvlONEBUTTON').click(function() {
        $(this).hide();
        $('#fugue .lvlONEBUTTON').show();
        menuFORM = "cFugue";
        scatterFORM = "cSFugue";
        menuFunction();
        dataMenuFunction();
    });
    $('#fugue .lvlONEBUTTON').click(function() {
        $(this).hide();
        $('#prelude .lvlONEBUTTON').show();
        menuFORM = "cPrelude";
        scatterFORM = "cSPrelude";
        menuFunction();
        dataMenuFunction();
    });
    //
    //
    //
    //Prelude Keyboard controls
    if ($('.cPrelude.c0').length) {
        $('#regularKeyboard .chromaC').addClass('activeWhite');
        $('#regularKeyboard .chromaC').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c0";
            scatterCHROMA = "cS0";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c1').length) {
        $('#regularKeyboard .chromaDflat').addClass('activeBlack');
        $('#regularKeyboard .chromaDflat').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c1";
            scatterCHROMA = "cS1";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c2').length) {
        $('#regularKeyboard .chromaD').addClass('activeWhite');
        $('#regularKeyboard .chromaD').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c2";
            scatterCHROMA = "cS2";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c3').length) {
        $('#regularKeyboard .chromaEflat').addClass('activeBlack');
        $('#regularKeyboard .chromaEflat').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c3";
            scatterCHROMA = "cS3";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c4').length) {
        $('#regularKeyboard .chromaE').addClass('activeWhite');
        $('#regularKeyboard .chromaE').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c4";
            scatterCHROMA = "cS4";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c5').length) {
        $('#regularKeyboard .chromaF').addClass('activeWhite');
        $('#regularKeyboard .chromaF').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c5";
            scatterCHROMA = "cS5";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c6').length) {
        $('#regularKeyboard .chromaGflat').addClass('activeBlack');
        $('#regularKeyboard .chromaGflat').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c6";
            scatterCHROMA = "cS6";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c7').length) {
        $('#regularKeyboard .chromaG').addClass('activeWhite');
        $('#regularKeyboard .chromaG').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c7";
            scatterCHROMA = "cS7";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c8').length) {
        $('#regularKeyboard .chromaAflat').addClass('activeBlack');
        $('#regularKeyboard .chromaAflat').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c8";
            scatterCHROMA = "cS8";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c9').length) {
        $('#regularKeyboard  .chromaA').addClass('activeWhite');
        $('#regularKeyboard  .chromaA').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c9";
            scatterCHROMA = "cS9";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c10').length) {
        $('#regularKeyboard  .chromaBflat').addClass('activeBlack');
        $('#regularKeyboard  .chromaBflat').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c10";
            scatterCHROMA = "cS10";
            menuFunction();
            dataMenuFunction();
        });
    }
    if ($('.cPrelude.c11').length) {
        $('#regularKeyboard  .chromaB').addClass('activeWhite');
        $('#regularKeyboard  .chromaB').click(function() {
            if ($(this).hasClass('menuclicked')) {} else {
                $('.key.activeWhite, .blackkey.activeBlack').removeClass(
                    'menuclicked');
                $(this).addClass('menuclicked');
            }
            menuCHROMA = "c11";
            scatterCHROMA = "cS11";
            menuFunction();
            dataMenuFunction();
        });
    }
    //Major Minor Controls
    $('#modeBUT .lvlTHREEBUTTON').click(function() {
        $(this).hide();
        $('#major .lvlTHREEBUTTON').show();
        menuKEY = "cMajor";
        scatterKEY = "cSMajor";
        menuFunction();
        dataMenuFunction();
    });
    $('#major .lvlTHREEBUTTON').click(function() {
        $(this).hide();
        $('#minor .lvlTHREEBUTTON').show();
        menuKEY = "cMinor";
        scatterKEY = "cSMinor";
        menuFunction();
        dataMenuFunction();
    });
    $('#minor .lvlTHREEBUTTON').click(function() {
        $(this).hide();
        $('#major .lvlTHREEBUTTON').show();
        menuKEY = "cMajor";
        scatterKEY = "cSMajor";
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
var composerFX = function() {
    $('.bachBUTTON').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.bachBUTTON').click(function() {
        if ($(this).hasClass('menuclicked')) {
            $('.bachBUTTON').removeClass('menuclicked');
        } else {
            $('.chopinBUTTON').removeClass('menuclicked');
            $('.editorBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
            $(this).removeClass('menuclicked');
        }
    });
    $('.chopinBUTTON').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.chopinBUTTON').click(function() {
        if ($(this).hasClass('menuclicked')) {} else {
            $('.bachBUTTON').removeClass('menuclicked');
            $('.editorBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
    $('.editorBUTTON').hover(function() {
        $(this).toggleClass('menuhovered');
    });
    $('.editorBUTTON').click(function() {
        if ($(this).hasClass('menuclicked')) {} else {
            $('.bachBUTTON').removeClass('menuclicked');
            $('.chopinBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
//
//Play Pause button
var playPauseFX = function() {
    $('.playPause').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
};
var playPauseFunction = function() {
    aPiece = document.getElementById('audio');
    $('.playPause').click(function() {
        if (aPiece.paused === false) {
            aPiece.pause();
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).removeClass(
                'btnclicked');
            $('.playPause').removeClass('menuclicked');
        } else {
            $('.playPause').addClass('menuclicked');
            $('.' + menuPIECE + '.' + menuFORM + '.' + menuCHROMA +
                '.' + menuKEY + '.' + menuPERFORMER).addClass(
                'btnclicked');
            aPiece.play();
        }
    });
};
//
var autoFX = function() {
    $('.autoButton').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('.autoButton').click(function() {
        $(this).toggleClass('menuclicked');
    });
};
//
var scatterTabFX = function() {
    $('#scatterTab').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterTab').click(function() {
        $(this).toggleClass('menuclicked');
    });
};
var scatterPreludeFX = function() {
    $('#scatterPrelude').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterPrelude').click(function() {
        $(this).addClass('menuclicked');
        $('#scatterFugue').removeClass('menuclicked');
        $('#scatterAll').removeClass('menuclicked');
    });
};
var scatterFugueFX = function() {
    $('#scatterFugue').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterFugue').click(function() {
        $(this).addClass('menuclicked');
        $('#scatterPrelude').removeClass('menuclicked');
        $('#scatterAll').removeClass('menuclicked');
    });
};
var scatterAllFX = function() {
    $('#scatterAll').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
    $('#scatterAll').click(function() {
        $(this).addClass('menuclicked');
        $('#scatterFugue').removeClass('menuclicked');
        $('#scatterPrelude').removeClass('menuclicked');
    });
};
//
var formFX = function() {
    $('.lvlONEBUTTON').hover(function() {
        $(this).toggleClass('menuclickedhover');
    });
    $('.lvlONEBUTTON').click(function() {
        if ($(this).hasClass('menuclicked')) {} else {
            $('.lvlONEBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
var chromaFX = function() {
    $('.key.activeWhite, .blackkey.activeBlack').hover(function() {
        if ($(this).hasClass('menuclicked')) {
            $(this).removeClass('menuhovered');
            $(this).toggleClass('menuclickedhover');
        } else {
            $(this).toggleClass('menuhovered');
            $(this).removeClass('menuclickedhover');
        }
    }, function() {
        $(this).removeClass('menuhovered');
        $(this).removeClass('menuclickedhover');
    });
};
var keyFX = function() {
    $('.lvlTHREEBUTTON').hover(function() {
        $(this).toggleClass('menuclickedhover');
    });
    $('.lvlTHREEBUTTON').click(function() {
        if ($(this).hasClass('menuclicked')) {} else {
            $('.lvlTHREEBUTTON').removeClass('menuclicked');
            $(this).addClass('menuclicked');
        }
    });
};
var scoreButtonsFX = function() {
    $('.nextScore, .prevScore').hover(function() {
        $(this).toggleClass('scoreButtonHover');
    });
};
//
var resetBTN = function() {
    $('#stopALL').hover(function() {
        $(this).toggleClass('menuhovered');
    });
    $('#stopAll').click(function() {
        $('.lvlONEBUTTON').removeClass('menuclicked');
    });
};
//
var tabBTN = function() {
        $('.tab').hover(function() {
            $(this).toggleClass('menuhovered');
        });
        $('.czernyTAB').click(function() {
            $('.scoreAuthor, .scorePic').hide();
            menuScorechooser = "cCzernyscore";
            $('.tab').removeClass('scoretabselected');
            $('.czernyTAB').addClass('scoretabselected');
            $('.' + menuScorechooser).show();
        });
        $('.busoniTAB').click(function() {
            $('.scoreAuthor, .scorePic').hide();
            menuScorechooser = "cBusoniscore";
            $('.tab').removeClass('scoretabselected');
            $(this).addClass('scoretabselected');
            $('.' + menuScorechooser).show();
        });
        $('.mugelliniTAB').click(function() {
            $('.scoreAuthor, .scorePic').hide();
            menuScorechooser = "cMugelliniscore";
            $('.tab').removeClass('scoretabselected');
            $(this).addClass('scoretabselected');
            $('.' + menuScorechooser).show();
        });
        $('.palmerTAB').click(function() {
            $('.scoreAuthor, .scorePic').hide();
            menuScorechooser = "cPalmerscore";
            $('.tab').removeClass('scoretabselected');
            $(this).addClass('scoretabselected');
            $('.' + menuScorechooser).show();
        });
        $('.bischoffTAB').click(function() {
            $('.scoreAuthor, .scorePic').hide();
            menuScorechooser = "cBischoffscore";
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
$(document).ready(playPauseFX);
$(document).ready(playPauseFunction);
$(document).ready(resetBTN);
$(document).ready(tabBTN);
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
var setButtonArt = function() {
    list_of_performers.forEach(function(name) {
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
var setExtraElements = function() {
    $("<style>").prop("type", "text/css").html(
        "\
        .playPause{\
        background-image: url('" +
        urlPrefix +
        "Elements/play_pause.png');\
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
var scatterActivater = function() {
    list_of_scatterpoints.forEach(function(value) {
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
$(document).ready(function() {
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
    cScatterYarea.fillText("Attack Rate (notes/sec)", -300, 30);
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
    var listofPerformers = ["Fischer", "Tureck", "Gould", "Martins",
        "Demus", "Richter", "Gulda", "", "Landowska", "Galling",
        "Hamilton", "Kirkpat.", "Leonhardt", "Newman"
    ];
    // Draw x-axis names
    namePOSx = 10;
    namePOSy = 12;
    multiplier = 1.5;
    numberOffset = 0;
    var listofPerformerLocations = [];
    cPerformerarea.font = "10px Courier New";
    for (i = 0; i < listofPerformers.length; i++) {
        var currentText = listofPerformers[i];
        var currentTextLength = currentText.length;
        //var currentTick = ".x" + listofPerformers[i];
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 1 - numberOffset);
            $(currentSpot).css("left", (24 * i) + "px");
            listofPerformerLocations.push(24 * i);
        } else {
            numberOffset = numberOffset + 1;
        }
        //$(currentTick).css("left", (20*i) + "px");
        cPerformerarea.fillText(currentText, (-218 + namePOSx *
            multiplier * i) - (currentTextLength - 4) * 5, (270 +
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
    var listofEditors = ["Bartok", "Bischoff", "Czerny", "Hughes",
        "Mugellini", "", "Palmer", "", "Bodky", "Keller"
    ];
    namePOSx = 10;
    namePOSy = 12;
    multiplier = 1.9;
    numberOffset = 0;
    var listofEditorLocations = [];
    cEditorarea.font = "10px Courier New";
    for (i = 0; i < listofEditors.length; i++) {
        var currentText = listofEditors[i];
        var currentTextLength = currentText.length;
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 21 - numberOffset);
            $(currentSpot).css("left", (31 * i) + "px");
            listofEditorLocations.push(31 * i);
        } else {
            numberOffset = numberOffset + 1;
        }
        cEditorarea.fillText(currentText, (-220 + namePOSx * multiplier *
            i) - (currentTextLength - 5) * 5, (270 + namePOSy *
            multiplier * i));
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
    var listofCombined = ["Fischer", "Tureck", "Gould", "Martins",
        "Demus", "Richter", "Gulda", "", "Landowska", "Galling",
        "Hamilton", "Kirkpatrick", "Leonhardt", "Newman", "",
        "Bartok", "Bischoff", "Czerny", "Hughes", "Mugellini", "",
        "Palmer", "", "Bodky", "Keller"
    ];
    // Draw x-axis names
    namePOSx = 10;
    namePOSy = 12;
    multiplier = 0.9;
    numberOffset = 0;
    var listofCombinedLocations = [];
    cCombinedarea.font = "10px Courier New";
    for (i = 0; i < listofCombined.length; i++) {
        var currentText = listofCombined[i];
        var currentTextLength = currentText.length;
        if (currentTextLength > 0) {
            var currentSpot = ".d" + (i + 21 - numberOffset);
            $(currentSpot).css("left", (0.1 * i) + "px");
            listofCombinedLocations.push(0.1 * i);
        } else {
            numberOffset = numberOffset + 1;
        }
        cCombinedarea.fillText(currentText, (-220 + namePOSx *
            multiplier * i) - (currentTextLength - 5) * 5, (270 +
            namePOSy * multiplier * i));
    }
    cCombinedarea.font = "10px Arial";
    cCombinedarea.rotate(50 * Math.PI / 180);
    // Draw x-axis
    cCombinedarea.moveTo(lineLength, lineHeight);
    cCombinedarea.lineTo(438, lineHeight);
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
    cdA.fillText("Attack Rate (notes/sec)", -290, 25);
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
//
////////////////////////
// Keypress Listeners //
////////////////////////
//
// s_KeyListen
//
// This set of code manages the 'hotkeys',
// adding functionality for quick navigation through
// the application without needing to click anything
//
////////////////////////
//
window.onkeydown = function(e) {
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
    //Keypress listeners
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
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
            case 190:
                if ($('.bischoffTAB').hasClass(
                    'scoretabselected')) {
                    $('.czernyTAB').trigger("click");
                    break;
                }
                //if ( $('.busoniTAB').hasClass('scoretabselected') ) {
                //$('.czernyTAB').trigger("click");
                //break;
                //} 
                if ($('.czernyTAB').hasClass('scoretabselected')) {
                    $('.mugelliniTAB').trigger("click");
                    break;
                }
                if ($('.mugelliniTAB').hasClass(
                    'scoretabselected')) {
                    $('.palmerTAB').trigger("click");
                    break;
                }
                if ($('.palmerTAB').hasClass('scoretabselected')) {
                    $('.bischoffTAB').trigger("click");
                    break;
                } else {
                    break;
                }
            case 188:
                if ($('.bischoffTAB').hasClass(
                    'scoretabselected')) {
                    $('.palmerTAB').trigger("click");
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
                if ($('.mugelliniTAB').hasClass(
                    'scoretabselected')) {
                    $('.czernyTAB').trigger("click");
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
                $('.playPause').trigger("click");
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
//
//////////////////////////////
// Initial Application Mode //
//////////////////////////////
//
// s_AppInit
//
// This code checks the 'appMODE' parameter from the first document (I-pre)
// The possible values are 'bacheditorMODE', 'bachperformerMODE', or 'allMODE'
// This simply hides/show different elements depending on the mode, making small GUI adjustments
//
//////////////////////////////
//
if (appMODE == "bacheditorMODE") {
    $(document).ready(function() {
        //CSS changes
        $('.playPause').hide();
        $('.autoButton').hide();
        $('#scatterTab').css("left", "250px"); //left: 155px !important;
        $('#scatterTab').css("border-top-left-radius", "15px");
        $('#scatterTab').show();
        $('#pieceNum').css("left", "280px");
        $('#pieceNum').css("border-top-right-radius", "15px");
        $('#pieceNum').show();
        $('#lvlCOMPOSER').hide();
        $('#formBUT, .lvlONEBUTTON').css("border-top-left-radius",
            "15px");
        $('#prelude, .lvlONEBUTTON').css("border-top-left-radius",
            "15px");
        $('#fugue, .lvlONEBUTTON').css("border-top-left-radius",
            ":15px");
        menuPIECE = "cBacheditor_WTC1";
        $('.content').hide();
        $('.contentBach').hide();
        $('.contentBacheditor').show();
        $('.defbutton').hide();
        $('.defbutton.cBacheditor_WTC1').show();
        $('.editorModeText').show();
        $('.d21').show();
        $('.d20').show();
        $('.d19').show();
        $('.d18').show();
        $('.d17').show();
        $('.d16').show();
        $('.d15').show();
        $('.d14').show();
        $('.d13').hide();
        $('.d12').hide();
        $('.d11').hide();
        $('.d10').hide();
        $('.d9').hide();
        $('.d8').hide();
        $('.d7').hide();
        $('.d6').hide();
        $('.d5').hide();
        $('.d4').hide();
        $('.d3').hide();
        $('.d2').hide();
        $('.d1').hide();
        menuFunction();
        dataMenuFunction();
    });
} else if (appMODE == "bachperformerMODE") {
    $(document).ready(function() {
        //CSS changes
        $('.playPause').show();
        $('.autoButton').show();
        $('#scatterTab').css("left", "155px");
        $('#scatterTab').css("border-top-left-radius", "15px");
        $('#scatterTab').show();
        $('#pieceNum').css("left", "187px");
        $('#pieceNum').css("border-bottom-right-radius", "0px");
        $('#pieceNum').show();
        $('#lvlCOMPOSER').hide();
        $('#formBUT, .lvlONEBUTTON').css("border-top-left-radius",
            "15px");
        $('#prelude, .lvlONEBUTTON').css("border-top-left-radius",
            "15px");
        $('#fugue, .lvlONEBUTTON').css("border-top-left-radius",
            ":15px");
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.d21').hide();
        $('.d20').hide();
        $('.d19').hide();
        $('.d18').hide();
        $('.d17').hide();
        $('.d16').hide();
        $('.d15').hide();
        $('.d14').show();
        $('.d13').show();
        $('.d12').show();
        $('.d11').show();
        $('.d10').show();
        $('.d9').show();
        $('.d8').show();
        $('.d7').show();
        $('.d6').show();
        $('.d5').show();
        $('.d4').show();
        $('.d3').show();
        $('.d2').show();
        $('.d1').show();
        menuFunction();
        dataMenuFunction();
    });
} else if (appMODE == "allMODE") {
    $(document).ready(function() {
        //CSS changes
        $('.playPause').show();
        $('.playPause').css("left", "215px");
        $('.playPause').css("border-bottom-right-radius", "0px");
        $('.autoButton').show();
        $('.autoButton').css("left", "156px");
        $('.autoButton').css("border-top-left-radius", "15px");
        $('.autoButton').css("border-top-right-radius", "0px");
        $('#scatterTab').css("left", "250px"); //left: 155px !important;
        $('#scatterTab').css("border-top-left-radius", "0px");
        $('#scatterTab').show();
        $('#pieceNum').css("left", "280px");
        $('#pieceNum').css("border-top-right-radius", "15px");
        $('#pieceNum').show();
        $('#lvlCOMPOSER').show();
        $('#formBUT, .lvlONEBUTTON').css("border-top-left-radius",
            "0px");
        $('#prelude, .lvlONEBUTTON').css("border-top-left-radius",
            "0px");
        $('#fugue, .lvlONEBUTTON').css("border-top-left-radius", ":0px");
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.d21').hide();
        $('.d20').hide();
        $('.d19').hide();
        $('.d18').hide();
        $('.d17').hide();
        $('.d16').hide();
        $('.d15').hide();
        $('.d14').show();
        $('.d13').show();
        $('.d12').show();
        $('.d11').show();
        $('.d10').show();
        $('.d9').show();
        $('.d8').show();
        $('.d7').show();
        $('.d6').show();
        $('.d5').show();
        $('.d4').show();
        $('.d3').show();
        $('.d2').show();
        $('.d1').show();
        menuFunction();
        dataMenuFunction();
    });
} else {
    $(document).ready(function() {
        //CSS changes
        $('.playPause').show();
        $('.autoButton').show();
        $('#scatterTab').css("left", "155px");
        $('#scatterTab').css("border-top-left-radius", "15px");
        $('#scatterTab').show();
        $('#pieceNum').css("left", "187px");
        $('#pieceNum').css("border-bottom-right-radius", "0px");
        $('#pieceNum').show();
        $('#lvlCOMPOSER').show();
        $('#formBUT, .lvlONEBUTTON').css("border-top-left-radius",
            "0px");
        $('#prelude, .lvlONEBUTTON').css("border-top-left-radius",
            "0px");
        $('#fugue, .lvlONEBUTTON').css("border-top-left-radius", ":0px");
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.d21').hide();
        $('.d20').hide();
        $('.d19').hide();
        $('.d18').hide();
        $('.d17').hide();
        $('.d16').hide();
        $('.d15').hide();
        $('.d14').show();
        $('.d13').show();
        $('.d12').show();
        $('.d11').show();
        $('.d10').show();
        $('.d9').show();
        $('.d8').show();
        $('.d7').show();
        $('.d6').show();
        $('.d5').show();
        $('.d4').show();
        $('.d3').show();
        $('.d2').show();
        $('.d1').show();
        menuFunction();
        dataMenuFunction();
    });
}