import React, { useState } from "react";
import "./StudentAttendanceModal.css";
import { FaReply } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const StudentAttendanceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="StudentAttendanceModal">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="header">
                <div className="amyrobson">
                  <img src="" alt="userImage" />
                  <h2 className="fontWeight">amyrobson</h2>
                  <p className="fontWeight">1 month ago</p>
                </div>
                <h4 className="fontWeight">
                  <FaReply /> Reply
                </h4>
              </div>
              <p className="Sonali fontWeight">Sonali Beniwal Didnot come to class Today</p>
            </div>
            <div className="modal-body">
              <hr />
              <div className="juliusomo">
                <div className="user">
                  <div className="userInfo">
                    <div className="userDet">
                      <img src="" alt="userImage" />
                      <h3 className="fontWeight">juliusomo</h3>
                      <span className="fontWeight">you</span>
                      <h4 className="fontWeight">5 mint ago</h4>
                    </div>
                    <div className="icons">
                        <p className="delete fontWeight"><MdDelete /> Delete</p>
                        <p className="edit fontWeight"><MdModeEdit />Edit</p>
                    </div>
                  </div>
                  <h6 className="fontWeight"><span>@amyrobson</span> yeah my kid was ill</h6>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <img src="" alt="userImage" />
              <textarea placeholder="Yeah Sonali was ill"></textarea>
                <button className="fontWeight" onClick={closeModal}>SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAttendanceModal;
