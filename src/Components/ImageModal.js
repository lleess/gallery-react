import React, {useRef} from 'react';
import CommentBlock from './CommentBlock';

export default function ImageModal({isModalOpen, bigPhoto, comments, setComments, setBigPhoto, setIsModalOpen }) {
    const modalElement = useRef(null);
    
    function close() {
        setIsModalOpen(false);
        setBigPhoto(null);
    }
    function closeOnBackground(e) {
        if (e.target === modalElement.current) {
            close();
        }
    }
    
    return (
        (isModalOpen && 
            <div className='modal' onClick={closeOnBackground} ref={modalElement}>
                <div className='modal-wrapper'>
                    <div className='modal-header'>
                        <button onClick={(e) => close()} className='btn-close-modal'>&times;</button>
                    </div>
                    <div className='modal-body'>
                        <img src={bigPhoto.url} alt='big photograph' className='big-photo'/>
                        <CommentBlock comments={comments} setComments={setComments} bigPhoto={bigPhoto}/>
                    </div>
                </div>
            </div>
        )
    )
}