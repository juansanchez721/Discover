export const PLAY_SONG = "PLAY_SONG"


export const playSong = song => {
    debugger
    return {
        type: PLAY_SONG,
        song
    }
}