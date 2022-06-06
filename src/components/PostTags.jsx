import React from 'react'

const PostTags = (tags) => {
  return (
    <div className='post__tags'>
        {tags.tags.map((tag) => 
          <div className='post__tag'>{tag}</div>
        )}
    </div>
  )
}

export default PostTags