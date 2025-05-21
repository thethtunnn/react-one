
import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/index'
import PostList from './PostLIst';
import Modal from './Modal';
import PostForm from './components/PostForm';



function App() {
  let [showModal,SetShowModal] = useState(false)


  let [posts,setPosts]= useState([
  {
    id : 1,
    title : 'first post'
  },
  {
    id : 2,
    title : 'Second post'
  },
  
 ])

 let addPost = (post) => {
        setPosts(prevState => [...prevState,post])
        SetShowModal(false)
    }


  return (
    
    <>
      <Navbar SetShowModal={SetShowModal}/>
      <PostList posts = {posts}/>
      
      {showModal &&<Modal SetShowModal={SetShowModal}>
        <PostForm addPost={addPost} />
        
        
      </Modal>}
      

    </>
   
   


    
  );
}

export default App;
