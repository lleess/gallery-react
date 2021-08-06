import React from 'react';

export default function Images({photos, setIsModalOpen, setBigPhoto }) {
    function setPhoto(photo) {
        setIsModalOpen(true);
        setBigPhoto(photo);
    }

    return (
        <div className='images-wrapper'>
            {photos.map(photo => {
                return <img 
                            key={photo.id} 
                            src={photo.url} 
                            alt='gallery item'
                            onClick={(e) => setPhoto(photo)}
                            style={{margin: '5px'}}
                        />
            })}
        </div>
    )
}