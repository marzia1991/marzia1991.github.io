//carico video e suoni
//suono porta che cigola
var portaaudio = document.createElement('audio');

var portaaudioperc = document.createElement('source');
portaaudioperc.src="assets/audioevideo/suonoporta.mp3";

portaaudio.appendChild(portaaudioperc);
portaaudio.loop=false;

//suono radio
//i'm gonna be
var radioaudio1 = document.createElement('audio');

var radioaudioperc1 = document.createElement('source');
radioaudioperc1.src="assets/audioevideo/imgonnabe.mp3";

radioaudio1.appendChild(radioaudioperc1);
radioaudio1.loop=false;

//panic station
var radioaudio2 = document.createElement('audio');

var radioaudioperc2 = document.createElement('source');
radioaudioperc2.src="assets/audioevideo/panicstation.mp3";

radioaudio2.appendChild(radioaudioperc2);
radioaudio2.loop=false;

//no angels
var radioaudio3 = document.createElement('audio');

var radioaudioperc3 = document.createElement('source');
radioaudioperc3.src="assets/audioevideo/noangels.mp3";

radioaudio3.appendChild(radioaudioperc3);
radioaudio3.loop=false;

//allarme cassaforte
var cassaforteaudio = document.createElement('audio');

var cassaforteaudioperc = document.createElement('source');
cassaforteaudioperc.src="assets/audioevideo/cassaforteallarme.mp3";

cassaforteaudio.appendChild(cassaforteaudioperc);
cassaforteaudio.loop=true;

//suono acqua del dispenser
var water_audio = document.createElement('audio');

var water_audioperc = document.createElement('source');
water_audioperc.src="assets/audioevideo/watersound.mp3";

water_audio.appendChild(water_audioperc);
water_audio.loop=false;

//video in televisione
video = document.createElement( 'video' );
video.src = "assets/audioevideo/secrets.mp4";
video.onPlay = false;

videoImage = document.createElement( 'canvas' );
videoImage.width = 480;
videoImage.height = 216;

videoImageContext = videoImage.getContext( '2d' );
videoImageContext.fillStyle = '#000000';
videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

videoTexture = new THREE.Texture( videoImage );
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;

//video del pc
video2 = document.createElement( 'video' );
video2.src = "assets/audioevideo/windowsxp.mp4";
video2.onPlay = false;

videoImage2 = document.createElement( 'canvas' );
videoImage2.width = 640;
videoImage2.height = 356;

videoImageContext2 = videoImage2.getContext( '2d' );
videoImageContext2.fillStyle = '#000000';
videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );

videoTexture2 = new THREE.Texture( videoImage2 );
videoTexture2.minFilter = THREE.LinearFilter;
videoTexture2.magFilter = THREE.LinearFilter;