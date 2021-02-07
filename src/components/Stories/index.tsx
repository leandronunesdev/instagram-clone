import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStory } from '../../store/ducks/stories/actions';
import { StoriesState, StoryItem } from '../../store/ducks/stories/types';

const Stories = () => {

    const dispatch = useDispatch()

    const stories = useSelector((state: StoriesState) => state.stories.arrayStories)

    useEffect(() => {
        axios.get("http://localhost:4000/stories")
            .then(resposta => dispatch(getStory(resposta.data)))
    },[])
    

    return (
        <div className="stories">
            <h2>Stories</h2> 
            {
                stories && stories.map((item: StoryItem) => (
                    <div className="storie" key={item.id}>
                        <div className="storie-image">
                            <img src={item.userPicture} alt="user" />
                        </div>
                        <div className="storie-user">
                            <strong>{item.user}</strong>
                            <span>{item.time}</span>
                        </div>
                    </div>
                ))
            }           
            
        </div>
    )    
}

export default Stories