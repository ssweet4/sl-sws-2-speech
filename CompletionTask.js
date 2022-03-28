/*********************************/
/***** Completion Task *****/
/*********************************/
/*

The Completion task presents participants with either
2 or 3-syllable sequences, with one of the syllables in
each sequence replaced with white noise. On each trial,
participants are played the sound sequence missing a syllable,
and are then played a number of other syllables. Participants must
select the syllable that they think best completes the sequence.

Outputs the final procedure variable (COMPLETION_FINAL) as
well as a folder for audio preloading (return_completion_sounds();)

Simply push COMPLETION_FINAL to your timeline in your html file,
and assign a variable to the preloading audio folder -
e.g., var completion_sounds = return_completion_sounds();

*/


var COMPLETION_VAR1 = [
	{pattern: 'sounds/test/kiqmgu.wav', option1: 'sounds/syllables/le_SWS.wav', option2: 'sounds/syllables/ne_SWS.wav', option3: 'sounds/syllables/te_SWS.wav',correct:0, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'}, ////
	{pattern: 'sounds/test/baqmku.wav', option1: 'sounds/syllables/bi_SWS.wav', option2: 'sounds/syllables/te_SWS.wav', option3: 'sounds/syllables/do_SWS.wav',correct:1, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/lekiqm.wav', option1: 'sounds/syllables/na_SWS.wav', option2: 'sounds/syllables/gi_SWS.wav', option3: 'sounds/syllables/bi_SWS.wav',correct:2, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/qmnatu.wav', option1: 'sounds/syllables/mu_SWS.wav', option2: 'sounds/syllables/lo_SWS.wav', option3: 'sounds/syllables/gu_SWS.wav',correct:0, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyeight'},
	{pattern: 'sounds/test/qmdo.wav', option1: 'sounds/syllables/da_SWS.wav', option2: 'sounds/syllables/lo_SWS.wav', option3: 'sounds/syllables/ba_SWS.wav',correct:1, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/moqm.wav', option1: 'sounds/syllables/tu_SWS.wav', option2: 'sounds/syllables/ki_SWS.wav', option3: 'sounds/syllables/da_SWS.wav',correct:2, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/guqm.wav', option1: 'sounds/syllables/ki_SWS.wav', option2: 'sounds/syllables/mu_SWS.wav', option3: 'sounds/syllables/le_SWS.wav',correct:0, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmbi.wav', option1: 'sounds/syllables/mo_SWS.wav', option2: 'sounds/syllables/gu_SWS.wav', option3: 'sounds/syllables/ku_SWS.wav',correct:1, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
	];

	var COMPLETION_VAR2 = [
	{pattern: 'sounds/test/kiqmgu.wav', option1: 'sounds/syllables/te_SWS.wav', option2: 'sounds/syllables/le_SWS.wav', option3: 'sounds/syllables/ne_SWS.wav',correct:1, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'},
	{pattern: 'sounds/test/baqmku.wav', option1: 'sounds/syllables/do_SWS.wav', option2: 'sounds/syllables/bi_SWS.wav', option3: 'sounds/syllables/te_SWS.wav',correct:2, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/lekiqm.wav', option1: 'sounds/syllables/bi_SWS.wav', option2: 'sounds/syllables/na_SWS.wav', option3: 'sounds/syllables/gi_SWS.wav',correct:0, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/qmnatu.wav', option1: 'sounds/syllables/gu_SWS.wav', option2: 'sounds/syllables/mu_SWS.wav', option3: 'sounds/syllables/lo_SWS.wav',correct:1, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyieght'},
	{pattern: 'sounds/test/qmdo.wav', option1: 'sounds/syllables/ba_SWS.wav', option2: 'sounds/syllables/da_SWS.wav', option3: 'sounds/syllables/lo_SWS.wav',correct:2, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/moqm.wav', option1: 'sounds/syllables/da_SWS.wav', option2: 'sounds/syllables/tu_SWS.wav', option3: 'sounds/syllables/ki_SWS.wav',correct:0, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/guqm.wav', option1: 'sounds/syllables/le_SWS.wav', option2: 'sounds/syllables/ki_SWS.wav', option3: 'sounds/syllables/mu_SWS.wav',correct:1, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmbi.wav', option1: 'sounds/syllables/ku_SWS.wav', option2: 'sounds/syllables/mo_SWS.wav', option3: 'sounds/syllables/gu_SWS.wav',correct:2, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
	];

	var COMPLETION_VAR3 = [
	{pattern: 'sounds/test/kiqmgu.wav', option1: 'sounds/syllables/ne_SWS.wav', option2: 'sounds/syllables/te_SWS.wav', option3: 'sounds/syllables/le_SWS.wav',correct:2, image: 'images/sqms.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyfive'},
	{pattern: 'sounds/test/baqmku.wav', option1: 'sounds/syllables/te_SWS.wav', option2: 'sounds/syllables/do_SWS.wav', option3: 'sounds/syllables/bi_SWS.wav',correct:0, image: 'images/sqms.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtysix'},
	{pattern: 'sounds/test/lekiqm.wav', option1: 'sounds/syllables/gi_SWS.wav', option2: 'sounds/syllables/bi_SWS.wav', option3: 'sounds/syllables/na_SWS.wav',correct:1, image: 'images/ssqm.png', tp_type:'third', length: 'triplet', trialnumber: 'thirtyseven'},
	{pattern: 'sounds/test/qmnatu.wav', option1: 'sounds/syllables/lo_SWS.wav', option2: 'sounds/syllables/gu_SWS.wav', option3: 'sounds/syllables/mu_SWS.wav',correct:2, image: 'images/qmss.png', tp_type:'one', length: 'triplet', trialnumber: 'thirtyeight'},
	{pattern: 'sounds/test/qmdo.wav', option1: 'sounds/syllables/lo_SWS.wav', option2: 'sounds/syllables/ba_SWS.wav', option3: 'sounds/syllables/da_SWS.wav',correct:0, image: 'images/qms.png', tp_type:'one', length: 'pair', trialnumber: 'thirtynine'},
	{pattern: 'sounds/test/moqm.wav', option1: 'sounds/syllables/ki_SWS.wav', option2: 'sounds/syllables/da_SWS.wav', option3: 'sounds/syllables/tu_SWS.wav',correct:1, image: 'images/sqm.png', tp_type:'one', length: 'pair', trialnumber: 'forty'},
	{pattern: 'sounds/test/guqm.wav', option1: 'sounds/syllables/mu_SWS.wav', option2: 'sounds/syllables/le_SWS.wav', option3: 'sounds/syllables/ki_SWS.wav',correct:2, image: 'images/sqm.png', tp_type:'third', length: 'pair', trialnumber: 'fortyone'},
	{pattern: 'sounds/test/qmbi.wav', option1: 'sounds/syllables/gu_SWS.wav', option2: 'sounds/syllables/ku_SWS.wav', option3: 'sounds/syllables/mo_SWS.wav',correct:0, image: 'images/qms.png', tp_type:'third', length: 'pair', trialnumber: 'fortytwo'}
	];

//potential counterbalance code
var COMPLETION_VAR = jsPsych.randomization.shuffle([COMPLETION_VAR1, COMPLETION_VAR2, COMPLETION_VAR3])[0]


//Introduction Screen

var COMPLETION_Intro = {
	type: 'html-button-response',
	stimulus: '<p>You will now listen to sound sequences made up of 2-3 sounds.</p>'+
			  '<p>Each sequence will be missing one sound. A beep will play in the place of this missing sound.</p>'+
			  '<p>On each trial, you will listen to one of these sound sequences. You will then listen to 3 <u>TARGET SOUNDS</u>. Each <u>TARGET SOUND</u> will be labeled with a number (for example, 1) on the screen as they play. Your task is to pick which <u>TARGET SOUND</u> best completes the sound sequence.</p>'+
			  '<p>To pick the <u>TARGET SOUND</u>, you will press the <b>button with the number that corresponds to that <u>TARGET SOUND</u>.</b></p>'+
				'<p>There will be a total of 10 trials.</p>'+
				'<p>When you are ready to begin, press CONTINUE.</p>',
	choices: ['Continue'],
	post_trial_gap: 250
};


//simple fixation
var Fixation = {
	type: 'html-keyboard-response',
	stimulus: '',
	prompt: '<p style=font-size:50px;">+</p>',
	trial_duration: 1000
};


/////////////////////////
// COMPLETION TRIALS ///
////////////////////////

//present pattern missing a syllable
var PATTERN_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('pattern'),
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>Pattern</p>'},
	choices: jsPsych.NO_KEYS,
	data: {WORD: jsPsych.timelineVariable('pattern'), CORRECTANS: jsPsych.timelineVariable('correct')},
	trial_duration: 2500,
	response_ends_trial: false
//	post_trial_gap: 1000
};

//present potential syllables
var Option1_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option1'),
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>1</p>'},
	data: {syllable: jsPsych.timelineVariable('option1')},
	trial_duration: 1500,
	response_ends_trial: false
	//post_trial_gap: 500
};

var Option2_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option2'),
	data: {syllable: jsPsych.timelineVariable('option2')},
	trial_duration: 1500,
	response_ends_trial: false,
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>2</p>'}
//	post_trial_gap: 500
};


var Option3_present = {
	type: 'audio-keyboard-response',
	stimulus: jsPsych.timelineVariable('option3'),
	data: {syllable: jsPsych.timelineVariable('option3')},
	trial_duration: 1500,
  response_ends_trial: false,
	prompt: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p>3</p>'}
//	post_trial_gap: 500
};


var COMPLETION_choice = {
	type: 'html-button-response',
	stimulus: function() { return '<img src = "' + jsPsych.timelineVariable('image', true) + '" ><p> Which sound best completes the pattern? (Press the corresponding number)</p>'},
	choices: ['1','2','3'],
	data: {
		designation: 'COMPLETION_RESPONSE',
		word: jsPsych.timelineVariable('pattern'),
		option1: jsPsych.timelineVariable('option1'),
		option2: jsPsych.timelineVariable('option2'),
		option3: jsPsych.timelineVariable('option3'),
		correctanswer: jsPsych.timelineVariable('correct'),
		transitionalpr: jsPsych.timelineVariable('tp_type'),
		trial: jsPsych.timelineVariable('trialnumber'),
		length: jsPsych.timelineVariable('length')
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed;
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};

var Completion_interim = {
	type:'html-button-response',
	stimulus: '<p>Press the button below when you are ready to continue.</p>',
	choices: ['Continue'],
	post_trial_gap: 500
};

//Push everything to the timeline
var COMPLETION_TRIALS_FINAL = {
	timeline: [Fixation, PATTERN_present, Option1_present, Option2_present, Option3_present, COMPLETION_choice, Completion_interim],
	timeline_variables: COMPLETION_VAR,
	randomize_order: true
}


//Final completed array
var COMPLETION_FINAL = {
	timeline: [COMPLETION_Intro, COMPLETION_TRIALS_FINAL]
};

//preloading audio
var COMPLETION_AUD = [
	'sounds/test/kiqmgu.wav', 'sounds/test/lekiqm.wav', 'sounds/test/qmnatu.wav',
	'sounds/test/baqmku.wav', 'sounds/test/moqm.wav', 'sounds/test/qmdo.wav',
	'sounds/test/guqm.wav', 'sounds/test/qmbi.wav',
	'sounds/syllables/le_SWS.wav','sounds/syllables/ne_SWS.wav','sounds/syllables/te_SWS.wav',
	'sounds/syllables/bi_SWS.wav','sounds/syllables/na_SWS.wav','sounds/syllables/gi_SWS.wav',
	'sounds/syllables/mu_SWS.wav','sounds/syllables/lo_SWS.wav','sounds/syllables/gu_SWS.wav',
	'sounds/syllables/ki_SWS.wav','sounds/syllables/do_SWS.wav','sounds/syllables/da_SWS.wav',
	'sounds/syllables/tu_SWS.wav', 'sounds/syllables/ba_SWS.wav','sounds/syllables/mo_SWS.wav',
	'sounds/syllables/ku_SWS.wav'
];

//preloading images
var COMPLETION_IMG = [
	'images/qms.png','images/qmss.png','images/sqm.png','images/sqms.png','images/ssqm.png'
];

////preload the syllables later used in transcription too?

//Function for Returning Audio Array for Preloading
function return_completion_sounds(){
	return COMPLETION_AUD;
};

//Function for returning images for preloading
function return_completion_images(){
	return COMPLETION_IMG;
};
