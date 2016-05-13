// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder

// v2.0
// File 2: Object Prototype Creation

//Capitalize the first letter method
String.prototype.caps = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
//
//Play Music button functionality
var playPiece = function(volume, carryperformer, audioURL, currentPieceName) {
    //Load audio tag into aPiece
    aPiece = document.getElementById('audio');
    if ($('.playPause').hasClass('firstClicked')) {
	    $('.playPause').addClass('firstClicked');
	    if (currentPieceName === currentPiecePlaying) {
	        if (aPiece.paused === false) {
	            aPiece.pause();
	            aPiece.currentTime = 0;
	            $('.playPause').removeClass('menuclicked');
	            $('.pauseBut').hide();
	            $('.playBut').show();
	        } else {
	            aPiece.volume = volume;
	            aPiece.play();
	            $('.playPause').addClass('menuclicked');
	            $('.pauseBut').show();
	            $('.playBut').hide();   
	        }
	    } else {
	        currentPiecePlaying = currentPieceName;
	        aPiece.src = audioURL;
	        aPiece.load();
	        aPiece.volume = volume;
	        aPiece.play();
	        $('.caption').fadeOut(250);
	        $('.' + carryperformer).fadeIn(250);
	        $('.playPause').addClass('menuclicked');
            $('.pauseBut').show();
            $('.playBut').hide(); 
	    }
    } else {
	    $('.playPause').addClass('firstClicked');
}
};
//
//Empty arrays
var list_of_files = [];
var list_of_performers = [];
var list_of_pieces = [];
var list_of_OFFfiles = [];
var list_of_points = [];
var list_of_scatterpoints = [];

