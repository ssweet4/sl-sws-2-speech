/***********************************/
/***** Familiarity Rating Task *****/
/***********************************/

/*
Here, participants are presented with
disyllabic and trisyllabic combinations, and must determine
which of the combinations presented to them belongs to the language
they heard in the first part of the study.

There are 34 total trials (randomized):
22 2-AFC Trials
12 4-AFC Trials


*/


var twoafc_count = 0;
var fourafc_count = 0;

var twoAFC_array1 = [
	{word1: 'sounds/test/kilegu.wav', word2: 'sounds/test/leneba.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'one'},
	{word1: 'sounds/test/kilebi.wav', word2: 'sounds/test/lekibi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'two'},
	{word1: 'sounds/test/biguki.wav', word2: 'sounds/test/bigute.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'three'},
	{word1: 'sounds/test/tukigu.wav', word2: 'sounds/test/gubile.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'four'},
	{word1: 'sounds/test/munatu.wav', word2: 'sounds/test/temumo.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'five'},
	{word1: 'sounds/test/gimona.wav', word2: 'sounds/test/bateku.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'six'},
	{word1: 'sounds/test/modane.wav', word2: 'sounds/test/lonaku.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'seven'},
	{word1: 'sounds/test/gukido.wav', word2: 'sounds/test/lodogi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'eight'},
	{word1: 'sounds/test/kilegu.wav', word2: 'sounds/test/dokibi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'nine'},
	{word1: 'sounds/test/lonaku.wav', word2: 'sounds/test/lekibi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'ten'},
	{word1: 'sounds/test/biguki.wav', word2: 'sounds/test/lebabi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'eleven'},
	{word1: 'sounds/test/gimona.wav', word2: 'sounds/test/gubile.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twelve'},
	{word1: 'sounds/test/munatu.wav', word2: 'sounds/test/logule.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'thirteen'},
	{word1: 'sounds/test/mudane.wav', word2: 'sounds/test/bateku.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'fourteen'},
	{word1: 'sounds/test/modane.wav', word2: 'sounds/test/kilebi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'fifteen'},
	{word1: 'sounds/test/gituku.wav', word2: 'sounds/test/lodogi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'sixteen'},
	{word1: 'sounds/test/legu.wav', word2: 'sounds/test/kigi.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'seventeen'},
	{word1: 'sounds/test/lebi.wav', word2: 'sounds/test/kibi.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'eighteen'},
	{word1: 'sounds/test/guki.wav', word2: 'sounds/test/nagu.wav', correct:0, tptype:'third', length:'pair', trialnumber: 'nineteen'},
	{word1: 'sounds/test/nele.wav', word2: 'sounds/test/bile.wav', correct:1, tptype:'third', length:'pair', trialnumber: 'twenty'},
	{word1: 'sounds/test/natu.wav', word2: 'sounds/test/mumo.wav', correct:0, tptype:'one', length:'pair', trialnumber: 'twentyone'},
	{word1: 'sounds/test/gumo.wav', word2: 'sounds/test/bate.wav', correct:1, tptype:'one', length:'pair', trialnumber: 'twentytwo'}
	];

	var twoAFC_array2 = [
	{word1: 'sounds/test/leneba.wav', word2: 'sounds/test/kilegu.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'one'},
	{word1: 'sounds/test/lekibi.wav', word2: 'sounds/test/kilebi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'two'},
	{word1: 'sounds/test/bigute.wav', word2: 'sounds/test/biguki.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'three'},
	{word1: 'sounds/test/gubile.wav', word2: 'sounds/test/tukigu.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'four'},
	{word1: 'sounds/test/temumo.wav', word2: 'sounds/test/munatu.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'five'},
	{word1: 'sounds/test/bateku.wav', word2: 'sounds/test/gimona.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'six'},
	{word1: 'sounds/test/lonaku.wav', word2: 'sounds/test/modane.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'seven'},
	{word1: 'sounds/test/lodogi.wav', word2: 'sounds/test/gukido.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'eight'},
	{word1: 'sounds/test/dokibi.wav', word2: 'sounds/test/kilegu.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'nine'},
	{word1: 'sounds/test/lekibi.wav', word2: 'sounds/test/lonaku.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'ten'},
	{word1: 'sounds/test/lebabi.wav', word2: 'sounds/test/biguki.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'eleven'},
	{word1: 'sounds/test/gubile.wav', word2: 'sounds/test/gimona.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twelve'},
	{word1: 'sounds/test/logule.wav', word2: 'sounds/test/munatu.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'thirteen'},
	{word1: 'sounds/test/bateku.wav', word2: 'sounds/test/mudane.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'fourteen'},
	{word1: 'sounds/test/kilebi.wav', word2: 'sounds/test/modane.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'fifteen'},
	{word1: 'sounds/test/lodogi.wav', word2: 'sounds/test/gituku.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'sixteen'},
	{word1: 'sounds/test/kigi.wav', word2: 'sounds/test/legu.wav', correct:1, tptype:'third', length: 'pair', trialnumber: 'seventeen'},
	{word1: 'sounds/test/kibi.wav', word2: 'sounds/test/lebi.wav', correct:0, tptype:'third', length: 'pair', trialnumber: 'eighteen'},
	{word1: 'sounds/test/nagu.wav', word2: 'sounds/test/guki.wav', correct:1, tptype:'third', length: 'pair', trialnumber: 'nineteen'},
	{word1: 'sounds/test/bile.wav', word2: 'sounds/test/nele.wav', correct:0, tptype:'third', length: 'pair', trialnumber: 'twenty'},
	{word1: 'sounds/test/mumo.wav', word2: 'sounds/test/natu.wav', correct:1, tptype:'one', length: 'pair', trialnumber: 'twentyone'},
	{word1: 'sounds/test/bate.wav', word2: 'sounds/test/gumo.wav', correct:0, tptype:'one', length: 'pair', trialnumber: 'twentytwo'}
	];

//potential counterbalance code
var twoAFC_array = jsPsych.randomization.shuffle([twoAFC_array1, twoAFC_array2])[0]
//console.log(twoAFC_array);



var fourAFC_array1 = [
	{word1: 'sounds/test/kilegu.wav', word2: 'sounds/test/temumo.wav', word3: 'sounds/test/lebabi.wav', word4: 'sounds/test/logule.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/gukido.wav', word2: 'sounds/test/gubile.wav', word3: 'sounds/test/mudane.wav', word4: 'sounds/test/dokibi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/leneba.wav', word2: 'sounds/test/lebabi.wav', word3: 'sounds/test/biguki.wav', word4: 'sounds/test/gituku.wav', correct:2, tptype:'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/temumo.wav', word2: 'sounds/test/gimona.wav', word3: 'sounds/test/kilebi.wav', word4: 'sounds/test/lekibi.wav', correct:3, tptype:'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/munatu.wav', word2: 'sounds/test/leneba.wav', word3: 'sounds/test/lonaku.wav', word4: 'sounds/test/gituku.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/dokibi.wav', word2: 'sounds/test/bateku.wav', word3: 'sounds/test/bigute.wav', word4: 'sounds/test/kilebi.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/logule.wav', word2: 'sounds/test/tukigu.wav', word3: 'sounds/test/modane.wav', word4: 'sounds/test/gukido.wav', correct:2, tptype:'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/bigute.wav', word2: 'sounds/test/tukigu.wav', word3: 'sounds/test/mudane.wav', word4: 'sounds/test/lodogi.wav', correct:3, tptype:'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/dane.wav', word2: 'sounds/test/dado.wav', word3: 'sounds/test/nalo.wav', word4: 'sounds/test/tebi.wav', correct:0, tptype:'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/baku.wav', word2: 'sounds/test/lodo.wav', word3: 'sounds/test/kiba.wav', word4: 'sounds/test/dotu.wav', correct:1, tptype:'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/gulo.wav', word2: 'sounds/test/nemu.wav', word3: 'sounds/test/kile.wav', word4: 'sounds/test/tuki.wav', correct:2, tptype:'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/tele.wav', word2: 'sounds/test/gida.wav', word3: 'sounds/test/kubi.wav', word4: 'sounds/test/bigu.wav', correct:3, tptype:'third', length: 'pair', trialnumber: 'thirtyfour'}
];


	var fourAFC_array2 = [
	{word1: 'sounds/test/logule.wav', word2: 'sounds/test/kilegu.wav', word3: 'sounds/test/temumo.wav', word4: 'sounds/test/lebabi.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/dokibi.wav', word2: 'sounds/test/gukido.wav', word3: 'sounds/test/gubile.wav', word4: 'sounds/test/mudane.wav', correct:2, tptype:'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/gituku.wav', word2: 'sounds/test/leneba.wav', word3: 'sounds/test/lebabi.wav', word4: 'sounds/test/biguki.wav', correct:3, tptype:'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/lekibi.wav', word2: 'sounds/test/temumo.wav', word3: 'sounds/test/gimona.wav', word4: 'sounds/test/kilebi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/gituku.wav', word2: 'sounds/test/munatu.wav', word3: 'sounds/test/leneba.wav', word4: 'sounds/test/lonaku.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/kilebi.wav', word2: 'sounds/test/dokibi.wav', word3: 'sounds/test/bateku.wav', word4: 'sounds/test/bigute.wav', correct:2, tptype:'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/gukido.wav', word2: 'sounds/test/logule.wav', word3: 'sounds/test/tukigu.wav', word4: 'sounds/test/modane.wav', correct:3, tptype:'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/lodogi.wav', word2: 'sounds/test/bigute.wav', word3: 'sounds/test/tukigu.wav', word4: 'sounds/test/mudane.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/tebi.wav', word2: 'sounds/test/dane.wav', word3: 'sounds/test/dado.wav', word4: 'sounds/test/nalo.wav', correct:1, tptype:'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/dotu.wav', word2: 'sounds/test/baku.wav', word3: 'sounds/test/lodo.wav', word4: 'sounds/test/kiba.wav', correct:2, tptype:'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/tuki.wav', word2: 'sounds/test/gulo.wav', word3: 'sounds/test/nemu.wav', word4: 'sounds/test/kile.wav', correct:3, tptype:'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/bigu.wav', word2: 'sounds/test/tele.wav', word3: 'sounds/test/gida.wav', word4: 'sounds/test/kubi.wav', correct:0, tptype:'third', length: 'pair', trialnumber: 'thirtyfour'}
	];



	var fourAFC_array3 = [
	{word1: 'sounds/test/lebabi.wav', word2: 'sounds/test/logule.wav', word3: 'sounds/test/kilegu.wav', word4: 'sounds/test/temumo.wav', correct:2, tptype:'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/mudane.wav', word2: 'sounds/test/dokibi.wav', word3: 'sounds/test/gukido.wav', word4: 'sounds/test/gubile.wav', correct:3, tptype:'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/biguki.wav', word2: 'sounds/test/gituku.wav', word3: 'sounds/test/leneba.wav', word4: 'sounds/test/lebabi.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/kilebi.wav', word2: 'sounds/test/lekibi.wav', word3: 'sounds/test/temumo.wav', word4: 'sounds/test/gimona.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/lonaku.wav', word2: 'sounds/test/gituku.wav', word3: 'sounds/test/munatu.wav', word4: 'sounds/test/leneba.wav', correct:2, tptype:'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/bigute.wav', word2: 'sounds/test/kilebi.wav', word3: 'sounds/test/dokibi.wav', word4: 'sounds/test/bateku.wav', correct:3, tptype:'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/modane.wav', word2: 'sounds/test/gukido.wav', word3: 'sounds/test/logule.wav', word4: 'sounds/test/tukigu.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/mudane.wav', word2: 'sounds/test/lodogi.wav', word3: 'sounds/test/bigute.wav', word4: 'sounds/test/tukigu.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/nalo.wav', word2: 'sounds/test/tebi.wav', word3: 'sounds/test/dane.wav', word4: 'sounds/test/dado.wav', correct:2, tptype:'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/kiba.wav', word2: 'sounds/test/dotu.wav', word3: 'sounds/test/baku.wav', word4: 'sounds/test/lodo.wav', correct:3, tptype:'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/kile.wav', word2: 'sounds/test/tuki.wav', word3: 'sounds/test/gulo.wav', word4: 'sounds/test/nemu.wav', correct:0, tptype:'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/kubi.wav', word2: 'sounds/test/bigu.wav', word3: 'sounds/test/tele.wav', word4: 'sounds/test/gida.wav', correct:1, tptype:'third', length: 'pair', trialnumber: 'thirtyfour'}
	];


	var fourAFC_array4 = [
	{word1: 'sounds/test/temumo.wav', word2: 'sounds/test/lebabi.wav', word3: 'sounds/test/logule.wav', word4: 'sounds/test/kilegu.wav', correct:3, tptype:'third', length: 'triplet', trialnumber: 'twentythree'},
	{word1: 'sounds/test/gubile.wav', word2: 'sounds/test/mudane.wav', word3: 'sounds/test/dokibi.wav', word4: 'sounds/test/gukido.wav', correct:0, tptype:'third', length: 'triplet', trialnumber: 'twentyfour'},
	{word1: 'sounds/test/lebabi.wav', word2: 'sounds/test/biguki.wav', word3: 'sounds/test/gituku.wav', word4: 'sounds/test/leneba.wav', correct:1, tptype:'third', length: 'triplet', trialnumber: 'twentyfive'},
	{word1: 'sounds/test/gimona.wav', word2: 'sounds/test/kilebi.wav', word3: 'sounds/test/lekibi.wav', word4: 'sounds/test/temumo.wav', correct:2, tptype:'third', length: 'triplet', trialnumber: 'twentysix'},
	{word1: 'sounds/test/leneba.wav', word2: 'sounds/test/lonaku.wav', word3: 'sounds/test/gituku.wav', word4: 'sounds/test/munatu.wav', correct:3, tptype:'one', length: 'triplet', trialnumber: 'twentyseven'},
	{word1: 'sounds/test/bateku.wav', word2: 'sounds/test/bigute.wav', word3: 'sounds/test/kilebi.wav', word4: 'sounds/test/dokibi.wav', correct:0, tptype:'one', length: 'triplet', trialnumber: 'twentyeight'},
	{word1: 'sounds/test/tukigu.wav', word2: 'sounds/test/modane.wav', word3: 'sounds/test/gukido.wav', word4: 'sounds/test/logule.wav', correct:1, tptype:'one', length: 'triplet', trialnumber: 'twentynine'},
	{word1: 'sounds/test/tukigu.wav', word2: 'sounds/test/mudane.wav', word3: 'sounds/test/lodogi.wav', word4: 'sounds/test/bigute.wav', correct:2, tptype:'one', length: 'triplet', trialnumber: 'thirty'},
	{word1: 'sounds/test/dado.wav', word2: 'sounds/test/nalo.wav', word3: 'sounds/test/tebi.wav', word4: 'sounds/test/dane.wav', correct:3, tptype:'one', length: 'pair', trialnumber: 'thirtyone'},
	{word1: 'sounds/test/lodo.wav', word2: 'sounds/test/kiba.wav', word3: 'sounds/test/dotu.wav', word4: 'sounds/test/baku.wav', correct:0, tptype:'one', length: 'pair', trialnumber: 'thirtytwo'},
	{word1: 'sounds/test/nemu.wav', word2: 'sounds/test/kile.wav', word3: 'sounds/test/tuki.wav', word4: 'sounds/test/gulo.wav', correct:1, tptype:'third', length: 'pair', trialnumber: 'thirtythree'},
	{word1: 'sounds/test/gida.wav', word2: 'sounds/test/kubi.wav', word3: 'sounds/test/bigu.wav', word4: 'sounds/test/tele.wav', correct:2, tptype:'third', length: 'pair', trialnumber: 'thirtyfour'}
	];


//potential counterbalance code
var fourAFC_array = jsPsych.randomization.shuffle([fourAFC_array1, fourAFC_array2, fourAFC_array3, fourAFC_array4])[0]
//console.log(fourAFC_array);

//randomize the arrays
twoAFC_array = jsPsych.randomization.repeat(twoAFC_array, 1);
fourAFC_array = jsPsych.randomization.repeat(fourAFC_array, 1);




//instructions
var AFC_instruct = {
	type: 'html-button-response',
	stimulus: '<p>Welcome to the second part of the study.</p>' +
			  '<p>In each trial, you will listen to either 2 or 4 short sounds. Each sound will be labeled with a number (for example, 1) on the screen. You will then be asked to choose which one is the most familiar based off of the stream of sounds that <b>you heard in the previous part of the study</b>.</p>'+
				'<p>You will choose which sound is the most familiar by pressing the button with the number that corresponds to that sound.</p>'+
				'<p>There are 34 trials in total.</p>',
	choices: ['Begin']
};


//simple fixation
var Fixation = {
	type: 'html-keyboard-response',
	stimulus: '',
	prompt: '<p style=font-size:50px;">+</p>',
	trial_duration: 1000
};





//////////////////////////
//Trials for 2-item AFC//
/////////////////////////

var TWOafc_playone = {
	type: 'audio-keyboard-response',
	stimulus: function(){return twoAFC_array[twoafc_count].word1;},
	data: {word: function(){return twoAFC_array[twoafc_count].word1;}, CORRECTANS: function(){return twoAFC_array[twoafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>1</p>',
	post_trial_gap: 750
};

var TWOafc_playtwo = {
	type: 'audio-keyboard-response',
	stimulus: function(){return twoAFC_array[twoafc_count].word2;},
	data: {word: function(){return twoAFC_array[twoafc_count].word2;}, CORRECTANS: function(){return twoAFC_array[twoafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>2</p>',
	post_trial_gap: 750
};

var TWOafc_choice = {
	type: 'html-button-response',
	stimulus:'<p> Which sound was the most familiar? (Press the corresponding number)</p>',
	choices: ['1','2'],
	data: {
		designation: 'AFC_RESPONSE',
		word: function(){return twoAFC_array[twoafc_count].word1;},
		word2: function(){return twoAFC_array[twoafc_count].word2;},
		transitionalpr: function(){return twoAFC_array[twoafc_count].tptype;},
		length: function(){return twoAFC_array[twoafc_count].length;},
		trial: function(){return twoAFC_array[twoafc_count].trialnumber;},
		correctanswer: function(){return twoAFC_array[twoafc_count].correct;}
	//	transitionalpr: function(){return twoAFC_array[twoafc_count].tptype;} ////
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed; ////////
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
		twoafc_count += 1;
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};




//////////////////////////
//Trials for 4-item AFC//
/////////////////////////

var FOURafc_playone = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word1;},
	data: {word: function(){return fourAFC_array[fourafc_count].word1;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>1</p>',
	post_trial_gap: 750
};

var FOURafc_playtwo = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word2;},
	data: {word: function(){return fourAFC_array[fourafc_count].word2;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>2</p>',
	post_trial_gap: 750
};

var FOURafc_playthree = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word3;},
	data: {word: function(){return fourAFC_array[fourafc_count].word3;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>3</p>',
	post_trial_gap: 750
};

var FOURafc_playfour = {
	type: 'audio-keyboard-response',
	stimulus: function(){return fourAFC_array[fourafc_count].word4;},
	data: {word: function(){return fourAFC_array[fourafc_count].word4;}, CORRECTANS: function(){return fourAFC_array[fourafc_count].correct;}},
	trial_ends_after_audio: true,
	response_ends_trial: false,
	prompt: '<p>4</p>',
	post_trial_gap: 750
};


//afc judgement screen
var FOURAFC_choice = {
	type: 'html-button-response',
	stimulus:'<p> Which sound was the most familiar? (Press the corresponding number)</p>',
	choices: ['1','2','3','4'],
	data: {
		designation: 'AFC_RESPONSE',
		word1: function(){return fourAFC_array[fourafc_count].word1;},
		word2: function(){return fourAFC_array[fourafc_count].word2;},
		word3: function(){return fourAFC_array[fourafc_count].word3;},
		word4: function(){return fourAFC_array[fourafc_count].word4;},
		length: function(){return fourAFC_array[fourafc_count].length;},
		trial: function(){return fourAFC_array[fourafc_count].trialnumber;},
		length: function(){return fourAFC_array[fourafc_count].length;},
		correctanswer: function(){return fourAFC_array[fourafc_count].correct;}
	},
	on_finish: function(data) {
		var button_pressed = data.button_pressed;
		if (button_pressed == data.correctanswer) {
			data.correct = 1;
		} else {
			data.correct = 0;
		}
		fourafc_count += 1;
	},
	post_trial_gap: 1000,
	response_ends_trial: true
};

var TWOAFC_proc = {
	timeline: [Fixation, TWOafc_playone, TWOafc_playtwo, TWOafc_choice]
};

var FOURAFC_proc = {
	timeline: [Fixation, FOURafc_playone, FOURafc_playtwo, FOURafc_playthree, FOURafc_playfour, FOURAFC_choice]
};

////////////////////////////

///got stuck when '3' showed up

var afc_total_trials = [TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 TWOAFC_proc,TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc, TWOAFC_proc,
 FOURAFC_proc,FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc,
 FOURAFC_proc, FOURAFC_proc, FOURAFC_proc, FOURAFC_proc]

 var Afc_trials = jsPsych.randomization.repeat(afc_total_trials, 1)
//console.log(Afc_trials)

var afc_trials = {
 timeline: Afc_trials
};

var RANDOMIZE_twofour_trials = {
	timeline: [AFC_instruct, afc_trials]
};



//final familiarity procedure will fixation end up in wrong place?
//do the arrays for 2afc and 4afc need to be combined?
/*
var AFC_PROC = {
	timeline: [Fixation, RANDOMIZE_twofour_trials],
	timeline_variables: AFC_array,
	randomize_order: true
};

//share

var AFC_PROC_FINAL = {
	timeline: [AFC_instruct, AFC_PROC]
};
*/

//Preloading Medis
var AFC_AUD = [
	'sounds/test/kilegu.wav', 'sounds/test/leneba.wav', 'sounds/test/lekibi.wav',
	'sounds/test/kilebi.wav', 'sounds/test/biguki.wav', 'sounds/test/bigute.wav',
	'sounds/test/gubile.wav', 'sounds/test/tukigu.wav', 'sounds/test/munatu.wav',
	'sounds/test/temumo.wav', 'sounds/test/bateku.wav', 'sounds/test/gimona.wav',
	'sounds/test/modane.wav', 'sounds/test/lonaku.wav', 'sounds/test/lodogi.wav',
	'sounds/test/gukido.wav', 'sounds/test/dokibi.wav', 'sounds/test/lebabi.wav',
	'sounds/test/logule.wav', 'sounds/test/mudane.wav', 'sounds/test/gituku.wav',
	'sounds/test/legu.wav', 'sounds/test/kigi.wav', 'sounds/test/kibi.wav',
	'sounds/test/lebi.wav', 'sounds/test/guki.wav', 'sounds/test/nagu.wav',
	'sounds/test/bile.wav', 'sounds/test/nele.wav', 'sounds/test/natu.wav',
	'sounds/test/mumo.wav', 'sounds/test/bate.wav', 'sounds/test/gumo.wav',
	'sounds/test/gituku.wav', 'sounds/test/dane.wav', 'sounds/test/lodo.wav',
	'sounds/test/kile.wav', 'sounds/test/bigu.wav', 'sounds/test/nalo.wav',
	'sounds/test/baku.wav', 'sounds/test/tuki.wav', 'sounds/test/tele.wav',
	'sounds/test/kiba.wav', 'sounds/test/dado.wav', 'sounds/test/dotu.wav',
	'sounds/test/gulo.wav', 'sounds/test/kubi.wav', 'sounds/test/tebi.wav',
	'sounds/test/nemu.wav', 'sounds/test/gida.wav'
];


function return_AFC_sounds(){
	return AFC_AUD;
};
