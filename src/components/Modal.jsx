import React from 'react';
import './Modal.css';

function Modal({ images, isOpen, closeModal }) {
    return (
        isOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={closeModal}>
                        <i className='bi bi-x'></i>
                    </button>
                    <div className="modal-images">
                        {images.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} className="modal-image" />
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;

