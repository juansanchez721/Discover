import { $CombinedState } from "redux"


export const createLike = trackId => {
    debugger
    return $.ajax({
        type: "POST",
        url: "api/likes",
        data: { like: {
            likeable_id: trackId,
            likeable_type: "Track"
        }}
        // contentType: false,
        // processData: false
    })
}