
import './App.css';
import {useState} from 'react'

function App() {
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
// console.log(posts);
    // here id is pass deletepost funcion
let deletepost = (id) => {
  setPosts(prevState => prevState.filter((post) => post.id !== id))
}
 

  return (
    <div className='app'>
      <ul>
        {
            !!posts.length && posts.map((post) => (
            <li key={post.id}>{post.title}
                    {/* here id is pass deletepost(goto the deletepost) */}
            <button onClick={() => deletepost(post.id)} >delete</button>
            </li>
            
          ))
        }
        {!posts.length && <p>no post Available</p>}
      </ul>


    </div>
    

    
  );
}

export default App;
