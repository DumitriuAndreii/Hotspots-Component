
  import React from 'react'
  import './Modal.css';
  
  export const Modal = ({ content, onClose }: { content: string; onClose: () => void }) => (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <p>{content}</p>
      </div>
    </div>
  );
  