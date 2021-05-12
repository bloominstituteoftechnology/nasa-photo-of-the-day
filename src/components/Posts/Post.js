import React from 'react';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';


const Post = (props) => {
const { data } = props;
return (
    <div>
        <PostHeader title={data.title} image={data.url}/>
        <PostDetails date={data.date} explanation={data.explanation}/>
    </div>
 )
}

export default Post;