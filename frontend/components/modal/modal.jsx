import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from "../session_form/signup_form_container";
import LoginFormContainer from "../session_form/login_form_container";
import DeleteTrackContainer from '../tracks/delete_track_container'
function Modal({modal, closeModal}) {
  debugger
  if (!modal) {
    return null;
  }
  let component;
  debugger
  switch (modal.modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'deleteTrack':
      component = <DeleteTrackContainer track={modal.track} />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    trackId: state.ui.trackId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
