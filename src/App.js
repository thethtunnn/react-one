
import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/index'
import PostList from './PostLIst';
import Modal from './Modal';



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
  {
    id : 3,
    title : 'third post'
  }
 ])


  return (
    
    <>
      <Navbar SetShowModal={SetShowModal}/>
      <PostList posts = {posts}/>
      
      {showModal &&<Modal danger>
        <h3>hello</h3>
        <p>dfjdkfjdklsfjlskdfjsdlkafjsadklsdjfsdjkdjfddkfja</p>
        <button onClick={()=>SetShowModal(false)}>close</button>
      </Modal>}
      

    </>
   
   


    
  );
}

export default App;
