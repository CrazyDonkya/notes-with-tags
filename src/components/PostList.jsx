import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, remove, setPosts}) => {

  const editPostTitle = (updatedTitle, postIndex) => {
    const updatedPost = {...posts[postIndex], title: updatedTitle}
    const updatedPosts = [...posts]
    updatedPosts[postIndex] = updatedPost
    setPosts(updatedPosts)
  }

  const editPostContent = (updatedContent, postIndex) => {
    const updatedPost = {...posts[postIndex], content: updatedContent,}
    const updatedPosts = [...posts]
    updatedPosts[postIndex] = updatedPost
    setPosts(updatedPosts)
  }

  return (
    <div>
      {posts.map((post, index) => 
        <PostItem remove={remove} index={index} post={post} key={post.id} editPostContent={editPostContent} editPostTitle={editPostTitle}/>
      )}
    </div>
  )
}

export default PostList