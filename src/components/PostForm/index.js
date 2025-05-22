import React, { useRef } from 'react'
import  './index.css';
import  { useState } from 'react'


export default function Index({addPost}) {
    // let [title,setTitle]= useState("")
    let title = useRef();

    let reselForm = ()=> {
        // setTitle('')
         title.current.value = ''  //title value is string
        
        console.log('update now')
    }
    let upload_post = (e) => {
        e.preventDefault();
       
        let post = {
            id : Math.floor(Math.random()*10000),
            title : title.current.value
        }
        reselForm()
        addPost(post)
    }

    
   

   
  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        
        <div className='form-control'>
            <label htmlFor=''>Tittle</label>
            <input type="text" ref={title}></input>
        </div>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
    
    
  )
}
