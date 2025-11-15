// abstraction

//idea: to hide unnecessary details from the user and show only essential features of the object

/*interface MediaPlayrer {
        play () : void;
        pause () : void;
        stop () : void;
}


class AudioPlayer implements MediaPlayrer {
         
        play() {
                 console.log("Playing audio...");
        }
        pause() {
                 console.log("Pausing audio...");
        }
        stop() {
                 console.log("Stopping audio...");
        }

}

const audio = new AudioPlayer();
audio.play();
audio.pause();
audio.stop();*/



abstract class mediaPlayter {

        abstract play () : void;
        abstract pause () : void;
        abstract stop () : void;

}


class AudioPlayer extends mediaPlayter {
        play() : void {
                        console.log("Playing audio...");
        }
        pause() : void { 
                console.log('Pause Audio');
        }
        stop(): void {
               console.log("Stop Audio"); 
        }
}


const audio1 =new AudioPlayer();
audio1.play();
audio1.pause();
audio1.stop();