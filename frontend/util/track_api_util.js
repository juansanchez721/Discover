
export const fetchTracks = () => {

    return $.ajax({
        type: "GET",
        url: '/api/tracks'
    })
}