import React,{useEffect} from 'react'
import clap from "./sounds/clap.wav"
import hithat from "./sounds/hihat.wav"
import openhat from "./sounds/openhat.wav"
import boom from "./sounds/boom.wav"
import ride from "./sounds/ride.wav"
import snare from "./sounds/snare.wav"
import tom from "./sounds/tom.wav"
import kick from "./sounds/kick.wav"
import tink from "./sounds/tink.wav"
function Audio() {

    useEffect(() => {
      document.addEventListener('keydown',detectKeyCode,false)
    },[])
    const detectKeyCode =(e)=>{
        console.log(e.keyCode)
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
            key.classList.remove('playing');
        }, 100);
    }
  return (
    <div>
    <audio data-key="65" src={clap}></audio>
    <audio data-key="83" src={hithat}></audio>
    <audio data-key="68" src={kick}></audio>
    <audio data-key="70" src={openhat}></audio>
    <audio data-key="71" src={boom}></audio>
    <audio data-key="72" src={ride}></audio>
    <audio data-key="74" src={snare}></audio>
    <audio data-key="75" src={tom}></audio>
    <audio data-key="76" src={tink}></audio>

    </div>
  )
}

export default Audio