//
//
//
//
//Obect creation
//Inject score information for each piece
function scoreFile(composer, piece, form, number, chroma, chromatrans, key,
        note, attackMULT) {
        this.composer = composer.toLowerCase().caps();
        this.piece = piece.toUpperCase();
        this.form = form.toLowerCase().caps();
        this.number = number;
        this.chroma = chroma;
        this.chromatrans = chromatrans.toLowerCase().caps();
        this.key = key.toLowerCase().caps();
        var scoreLABEL = this.composer + "_" + this.piece + "_" + this.form +
            "_" + this.chroma + "_" + this.key + "_SCORE";
        //cBach_WTC1cPreludec5cMAJOR_aAxis
        var scoreContentLABEL = "c" + this.composer + '_' + this.piece + ' c' +
            this.form + ' c' + this.chroma + ' c' + this.key;
        var scoreContenteditorLABEL = "c" + this.composer + 'editor_' + this.piece + ' c' +
            this.form + ' c' + this.chroma + ' c' + this.key;
        var scoreContentLABELnospace = "c" + this.composer + '_' + this.piece +
            'c' + this.form + 'c' + this.chroma + 'c' + this.key;
        var scoreContenteditorLABELnospace = "c" + this.composer + 'editor_' + this.piece +
            'c' + this.form + 'c' + this.chroma + 'c' + this.key;
        var scoreURLPRE = this.composer + "_" + this.piece + "_" + form.toLowerCase()
            .caps() + "_" + chroma + "_" + key + "_SCORE_";
        var scoreURLCzerny = urlPrefix + this.composer.toLowerCase() + this.piece +
            "/scores/czerny/" + scoreURLPRE + "Czerny.png";
        var scoreURLBusoni = urlPrefix + this.composer.toLowerCase() + this.piece +
            "/scores/busoni/" + scoreURLPRE + "Busoni.png";
        var scoreURLBischoff = urlPrefix + this.composer.toLowerCase() + this.piece +
            "/scores/bischoff/" + scoreURLPRE + "Bischoff.png";
        var scoreURLMugellini = urlPrefix + this.composer.toLowerCase() + this.piece +
            "/scores/mugellini/" + scoreURLPRE + "Mugellini.png";
        var scoreURLPalmer = urlPrefix + this.composer.toLowerCase() + this.piece +
            "/scores/palmer/" + scoreURLPRE + "Palmer.png";
        this.putinNote = function() {
            if (note === "Q") {
                $('.noteDisplay').append(
			'<p class="scoreNote ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '">♩</p>');
            }
            if (note === "DQ") {
                $('.noteDisplay').append(
			'<p class="scoreNote ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '">♩.</p>');
            }
            if (note === "E") {
                $('.noteDisplay').append(
			'<p class="scoreNote ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '">♪</p>');
            }
            if (note === "DE") {
                $('.noteDisplay').append(
			'<p class="scoreNote ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '">♪.</p>');
            }
            if (note === "H") {
                $('.noteDisplay').append(
			'<div class="halfnotePICaxis scoreNote ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '"></div>');
            }
        }
        this.putinLine = function() {
            $('.palmerLINE').append(
                '<div class="pLineData cBach_WTC1 cPrelude c11 cMinor">64</div>'
            );
        };
        //http://maplelab.net/virtualPianist/bachWTC1/scores/mugellini/Bach_WTC1_Prelude_0_Minor_SCORE_Mugellini.png
        this.createScore = function() {
            $('.scoreContainer').append(
		    '<div class="score ' +
                    scoreContentLABEL + ' ' + scoreContenteditorLABEL + '"><h2 class="scoreTitle">' + this.form +
                ' No.     ' + this.number + ' in ' + this.chromatrans +
                ' ' + this.key +
                '</h2><img height="210px" width="500px" class="scorePic cCzernyscore" src="' +
                scoreURLCzerny +
                '" /><img height="210px" width="500px" class="scorePic cBischoffscore" src="' +
                scoreURLBischoff +
                '" /><img height="210px" width="500px" class="scorePic cBusoniscore" src="' +
                scoreURLBusoni +
                '" /><img height="210px" width="500px" class="scorePic cMugelliniscore" src="' +
                scoreURLMugellini +
                '" /><img height="210px" width="500px" class="scorePic cPalmerscore" src="' +
                scoreURLPalmer + '" /></div>');
        };
        //
        //
        this.insertAAxis = function() {
            $('#containerAttackAxis').append('<canvas id="' +
                scoreContentLABELnospace + "_aAxis" +
                '" class="attackAxis ' + scoreContentLABELnospace + "_aAxis" + ' ' + scoreContenteditorLABELnospace + "_aAxis" + '" width="480px" height="360px"></canvas>'
            );
            var cA = document.getElementById(scoreContentLABELnospace +
                "_aAxis");
            var ctxA = cA.getContext("2d");
            var stepAttack = 0;
            var lengthAttack = 425;
            var heightAttack = 310;
            ctxA.rotate(-90 * Math.PI / 180);
            ctxA.font = "20px Arial";
            ctxA.fillStyle = "grey";
            ctxA.fillText("Attack Rate (notes/sec)", -260, 472);
            ctxA.rotate(90 * Math.PI / 180);
            ctxA.font = "10px Arial";
            //
            //Collect AttackData
            Attackdata = [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160].map(
                function(x) {
                    return x * attackMULT / 60;
                });
            //Set up bounds
            lowAttackData = Math.min.apply(Math, Attackdata);
            highAttackData = Math.max.apply(Math, Attackdata);
            numTicks = (highAttackData / 1).toFixed(0);
            stepSize = 300 / numTicks;
            var interAttackData = highAttackData / numTicks;
            //
            ctxA.moveTo(lengthAttack, heightAttack);
            for (i = 0; i < numTicks; i++) {
                stepAttack = stepAttack + stepSize; //How stretched-out the axis is.
                ctxA.lineTo(lengthAttack, heightAttack - stepAttack);
                ctxA.lineTo(lengthAttack + 5, heightAttack - stepAttack);
                ctxA.fillText((lowAttackData + interAttackData * (i + 1)).toFixed(
                        1), lengthAttack + 10, heightAttack + 2 -
                    stepAttack);
                ctxA.moveTo(lengthAttack, heightAttack - stepAttack);
            }
            //
            ctxA.strokeStyle = '#999999';
            ctxA.stroke();
        };
        this.insertTAxis = function() {
            $('#containerTempoAxis').append('<canvas id="' +
                scoreContentLABELnospace + "_tAxis" +
                '" class="tempoAxis ' + scoreContentLABELnospace + "_tAxis" + ' ' + scoreContenteditorLABELnospace + "_tAxis" + '" width="480px" height="360px"></canvas>'
            );
            var cT = document.getElementById(scoreContentLABELnospace +
                "_tAxis");
            var ctxT = cT.getContext("2d");
            var stepAttack = 0;
            var lengthAttack = 425;
            var heightAttack = 310;
            ctxT.rotate(-90 * Math.PI / 180);
            ctxT.font = "20px Arial";
            ctxT.fillStyle = "grey";
            ctxT.fillText("Tempo (bpm)", -230, 472);
            ctxT.rotate(90 * Math.PI / 180);
            ctxT.font = "10px Arial";
            //
            //Collect AttackData
            Attackdata = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(function(x) {
                return x * 60 / attackMULT;
            });
            //Set up bounds
            lowAttackData = Math.min.apply(Math, Attackdata);
            highAttackData = Math.max.apply(Math, Attackdata);
            numTicks = (highAttackData / 30).toFixed(0);
            stepSize = 300 / numTicks;
            var interAttackData = highAttackData / numTicks;
            //
            ctxT.moveTo(lengthAttack, heightAttack);
            for (i = 0; i < numTicks; i++) {
                stepAttack = stepAttack + stepSize; //How stretched-out the axis is.
                if (lowAttackData + interAttackData * (i + 1) > 170) {
                    break;
                } else {
                    ctxT.lineTo(lengthAttack, heightAttack - stepAttack);
                    ctxT.lineTo(lengthAttack + 5, heightAttack - stepAttack);
                    ctxT.fillText((lowAttackData + interAttackData * (i + 1))
                        .toFixed(0), lengthAttack + 10, heightAttack +
                        2 - stepAttack);
                    ctxT.moveTo(lengthAttack, heightAttack - stepAttack);
                }
            }
            //
            ctxT.strokeStyle = '#999999';
            ctxT.stroke();
        };
        //
        //Add Score to list of pieces
        list_of_pieces.push(scoreLABEL);
    }
    //
    //
    //
    //AudioFile object, all the functions that are called/generated when a new piece is initialized.
function audioFile(OnOff, composer, piece, PerfvsEdit, performer, note,
    palmerData, data, attackRate, form, chroma, key, instrument, volume,
    position) {
    
    this.composer = composer.toLowerCase();
    this.piece = piece.toUpperCase();
    this.performer = performer.toLowerCase();
    var performerName = this.performer.caps();
// Check/Add to dictionary
    var dict = [];
    var listPerformers = ["Fischer", "Tureck", "Gould", "Martins",
            "Demus", "Richter", "Gulda", "Landowska", "Galling",
            "Hamilton", "Kirkpatrick", "Leonhardt", "Newman",
            "Bartok", "Bischoff", "Czerny", "Hughes", "Mugellini",
            "Palmer", "Bodky", "Keller"
        ];
	for (i=0; i<listPerformers.length; i++) {
	    	dict.push({position:i+1,thisname:listPerformers[i]});
	    }
    var dictSize = dict.length;
    for (i = 0; i < dictSize; i++) {
      var currentName = dict[i].thisname;
      var currentPosition = dict[i].position;
      if (currentName === performerName) {
	      position = currentPosition;
      } else {
      }
    }
//
//
    var roundData = Math.round(palmerData);
    var roundAttack = (Math.round(100 * attackRate)) / 100;
    var roundActualData = Math.round(data);
    var textNote;
    if (note === "Q") {
        textNote = "♩";
    }
    if (note === "DQ") {
        textNote = "♩.";
    }
    if (note === "E") {
        textNote = "♪";
    }
    if (note === "DE") {
        textNote = "♪.";
    }
    if (note === "H") {
        textNote = "half";
    }
    this.form = form.toLowerCase();
    this.chroma = chroma.toLowerCase();
    this.key = key.toLowerCase();
    this.instrument = instrument.toLowerCase();
    this.volume = volume;
    //Build naming system: Bach_WTC1_Tureck_Prelude_11_Minor
    this.name = this.composer.caps() + "_" + this.piece + "_" + this.performer
        .caps() + "_" + this.form.caps() + "_" + this.chroma.caps() + "_" +
        this.key.caps();
    //tureckinfo
    var performerCaption = performer.toLowerCase() + 'info';
    //http://maplelab.net......Bach_WTC1_Tureck_Prelude_11_Minor-P1.mp3
    var url = urlPrefix + "/" + this.composer + this.piece + "/" + this.performer +
        "/" + fileType + "/" + this.name + "%20%28" + this.instrument.caps() +
        "%29." + fileType;
    var className = "." + this.name;
   
    //class="cTureck"
    var contentPerformer = "c" + this.performer.caps();
    //class="cBach_WTC1"
    var contentPiece = "c" + this.composer.caps() + "_" + this.piece;
    //class="cPrelude"
    var contentForm = "c" + this.form.caps();
    //class="c11"
    var contentChroma = "c" + this.chroma.caps();
    //class="cMinor"
    var contentKey = "c" + this.key.caps();
    //Score identifier: Bach_WTC1_Prelude_11_Minor
    var scoreID = this.composer.caps() + "_" + this.piece + "_" + this.form
        .caps() + "_" + this.chroma.caps() + "_" + this.key.caps();
    //initialize creates the actual button and assigns it it's default classes in it's specified 'spot'. example: <div class="button unselected cBach_WTC1 cPrelude c11 cMinor tureckButton Tureck_Prelude_11_Minor"></div>
    this.initialize = function() {
        $('#' + this.performer.caps()).append(
            '<div class="button unselected ' + 'buttonPOS' +
            position + ' ' + contentPiece + ' ' + contentPerformer +
            ' ' + contentForm + ' ' + contentChroma + ' ' +
            contentKey + ' ' + this.performer.caps() + 'Button ' +
            this.name + '"></div>');
    };
    var adjustPosition;
    var instrumentData;
    if (this.instrument === "h1") {
        adjustPosition = position;
        instrumentData = "harpData";
    } else if (this.instrument === "p1"){
        adjustPosition = position ;
        instrumentData = "pianoData";
    } else if (this.instrument === "comment"){
        adjustPosition = position;
        instrumentData = "commentData";
    } else if (this.instrument === "editor"){
        adjustPosition = position;
        instrumentData = "editorData";
    } else if (this.instrument === "palmer"){
        adjustPosition = position;
        instrumentData = "palmData";
    }
    //play creates a jQuery function for each button that assigns it a click function, calling playPiece() and passing through information.
    if (OnOff === "N") {
        this.dataInitialize = function() {
            $('.d' + position).append(
                '<div class="data blackDot unselected ' +
                instrumentData + ' ' + contentPiece + ' ' +
                contentPerformer + ' ' + contentForm + ' ' +
                contentChroma + ' ' + contentKey + ' ' + this.name +
                '"><div class="actualData">' + roundActualData +
                '</div><div class="tempoData">' + roundData +
                '</div><div class="attackData">' + roundAttack +
                '</div><div class="toolTipBoxT"></div><div class="toolTipBoxA"></div></div>'
            );
        };
        list_of_OFFfiles.push(this.name);
        //Add Performer name to list of performers
        if ($.inArray(performerName, list_of_performers) > -1) {} else {
            list_of_performers.push(performerName);
        }
    } else {
        this.dataInitialize = function() {
		if (instrumentData === "pianoData") {
	    	    $('.d' + position).append(
	                    '<div class="data redPDot unselected ' +
	                    instrumentData + ' ' + contentPiece + ' ' +
	                    contentPerformer + ' ' + contentForm + ' ' +
	                    contentChroma + ' ' + contentKey + ' ' + this.name +
	                    '"><div class="actualData">' + roundActualData +
	                    '</div><div class="tempoData">' + roundData +
	                    '</div><div class="attackData">' + roundAttack +
	                    '</div><div class="toolTipBoxT"></div><div class="toolTipBoxA"></div></div>'
	                );
		} else if (instrumentData === "harpData") {
    	    	    $('.d' + position).append(
    	                    '<div class="data redHSquare unselected ' +
    	                    instrumentData + ' ' + contentPiece + ' ' +
    	                    contentPerformer + ' ' + contentForm + ' ' +
    	                    contentChroma + ' ' + contentKey + ' ' + this.name +
    	                    '"><div class="actualData">' + roundActualData +
    	                    '</div><div class="tempoData">' + roundData +
    	                    '</div><div class="attackData">' + roundAttack +
    	                    '</div><div class="toolTipBoxT"></div><div class="toolTipBoxA"></div></div>'
    	                );	
		} else {
    	    	    $('.d' + position).append(
    	                    '<div class="data graySquare unselected ' +
    	                    instrumentData + ' ' + contentPiece + ' ' +
    	                    contentPerformer + ' ' + contentForm + ' ' +
    	                    contentChroma + ' ' + contentKey + ' ' + this.name +
    	                    '"><div class="actualData">' + roundActualData +
    	                    '</div><div class="tempoData">' + roundData +
    	                    '</div><div class="attackData">' + roundAttack +
    	                    '</div><div class="toolTipBoxT"></div><div class="toolTipBoxA"></div></div>'
    	                );
		}
	    
        };
        this.play = function() {
            $(className).click(function() {
                playPiece(volume / 100, performerCaption, url,
                    className);
            });
        };
        //fX creates jQuery functionality to assign the button (and data) hover and click effects.
        this.autoEnable = function() {
            $(className).click(function() {
                menuPERFORMER = contentPerformer;
            });
        };
        this.fX = function() {
            $(className).hover(function() {
                $(className).toggleClass('hovered');
            });
            $(className).click(function() {
                if ($(className).hasClass('btnclicked') ===
                    true) {
                    $(className).addClass('unselected');
                    $(className).removeClass('btnclicked');
                } else {
                    $('.button').addClass('unselected');
                    $('.button').removeClass('btnclicked');
                    $('.data').addClass('unselected');
                    $('.data').removeClass('btnclicked');
                    $(className).removeClass('unselected');
                    $(className).addClass('btnclicked');
                }
                $('.xAtick').animate({
                    height: "6px"
                }, {
                    duration: 100,
                    queue: false
                });
                $('.x' + performerName).animate({
                    height: "11px"
                }, {
                    duration: 100,
                    queue: false
                });
            });
        };
        //
        //Creating Arrays of inserted content
        //
        //Add file name to list of files to parse through
        list_of_files.push(this.name);
        //Add Performer name to list of performers
        if ($.inArray(performerName, list_of_performers) > -1) {} else {
            list_of_performers.push(performerName);
        }
    }
    //Hover Tooltip
    this.toolTIPS = function() {
        var dTempo = $('.data.' + contentPiece + '.' + contentPerformer +
            '.' + contentForm + '.' + contentChroma + '.' +
            contentKey).children('.tempoData').text();
        var dAttack = $('.data.' + contentPiece + '.' +
            contentPerformer + '.' + contentForm + '.' +
            contentChroma + '.' + contentKey).children(
            '.attackData').text();
        if (note === "Q") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append("♩= " +
                dTempo);
        }
        if (note === "DQ") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append("♩.= " +
                dTempo);
        }
        if (note === "E") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append("♪= " +
                dTempo);
        }
        if (note === "DE") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append("♪.= " +
                dTempo);
        }
        if (note === "H") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append(
                '<div class="halfnotePICtooltip">  </div>   = ' +
                dTempo);
        }
		if (note === "DH") {
            $('.data.' + contentPiece + '.' + contentPerformer + '.' +
                contentForm + '.' + contentChroma + '.' +
                contentKey).children(".toolTipBoxT").append(
                '<div class="halfnoteDOTPICtooltip">  </div>    = ' +
                dTempo);
        }
        $('.data.' + contentPiece + '.' + contentPerformer + '.' +
            contentForm + '.' + contentChroma + '.' + contentKey).children(
            ".toolTipBoxA").append(dAttack);
    };
    this.toolTIPSFX = function() {
        $('.data.' + contentPiece + '.' + contentPerformer + '.' +
            contentForm + '.' + contentChroma + '.' + contentKey).hover(
            function() {
                $('.toolTipBoxT').hide();
                $('.toolTipBoxA').hide();
                $(this).children("." + toolTipHolder).show();
            }, function() {
                $('.toolTipBoxT').hide();
                $('.toolTipBoxA').hide();
                $(this).children("." + toolTipHolder).hide();
            });
    };
}

