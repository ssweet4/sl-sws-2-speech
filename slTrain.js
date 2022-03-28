/**********************/
/** SL TRAINING TASK **/
/**********************/
/*

This is where participants are
trained on the statistical
language.

There are four three-minute training blocks.
During each training block, the stream will
stop two times. Participants must click
any button within a speciifed timeout window
to have the sequence re-commence. If no
button press is logged, the sequence moves
on automatically and it is marked as a timeout.

Stephen Van Hedger, June 2021
*/
//timing of pauses (less pauses?)
//assign folder based on counterbalance version

//AUDIO FILES//
var SLSTREAM = [
'sounds/sws_train/SEQ_01.wav',
'sounds/sws_train/SEQ_02.wav',
'sounds/sws_train/SEQ_03.wav',
'sounds/sws_train/SEQ_04.wav',
'sounds/sws_train/SEQ_05.wav',
'sounds/sws_train/SEQ_06.wav',
'sounds/sws_train/SEQ_07.wav',
'sounds/sws_train/SEQ_08.wav',
'sounds/sws_train/SEQ_09.wav',
'sounds/sws_train/SEQ_10.wav'
];

var idx=0;//for indexing audio file


//Function to assess RT to each pause
var currentRT;
var numRTs = 0; //for getting a sense of how many time the participant responds

var after_response_t = function(info){
	currentRT = info.rt;
	console.log(currentRT);
	numRTs += 1;
	};

////////////
// TRIALS //
////////////

//General Instructions
var sl_instruct = {
	type: 'html-keyboard-response',
	stimulus: '<p>In this part of the study, you will hear a stream of sounds.</p>'+
			  '<p>Please focus on these sounds, as you may be asked questions about them later.</p>'+
			  '<p>Occasionally, the sounds will pause for up to four seconds. When this happens, please press SPACEBAR as quickly as you can.</br>This helps ensure that you are paying attention to the sounds.</p>'+
			  '<p>This part of the study will take about 3 minutes to complete.</p>'+
			  '<p><strong>Press SPACEBAR to begin</strong></p>',
	choices: [' ']
};


//1. Fixation
var fixation = {
	type: 'html-keyboard-response',
	stimulus: '<p style="font-size: 40px;">+</p>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 1000
};

var pauses = [30000, 45000, 60000, 75000, 90000, 105000, 120000, 135000, 150000]; //shuffle this!
pauses = jsPsych.randomization.repeat(pauses, 1); //shuffle the array

var timeoutRecorded = 0; //for tallying timeouts
var t=0; //for indexing the pauses
var rt01; //for storing the correct RT in position 1
var rt02;//for storing the correct RT in position 2

//2. Reading Screen
var sl_screen = {
	type: 'html-keyboard-response',
	stimulus: '',
	on_start: function(){
		var listener_id_t = jsPsych.pluginAPI.getKeyboardResponse({
				callback_function: after_response_t,
				valid_responses: [' '],
				rt_method: 'performance',
				persist: true
	});
},
	prompt: function(){
		//function for initiating the sequence
		var initialSetup = 1000; //relative delay before audio plays
		var pauseTime01 = pauses[t+0]; //what is the pause time?
		var pauseTime02 = pauses[t+1]; //what is the second pause time?
		var resumeTime01 = pauseTime01+4000; //resume after 2000ms
		var resumeTime02 = pauseTime02+4000; //resume after 2000ms

		setTimeout(function(){
			var audio = new Audio(SLSTREAM[idx]);
			audio.src = SLSTREAM[idx];
			audio.play();
			audio.addEventListener("canplaythrough", function () {
        		setTimeout(function(){
            	audio.pause();
        		},
        		pauseTime01);
				setTimeout(function(){
				audio.play();
				if(currentRT-(initialSetup+pauseTime01) < 4000 && currentRT-(initialSetup+pauseTime01) > 150){
					console.log("valid RT!")
					rt01 = currentRT-(initialSetup+pauseTime01);
				} else {
					console.log("timeout!")
					timeoutRecorded += 1;
					rt01 = null;
				}
				},
				resumeTime01);
				setTimeout(function(){
				audio.pause();
				},
				pauseTime02);
				setTimeout(function(){
				audio.play();
				if(currentRT-(initialSetup+pauseTime02) < 4000 && currentRT-(initialSetup+pauseTime02) > 150){
					console.log("valid RT!")
					rt02 = currentRT-(initialSetup+pauseTime02);
				} else {
					console.log("timeout!")
					timeoutRecorded += 1;
					rt02 = null;
				}
				},
				resumeTime02);
				}, false);
			}, initialSetup);

			return '<div><audio id="slsound" autoplay="false"></audio></div>';
	},
	trial_duration: 184000,
	choices: jsPsych.NO_KEYS,
	on_finish: function(data){
		var timeoutDATA = {
		designation: 'SL-TRAIN',
		timeouts: timeoutRecorded,
		pause_rt01: rt01,
		pause_rt02: rt02,
		train_file: SLSTREAM[idx],
		numKeyPress: numRTs
		};
		console.log(timeoutDATA);
		jsPsych.data.addDataToLastTrial(timeoutDATA);

	idx += 1; //update indexing
	t += 2 //update pause times
	numRTs = 0; //reset number of logged RTs
	timeoutRecorded = 0; //reset the timeouts from prior trials
	}
}

//Define Training Procedure Timeline
var sl_train_proc = {
	timeline: [fixation, sl_screen]
};

///////////////////////
//FINAL TIMELINE VARS//
///////////////////////

var slTrain = {
	timeline: [sl_instruct, sl_train_proc]
};



//function for returning the audio folder for preloading
function return_slTrain_folder(){
		return SLSTREAM;
};
