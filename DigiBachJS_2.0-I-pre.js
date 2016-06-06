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
	var loadBachWTC = false;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBacheditor_WTC1";
	var menuPLOT = "plotEditor";
} else if (appMODE == "bachperformerMODE") {
	var loadBachWTC = true;
	var loadBachEditor = false;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
	var menuPLOT = "plotPerformer";
} else if (appMODE == "allMODE") {
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
	var menuPLOT = "plotCombined";
} else if (appMODE == "demoMODE") {
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
	var menuPLOT = "plotCombined";
} else { //default values
	var loadBachWTC = true;
	var loadBachEditor = true;
	var loadBachScatterplot = true;
	var menuPIECE = "cBach_WTC1";
	var menuPLOT = "plotCombined";
}

// Menu variables
var optiFORM = "default";
var optiCHROMA = "default";
var optiKEY = "default";
var menuFORM;
var menuCHROMA;
var menuKEY;
var menuEDITOR = "cPerf";
var menuScorechooser = "cCzernyscore";
var fileType = "mp3";
var quickPerformer = false;
var menuPERFORMER = "cTureck";
var currentdataType = "tempoData";
var toolTipHolder = "toolTipBoxT";
var currentPiecePlaying = "NA";
var scatterColortoggle = "scatterColorOff";
//
var loadOpti = "ON";
//
//with spaces
var masterList = ["Fischer", "Tureck", "Gould", "Martins",
	"Demus", "Richter", "Gulda", "", "Landowska", "Galling",
	"Hamilton", "Kirkpatrick", "Leonhardt", "Newman", "",
	"Bartok", "Bischoff", "Czerny", "Hughes", "Mugellini", "", "Bodky", "Keller"
];
var listPerformers = masterList.filter(Boolean);
// without spaces
var listofEditors = masterList.slice(15);
var listofPerformers = masterList.slice(0,14);
var listofCombined = masterList;
//
// Building Data "collections" for display purposes
var editorPoints = ".d20, .d19, .d18, .d17, .d16, .d15, .d14";
var performerPoints = ".d13, .d12, .d11, .d10, .d9, .d8, .d7, .d6, .d5, .d4, .d3, .d2, .d1";
var editorTicks = ".dx20, .dx19, .dx18, .dx17, .dx16, .dx15, .dx14";
var performerTicks = ".dx13, .dx12, .dx11, .dx10, .dx9, .dx8, .dx7, .dx6, .dx5, .dx4, .dx3, .dx2, .dx1";