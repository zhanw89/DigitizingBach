# DigitizingBach

![Bach Portrait](https://github.com/gauderkd/DigitizingBach/blob/master/Elements/Bachpor.png)

Created for the [Maple Lab](https://maplelab.net/) , McMaster University

Written by [Kyle Gauder](https://github.com/gauderkd)


The purpose of this application is to visualize a large dataset in an easy-to-understand way.

It organizes a lot of data from Bach's Well-Tempered Clavier into a contained tool. The **Piano Menu** at the top left is the main controller; Form switches between Preludes and Fugues, Key switches between Major and Minor, and the Keyboard chooses Chroma (ie B, F#, A). After making three selections, the applet should populate with all the relevant information. This includes tempo data across performers and editors (tempo plot on the bottom right), and a snippet image of the relevant score.

[You can see it live here!](https://maplelab.net/bachtempi)

![Example image of applet](https://github.com/gauderkd/DigitizingBach/blob/master/Elements/BachTempi_Example2.png)

_Note that the current stable "viewable" build is behind the development in this repo_

## Features:
* Interactive piano menu
 * Allows you to quickly select one of the 48 pieces in Bach's Well-Tempered Clavier
* Info about all performers and editors (portrait, birth/death dates, short bios)
* Score Display featuring snippets from different editors
 * Bartok, Bischoff, Czerny, Hughes, Mugellini, and Palmer
* Tempo plot that displays Timing information taken from Palmer's edition of WTC
 * Plot changes dynamically based on piano menu piece selection
 * Can toggle between showing just the performers, just the editors, or both all together
 * Can toggle between showing attack rate vs beats-per-minute
 * Plot data is normalized for common note duration, but tooltips show Palmer's original data.
 * Can click any dot to show information about that performer/editor
* Cue Visualization plot
 * Scatter plot (based on Bischoff's timings) showing average pitch height vs attack rate for all 48 pieces
 * Can click any data point to automatically select that respective piece.
 * Can toggle between showing colouring for major vs minor pieces
 * Can select between showing just Preludes, just Fugues, or all of them
* Hotkeys!
 * Can use left/right arrows to select chroma/pitch on Piano menu
 * "M" toggles between Major/Minor
 * "P" toggles between Prelude/Fugue
 * ",/<" and "./>" scroll between editor scores
 * SHIFT key toggles between Tempo and Attack rate for tempo plot
* Mobile version!


### Quick Explanation of controls
All data is pulled from Dr. Willard A. Palmer's edition and analysis of Bach's Well-Tempered Clavier. For plotting purposes, tempi are calculated for common note duration. 

If you over over any data point, you can see the original Palmer tempo (and what note timing it was encoded for) 

If you click any data point, you will be able to see some information about that performer editor on the bottom left (Portrait, Birth/Death dates, recording date, bio)

Clicking the toggle changes the plot to show Attack Rate.

Clicking **Plot** brings down a scatterplot of the Attack Rates vs Average Pitch Height (these numbers are based on Bischoff's edition). Clicking any one of these data points automatically changes the menu to that selection (thus updating the tempo plot for that piece). The toggle changes the plot display to show Major vs Minor in color

Hotkeys for quick navigation are available to use (there is an image on the bottom of the applet page)

### Hotkeys
- "," = Scroll score editor to the left
- "." = Scroll score editor to the right
- "M" = Toggle between Major and Minor
- "P" = Toggle between Prelude and Fugue
- "<-" = Scroll Key backwards
- "->" = Scroll Key Forwards
- "~,1,2...0,-" = Each key along the top keyboard row chooses a key from C to B, in order.
- "Z,X,C,V" = Each chooses between 1 of 4 menu selections (Form/Key/Chroma) for quick navigation

### Options
"allMODE" , "mainMODE", "bacheditorMODE" , "bachperformerMODE"
## About the Project
Bach's Well-Tempered Clavier is a collection of 48 pieces written in 1722 by Johann Sebastian Bach. It is split between Preludes and Fugues and has a Major and Minor key piece for every pitch. It was written as a sort of learning study for the harpsichord, clavichord, and piano.

One of the major projects of the Maple Lab is focused on exploring how music connects with emotion and communication. Music shares many communicative parallels, for instance happiness is conveyed in both speech and music by an increased rate of articulation. The Well-Tempered Clavier offers a very unique dataset to work with as not only does it balances across key and chroma, but because Bach did not write down preferred tempo markings (as such a thing did not exist at the time), people are free to interpret how fast or slow they should play the pieces for themselves. Many performers have recorded their own performances of the entire set, and many editors over the years have republished the work with their own preferred tempo markings. This creates a huge set of data to research and explore any patterns that may lie within.

This project was based on a larger research project in the MAPLE Lab [exploring music and emotion](https://maplelab.net/overview/music-and-emotion/).

_Development of this tool was funded by an NSERC Undergraduate Student Research Award Grant_
---
_Special thanks to Marsha Natadiria for crosschecking data for errors and collecting information on all performers and editors_
