// Digitizing Bach Application
// A subset of the Emotional Piano Experiment
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// Git Repo: https://github.com/gauderkd/DigitizingBach
// file 4: Object injection for information per score
//
///////////////////////////////////////////////////////
//

var Bach_WTC1_Prelude_0_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '1', '0', 'C', 'Major', 'Q', 4);
var Bach_WTC1_Prelude_0_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '2', '0', 'C', 'Minor', 'Q', 4);
var Bach_WTC1_Prelude_1_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '3', '1', 'C#', 'Major', 'DQ', 6);
var Bach_WTC1_Prelude_1_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '4', '1', 'C#', 'Minor', 'Q', 1.854);
var Bach_WTC1_Prelude_2_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '5', '2', 'D', 'Major', 'Q', 4);
var Bach_WTC1_Prelude_2_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '6', '2', 'D', 'Minor', 'Q', 5.906);
var Bach_WTC1_Prelude_3_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '7', '3', 'E Flat', 'Major', 'Q', 4.5);
var Bach_WTC1_Prelude_3_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '8', '3', 'E Flat', 'Minor', 'H', 2.083);
var Bach_WTC1_Prelude_4_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '9', '4', 'E', 'Major', 'DQ', 3.091);
var Bach_WTC1_Prelude_4_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '10', '4', 'E', 'Minor', 'Q', 4);
var Bach_WTC1_Prelude_5_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '11', '5', 'F', 'Major', 'DQ', 6);
var Bach_WTC1_Prelude_5_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '12', '5', 'F', 'Minor', 'Q', 4);
var Bach_WTC1_Prelude_6_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '13', '6', 'F#', 'Major', 'DE', 3.031);
var Bach_WTC1_Prelude_6_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '14', '6', 'F#', 'Minor', 'Q', 3.938);
var Bach_WTC1_Prelude_7_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '15', '7', 'G', 'Major', 'Q', 6);
var Bach_WTC1_Prelude_7_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '16', '7', 'G', 'Minor', 'Q', 4.656);
var Bach_WTC1_Prelude_8_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '17', '8', 'A Flat', 'Major', 'Q', 2.333);
var Bach_WTC1_Prelude_8_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '18', '8', 'G#', 'Minor', 'DQ', 5.625);
var Bach_WTC1_Prelude_9_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '19', '9', 'A', 'Major', 'Q', 3.906);
var Bach_WTC1_Prelude_9_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '20', '9', 'A', 'Minor', 'DQ', 4.542);
var Bach_WTC1_Prelude_10_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '21', '10', 'B Flat', 'Major', 'Q', 8);
var Bach_WTC1_Prelude_10_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '22', '10', 'B Flat', 'Minor', 'Q', 2.75);
var Bach_WTC1_Prelude_11_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '23', '11', 'B', 'Major', 'Q', 4);
var Bach_WTC1_Prelude_11_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Prelude', '24', '11', 'B', 'Minor', 'Q', 2.063);
var Bach_WTC1_Fugue_0_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '1', '0', 'C', 'Major', 'Q', 3.375);
var Bach_WTC1_Fugue_0_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '2', '0', 'C', 'Minor', 'Q', 3.031);
var Bach_WTC1_Fugue_1_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '3', '1', 'C#', 'Major', 'Q', 3.344);
var Bach_WTC1_Fugue_1_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '4', '1', 'C#', 'Minor', 'H', 1.563);
var Bach_WTC1_Fugue_2_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '5', '2', 'D', 'Major', 'Q', 3.906);
var Bach_WTC1_Fugue_2_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '6', '2', 'D', 'Minor', 'Q', 3.208);
var Bach_WTC1_Fugue_3_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '7', '3', 'E Flat', 'Major', 'Q', 3.656);
var Bach_WTC1_Fugue_3_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '8', '3', 'E Flat', 'Minor', 'Q', 1.781);
var Bach_WTC1_Fugue_4_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '9', '4', 'E', 'Major', 'Q', 3.656);
var Bach_WTC1_Fugue_4_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '10', '4', 'E', 'Minor', 'Q', 4);
var Bach_WTC1_Fugue_5_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '11', '5', 'F', 'Major', 'DQ', 5.25);
var Bach_WTC1_Fugue_5_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '12', '5', 'F', 'Minor', 'Q', 2.125);
var Bach_WTC1_Fugue_6_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '13', '6', 'F#', 'Major', 'Q', 3.25);
var Bach_WTC1_Fugue_6_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '14', '6', 'F#', 'Minor', 'Q', 1.5);
var Bach_WTC1_Fugue_7_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '15', '7', 'G', 'Major', 'DQ', 4.563);
var Bach_WTC1_Fugue_7_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '16', '7', 'G', 'Minor', 'Q', 2.469);
var Bach_WTC1_Fugue_8_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '17', '8', 'A Flat', 'Major', 'Q', 3.406);
var Bach_WTC1_Fugue_8_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '18', '8', 'A Flat', 'Minor', 'Q', 2.188);
var Bach_WTC1_Fugue_9_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '19', '9', 'A', 'Major', 'DQ', 3.083);
var Bach_WTC1_Fugue_9_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '20', '9', 'A', 'Minor', 'Q', 2.845);
var Bach_WTC1_Fugue_10_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '21', '10', 'B Flat', 'Major', 'Q', 3.25);
var Bach_WTC1_Fugue_10_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '22', '10', 'B Flat', 'Minor', 'H', 2.188);
var Bach_WTC1_Fugue_11_Major_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '23', '11', 'B', 'Major', 'Q', 2.884);
var Bach_WTC1_Fugue_11_Minor_SCORE = new scoreFile('Bach', 'WTC1', 'Fugue', '24', '11', 'B', 'Minor', 'Q', 2.281);
