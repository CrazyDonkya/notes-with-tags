import React from 'react'

const PostTags = (tags) => {
  return (
    <div className='post__tags'>
        {tags.tags.map((tag, index) => 
          <div key={tag + index} className='post__tag'>{tag}</div>
        )}
    </div>
  )
}

export default PostTags