import * as LikeUtil from '../util/like_api_util'
import { receiveTrack } from './track_actions'
export const createLike = trackId => dispatch => {
    return LikeUtil.createLike(trackId)
    .then((track) => dispatch(receiveTrack(track)))
}