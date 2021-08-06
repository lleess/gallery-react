import React from 'react';

export default function Comment({comments, bigPhoto}) {

    const filteredComments = comments
        .filter(comment => comment.photoId === bigPhoto.id);

    return (
        <div className='comment-list'>
            {filteredComments.map(comment => (
                <div className='comment' key={comment.id}>
                    <div className='avatar'></div>
                    <div className='comment-content'>
                        <div className='comment-info'>
                            <h4 className='author'>{comment.author}</h4>
                            <span className='date'>{comment.date}</span>
                        </div>
                        <p className='comment-text'>{comment.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}