export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const DELETE_MODAL = 'DELETE_MODAL';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const EDIT_MODAL = "EDIT_MODAL"

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};


export const deleteTrackModal = (modal, track) => {
  // debugger
  return {
    type: DELETE_MODAL,
    track,
    modal
  };
};

export const updateTrackModal = (modal, track) => {
  // debugger
  return {
    type: UPDATE_MODAL,
    track,
    modal
  };
};

export const editUserModal = (modal, user) => {
  // debugger
  return {
    type: EDIT_MODAL,
    user,
    modal
  };
};