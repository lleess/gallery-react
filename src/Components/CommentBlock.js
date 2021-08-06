import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default function CommentBlock({comments, setComments, bigPhoto}) {
    return (
        <div className='comment-block'>
            <Comment comments={comments} bigPhoto={bigPhoto}/>
            <CommentForm comments={comments} setComments={setComments} bigPhoto={bigPhoto}/>
        </div>
    )
}