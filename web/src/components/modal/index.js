import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, text }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div class="container">
            <div class="modal hide">
              <div class="modal__inner">
                <div class="modal__header">
                  <span>Chao ban</span>
                  {/* <i class="fa-sharp fa-solid fa-xmark"></i> */}
                </div>
                <div class="modal__body">
                  {/* <h3>Modal</h3> */}
                  <p>{text}</p>
                </div>
                <div class="modal__footer">
                  {/* <button
                    class="close-btn yes"
                    onclick="location.href=`https://drive.google.com/drive/folders/1-bYx2cMct47z3iTUyBLMvZakVyGh22XP?usp=share_link`"
                  >
                    Đúng vậy
                  </button> */}
                  <button class="close-btn" onClick={hide}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    : null;
export default Modal;
