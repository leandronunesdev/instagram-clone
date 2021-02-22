import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../store/ducks/posts/actions'
import { PostItem, PostsState } from '../../store/ducks/posts/types'
import Form from '../Form'
import Stories from '../Stories'
import User from '../User'

const Home = () => {

    const dispatch = useDispatch()

    const posts = useSelector((state: PostsState) => state.posts.arrayPosts)        
    const [postId, setPostId] = useState<Number>()    

    useEffect(() => {
        axios.get("http://localhost:4000/posts")
        .then(resposta => dispatch(getPost(resposta.data)))
    }, [])   

    return (
        <div className="home">        
            <div className="post-container">
                <Form />
                <p>Post selecionado: {postId}</p>                
                {
                    posts && posts.map((item: PostItem) => (
                        <div className="post" key={item.id}>
                            <header>
                            <img src={item.userPicture} alt="user" />
                            <div className="post-user">
                                <strong>{item.user}</strong>
                                <span>{item.location}</span>
                            </div>
                            </header>
                            <div className="post-image">
                            <img src={item.postPicture} alt="post" />
                            </div>
                            <div className="post-likes">
                            <FiHeart onClick={() => setPostId(item.id)} />{item.likes}                            
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))
                }                
                
            </div>
            <div className="Sidebar">
                <User />                       
                <Stories />
            </div>        
        </div>
    )
}

export default Home