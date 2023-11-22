import React, { useContext } from 'react';
import './Modal.css';
import WordContext from '../../contexts/WordContext';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    won: boolean;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
    isOpen,
    onClose,
    won,
    children
}) => {
    const realWord = useContext(WordContext).word;

    if (!isOpen) {
        return null;
    }

    const phrase = won
        ? 'Congrats! You have won the Wordle Game!'
        : 'Oops, you lost the current game. Good luch for the next game!';

    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{phrase}</p>
                <p>
                    The word is: <strong>{realWord}</strong>
                </p>
                {children}
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
