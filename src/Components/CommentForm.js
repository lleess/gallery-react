import React, {useState} from 'react';

export default function CommentForm({comments, setComments, bigPhoto}) {
    const [valueInputName, setValueInputName] = useState('');
    const [valueInputText, setValueInputText] = useState('');

    function changeInputName(e) {
        setValueInputName(e.target.value);
    }

    function changeInputText(e) {
        setValueInputText(e.target.value)
    }

    function submitFormComment(e) {
        e.preventDefault();
        setValueInputName('');
        setValueInputText('');
        
        const sortedComments = comments.sort((firstComment, secondComment) => secondComment.id - firstComment.id);
        const newId = sortedComments[0].id + 1;
        const newComment = {photoId: bigPhoto.id, id: newId, author: valueInputName, date: new Date().toLocaleDateString(), text: valueInputText};
        setComments([...comments, newComment])
    }

    return (
        <React.Fragment>
            <h3 className='comment-form-title'>Leave your comment</h3>
            <form onSubmit={submitFormComment} className="comment-form">
                <input 
                    value={valueInputName}
                    onChange={changeInputName}
                    placeholder='Your name'
                    className='comment-input name'
                    type='text'
                    name='name'
                    required
                />
                <input 
                    value={valueInputText}
                    onChange={changeInputText}
                    placeholder='Write your comment'
                    className='comment-input text'
                    type='text'
                    name='comment-text'
                    required
                />
                <button className='btn-comment-submit'>Submit</button>
            </form>
        </React.Fragment>
    )
}