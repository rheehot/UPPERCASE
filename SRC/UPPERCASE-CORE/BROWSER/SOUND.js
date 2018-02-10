/*
 * 사운드 파일을 재생하는 SOUND 클래스
 */
global.SOUND = CLASS((cls) => {

	let audioContext;
	let isCanPlayOGG = new Audio().canPlayType('audio/ogg') !== '';

	return {

		init : (inner, self, params) => {
			//REQUIRED: params
			//OPTIONAL: params.ogg
			//OPTIONAL: params.mp3
			//OPTIONAL: params.wav
			//OPTIONAL: params.isLoop
			//OPTIONAL: params.volume

			let ogg = params.ogg;
			let mp3 = params.mp3;
			let wav = params.wav;
			let isLoop = params.isLoop;
			let volume = params.volume;
			
			if (volume === undefined) {
				volume = 0.8;
			}
			
			let buffer;
			let source;
			let gainNode;
			
			let startedAt = 0;
			let pausedAt = 0;
			
			let delayed;
			
			// init audioContext.
			if (audioContext === undefined) {
				audioContext = new AudioContext();
			}
			
			let src;
			if (ogg !== undefined && isCanPlayOGG === true) {
				src = ogg;
			} else if (mp3 !== undefined) {
				src = mp3;
			} else {
				src = wav;
			}
			
			let request;
			
			let ready = () => {
				
				if (request !== undefined) {
					request.abort();
				}
				
				request = new XMLHttpRequest();
				request.open('GET', src, true);
				request.responseType = 'arraybuffer';
	
				request.onload = () => {
	
					audioContext.decodeAudioData(request.response, (_buffer) => {
	
						gainNode = audioContext.createGain();
	
						buffer = _buffer;
						
						gainNode.connect(audioContext.destination);
						gainNode.gain.setTargetAtTime(volume, 0, 0);
	
						if (delayed !== undefined) {
							delayed();
						}
					});
				};
				request.send();
			};
			
			ready();

			let play = self.play = () => {

				delayed = () => {

					source = audioContext.createBufferSource();
					source.buffer = buffer;
					source.connect(gainNode);
					source.loop = isLoop;
					
					startedAt = Date.now() - pausedAt;
					source.start(0, (pausedAt / 1000) % buffer.duration);
					
					delayed = undefined;
					
					if (isLoop !== true) {
						source.onended = () => {
							stop();
						};
					}
				};

				if (buffer === undefined) {
					ready();
				} else {
					delayed();
				}

				return self;
			};
			
			let pause = self.pause = () => {
				
				if (source !== undefined) {
					source.stop(0);
					source.disconnect();
					source = undefined;
					
					pausedAt = Date.now() - startedAt;
				}
				
				delayed = undefined;
			};

			let stop = self.stop = () => {
				
				if (source !== undefined) {
					source.stop(0);
					source.disconnect();
					source = undefined;
					
					pausedAt = 0;
				}
				
				if (gainNode !== undefined) {
					gainNode.disconnect();
					gainNode = undefined;
				}
				
				buffer = undefined;
				delayed = undefined;
			};
			
			let setVolume = self.setVolume = (_volume) => {
				//REQUIRED: _volume
				
				volume = _volume;
				
				if (gainNode !== undefined) {
					gainNode.gain.setTargetAtTime(volume, 0, 0);
				}
			};
			
			let setPlaybackRate = self.setPlaybackRate = (playbackRate) => {
				//REQUIRED: playbackRate
				
				if (source !== undefined) {
					source.playbackRate.setValueAtTime(playbackRate, 0);
				}
			};
		}
	};
});
