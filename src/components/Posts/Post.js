import React from 'react';
import PostHeader from './PostHeader';
import PostDetails from './PostDetails';
import styled from 'styled-components';

const StyledPost = styled.div`
    padding: 2.5%;
    background-color: lightgrey;
`


const Post = (props) => {
const { data } = props;
return (
    <StyledPost>
        <PostHeader image={data.url} title={data.title} date={data.date} />
        <PostDetails explanation={data.explanation}/>
    </StyledPost>
 )
}

export default Post;