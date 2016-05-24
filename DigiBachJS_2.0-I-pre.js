// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// This application was written to provide an interactive visualization of a large dataset for Bach's Well-Tempered Clavier,
// used in research projects by the MAPLE Lab
//
//
// Written by Kyle Gauder
 
// v2.0
// File 1: initial variables

// This application is split into multiple javascript files that load in sequence. 

// Local vs Online
// You can set this application to pull from a local directory for its images and mp3 files
// This is handled by the variable "urlPrefix" at the beginning of the HTML


// Type MODE
// You can set this app to only load specific portions, forcing it into different modes.
// The available modes are BachEditor, BachPerformer, and ALL 
if (appMODE == "bacheditorMODE") {
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBacheditor_WTC1";
} else if (appMODE == "bachperformerMODE") {
	var loadBachWTC = true;
	var loadBachEditor = false;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
} else if (appMODE == "allMODE") {
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
} else if (appMODE == "demoMODE") {
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
} else { //default values
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
}

// Menu variables
var menuFORM;
var menuCHROMA;
var menuKEY;
var menuEDITOR = "cPerf";
var menuScorechooser = "cCzernyscore";
var menuPLOT = "plotPerformer"
var fileType = "mp3";
var quickPerformer = false;
var menuPERFORMER = "cTureck";
var currentdataType = "tempoData";
var toolTipHolder = "toolTipBoxT";
var currentPiecePlaying = "NA";
var scatterColortoggle = "scatterColorOff";
//