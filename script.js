let music = null;
let last_music = null

function playMusic(songid, songname){
    music = document.getElementById(songid)
    try{
        last_music.pause()
    }
    catch{
        //not do anything
    }
    
    music.play()
    last_music = music
    document.getElementById('sname').innerHTML = songname
    document.getElementById('player-btn').src = "pause.png"
}

function pauseMusic(){
    music.pause()
    document.getElementById('player-btn').src = "play-button.png"
    document.getElementById('sname').innerHTML = "Your song name appears here"
}


