// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// Git Repo: https://github.com/gauderkd/DigitizingBach
// file 7: App Initialization
//
//////////////////////////////
// Initial Application Mode //
//////////////////////////////
//
//
// This code checks the 'appMODE' parameter from the first document (I-pre)
// The possible values are 'bacheditorMODE', 'bachperformerMODE', or 'allMODE'
// This simply hides/show different elements depending on the mode, making small GUI adjustments
//
//////////////////////////////
//
$(document).ready(function() {
    $('.point').hide();
});
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
        $('#lvlCOMPOSER').show();
        $('.instrumentTitle').hide();
        menuPIECE = "cBach_WTC1";
        $('#audioButtonContainer').hide();
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').hide();
        $('.editorModeText').show();
        $('.plotCombinedBUTTON').hide();
        $('.plotEditorBUTTON').hide();
        $('.plotPerformerBUTTON').hide();
        $('.contentBachAxis').hide();
        $('#performerXaxis').hide();
        $('#combinedXaxis').hide();
        $('#editorXaxis').show();
        $(editorPoints).show();
        $(performerPoints).hide();
        $(editorTicks).show();
        $(performerTicks).hide();
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
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.contentBachAxis').hide();
        $('#performerXaxis').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.plotCombinedBUTTON').hide();
        $('.plotEditorBUTTON').hide();
        $('.plotPerformerBUTTON').show();
        $('.contentBachAxis').hide();
        $('#performerXaxis').show();
        $('#combinedXaxis').hide();
        $('#editorXaxis').hide();
        $(editorPoints).hide();
        $(performerPoints).show();
        $(editorTicks).hide();
        $(performerTicks).show();
        menuFunction();
        dataMenuFunction();
    });
} else if (appMODE == "allMODE") {
    $(document).ready(function () {
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
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.plotCombinedBUTTON').show();
        $('.plotEditorBUTTON').hide();
        $('.plotPerformerBUTTON').hide();
        $('.contentBachAxis').hide();
        $('#performerXaxis').hide();
        $('#combinedXaxis').show();
        $('#editorXaxis').hide();
        $(editorPoints).show();
        $(performerPoints).show();
        $(editorTicks).show();
        $(performerTicks).show();
        menuFunction();
        dataMenuFunction();
    });
} else if (appMODE == "demoMODE") {
    $(document).ready(function() {
        //CSS changes
        $('.pauseBut').hide();
        $('.playBut').hide();
        $('.playPause').hide();
        $('.playPause').css("left", "215px");
        $('.playPause').css("border-bottom-right-radius", "0px");
        $('.autoButton').hide();
        $('.autoButton').css("left", "156px");
        $('.autoButton').css("border-top-left-radius", "15px");
        $('.autoButton').css("border-top-right-radius", "0px");
        $('#scatterTab').css("left", "250px"); //left: 155px !important;
        $('#scatterTab').css("border-top-left-radius", "15px");
        $('#scatterTab').show();
        $('#pieceNum').css("left", "280px");
        $('#pieceNum').css("border-top-right-radius", "15px");
        $('#pieceNum').show();
        $('#lvlCOMPOSER').show();
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.contentBachAxis').hide();
        $('#performerXaxis').show();
        $('.contentBacheditor').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').hide();
        $('.editorModeText').show();
        $('.instrumentTitle').hide();
        $('.plotCombinedBUTTON').show();
        $('.plotEditorBUTTON').hide();
        $('.plotPerformerBUTTON').hide();
        $('.contentBachAxis').hide();
        $('#performerXaxis').hide();
        $('#combinedXaxis').show();
        $('#editorXaxis').hide();
        $(editorPoints).show();
        $(performerPoints).show();
        $(editorTicks).show();
        $(performerTicks).show();
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
        menuPIECE = "cBach_WTC1";
        $('.content').hide();
        $('.contentBach').show();
        $('.defbutton').hide();
        $('.defbutton.cBach_WTC1').show();
        $('.editorModeText').hide();
        $('.plotCombinedBUTTON').show();
        $('.plotEditorBUTTON').hide();
        $('.plotPerformerBUTTON').hide();
        $('.contentBachAxis').hide();
        $('#performerXaxis').hide();
        $('#combinedXaxis').show();
        $('#editorXaxis').hide();
        $(editorPoints).show();
        $(performerPoints).show();
        $(editorTicks).show();
        $(performerTicks).show();
        menuFunction();
        dataMenuFunction();
    });
}