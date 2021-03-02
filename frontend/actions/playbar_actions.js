export const PLAY_SONG = "PLAY_SONG"


export const playSong = (song, user) => {
    debugger
    return {
        type: PLAY_SONG,
        song,
        user
    }
}