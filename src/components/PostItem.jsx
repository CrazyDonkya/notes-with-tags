import React from 'react'
import { useEffect ,useRef } from 'react'
import PostTags from './PostTags'

const PostItem = ({ post, index, remove, editPostTitle, editPostContent}) => {
  return (
    <div className='post'>
        <div className="post__content">
          <strong className='post__title'>
            {index + 1}.
            <div 
              className='post__title__text' 
              suppressContentEditableWarning={true} 
              contentEditable={true} 
              onBlur={(e) => {
                editPostTitle(e.target.textContent, index)}}
            >
            {post.title}
            </div>
          </strong>
          <div 
            className='post__text' 
            suppressContentEditableWarning={true} 
            contentEditable={true}
            onBlur={(e) => {editPostContent(e.target.textContent, index)}}
          >
            {post.content}
          </div>
          <PostTags 
            tags={post.content.split(' ').filter(word => word[0] === '#')} 
          />
        </div>
        <div className='post__form'>
          <button className='post__button' onClick={() => remove(post)}>Удалить</button>
        </div>
    </div>
  )
}

export default PostItem
