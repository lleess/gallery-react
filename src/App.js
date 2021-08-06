import React, {useState} from 'react';
import ImageModal from './Components/ImageModal';
import Images from './Components/Images';

const photosData = [
  {id: 237, url: "https://picsum.photos/id/237/300/200"},
  {id: 238, url: "https://picsum.photos/id/238/300/200"},
  {id: 239, url: "https://picsum.photos/id/239/300/200"},
  {id: 240, url: "https://picsum.photos/id/240/300/200"},
  {id: 241, url: "https://picsum.photos/id/241/300/200"},
  {id: 242, url: "https://picsum.photos/id/242/300/200"}
]

const commentData = [
  {photoId: 237, id: 1, author: 'Alex', date: '01.09.2020', text: 'a very beautiful place'},
  {photoId: 237, id: 2, author: 'Jumy', date: '03.09.2020', text: 'cool'},
  {photoId: 237, id: 3, author: 'Mike', date: '03.09.2020', text: 'I really love animals, he is incredibly cute'},
  {photoId: 238, id: 4, author: 'Linda', date: '11.03.2021', text: 'I was there'},
  {photoId: 239, id: 5, author: 'Marta', date: '21.07.2021', text: 'very nice'},
  {photoId: 239, id: 6, author: 'Emily', date: '22.07.2021', text: 'wow, its amazing'},
  {photoId: 240, id: 7, author: 'Karl', date: '13.08.2021', text: 'I can’t realize that there are such places on our planet'},
  {photoId: 241, id: 8, author: 'Isabella', date: '09.03.2020', text: 'it was really photographed by a professional'},
  {photoId: 241, id: 9, author: 'Lisa', date: '10.03.2020', text: 'i like it'},
  {photoId: 241, id: 10, author: 'Libby', date: '11.04.2020', text: 'not bad'},
  {photoId: 241, id: 11, author: 'Nicole', date: '10.03.2020', text: 'it was really photographed by a professional'},
  {photoId: 242, id: 12, author: 'Sofia', date: '14.04.2021', text: 'This is a very beautiful place'},
  {photoId: 242, id: 13, author: 'Anna', date: '14.04.2021', text: 'I want to take the same photo'},
]

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bigPhoto, setBigPhoto] = useState(null);
  const [comments, setComments] = useState(commentData);

  document.title = 'gallety App';

  if(isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className='container'>
      <h1>Gallery</h1>
      <Images 
        photos={photosData}
        setIsModalOpen={setIsModalOpen}
        setBigPhoto={setBigPhoto}
      />
      <ImageModal 
        isModalOpen={isModalOpen} 
        bigPhoto={bigPhoto}
        comments={comments}
        setComments={setComments}
        setIsModalOpen={setIsModalOpen}
        setBigPhoto={setBigPhoto}
        />
    </div>
  );
}