//var Bachscatterplot_WTC1_Prelude_1_Minor = new scatterPoint('Bach','WTC1','Prelude','1','C#','Minor','2.268055556','42.6541763');
function scatterPoint(composer, piece, form, chroma, chromanote, key, aRate, pHeight) {
  var roundaRate = (Math.round(100 * aRate)) / 100;
  var roundpHeight = (Math.round(100 * pHeight)) / 100;
  this.form = form.toLowerCase();
  this.chroma = chroma.toLowerCase();
  this.chromanote = chromanote.toLowerCase();
  this.key = key.toLowerCase();
  this.composer = composer.toLowerCase();
  this.piece = piece;
  var contentSForm = "cS" + this.form.caps();
  var contentSChroma = "cS" + this.chroma.caps();
  var contentSKey = "cS" + this.key.caps();
  var contentForm = "c" + this.form.caps();
  var contentChroma  = "c" + this.chroma.caps();
  var contentKey = "c" + this.key.caps();
  this.name = "Bachscatterplot_" + this.piece + "_" + this.form.caps() + "_" + this.chroma.caps() + "_" +
    this.key.caps();
    var scatterPointClass = '.'+this.name;
  this.scatterdataInitialize = function() {
    $('#scatterplotDataContainer').append(
      '<div class="scatterdata ' + contentSChroma + " " + contentSForm + " " + contentSKey + " " + this.name + '"><div class="aRateDATA">' + roundaRate +
      '</div><div class="pHeightDATA">' + roundpHeight + 
      '</div><div class="toolTipBoxScatter">' + chromanote + ' ' + key + ' ' + form + ' ' + '</div></div>'
    );
    aRateTemp = $(scatterPointClass + ' .aRateDATA').text();
    pHeightTEMP = $(scatterPointClass + ' .pHeightDATA').text();
    $(scatterPointClass).css("top", (306-22*roundaRate)+"px");
    $(scatterPointClass).css("left", (-8+(19/2)*(roundpHeight-30))+"px");
    this.scattertoolTIPSFX = function() {
        $(scatterPointClass).hover(
            function() {
                $(this).toggleClass('hovered');
                $('.toolTipBoxScatter').hide();
                $('.scatterdata').css('z-index', 1);
				$(this).css('z-index', 200);
				$(this).children(".toolTipBoxScatter").show();
				$(this).children(".toolTipBoxScatter").css('z-index', 200);       
            }, function() {
                $('.toolTipBoxScatter').hide();
                $(this).children(".toolTipBoxScatter").hide();
            });
    };
       this.scatterfX = function() {
        $(scatterPointClass).hover(function() {
            if ($(this).hasClass('scatterClicked') === true) {

            } else {
                if (scatterColortoggle === "scatterColorOn") {
                    if ($(this).hasClass('cSMajor') === true) {
                        $(this).css("box-shadow", "0px 0px 10px red");
                    } else {
                        $(this).css("box-shadow", "0px 0px 10px blue");
                    }  
                } else {
                    $(this).css("box-shadow", "0px 0px 10px #000");
                }
            }
            
        }, function() {
            if ($(this).hasClass('scatterClicked') === true) {

            } else {
                $(this).css("box-shadow", "0px 0px 0px #000");
            }

        });
		$(scatterPointClass).click(function () {
				menuFORM = contentForm;
				menuCHROMA = contentChroma;
				menuKEY = contentKey;
				scatterFORM = contentSForm;
				scatterCHROMA = contentSChroma;
				scatterKEY = contentSKey;
				menuFunction();
				dataMenuFunction();
                $('.key.activeWhite, .blackkey.activeBlack').removeClass('menuclicked');
                    $('.' + menuCHROMA + 'menu').addClass('menuclicked');
                $('.lvlTHREEBUTTON').hide();
                $('.lvlTHREEBUTTON').removeClass('menuclicked');
                    $('.' + menuKEY + 'menu').addClass('menuclicked');
                    $('.' + menuKEY + 'menu').show();
                $('.lvlONEBUTTON').hide();
                $('.lvlONEBUTTON').removeClass('menuclicked');
                    $('.' + menuFORM + 'menu').addClass('menuclicked');
                    $('.' + menuFORM + 'menu').show();
			});
          };

  };
  list_of_scatterpoints.push(this.name);
}