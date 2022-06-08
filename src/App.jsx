import { useState, useMemo } from 'react'
import './styles/App.scss'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  const createPost = () => {
    const newPost = {id:Date.now(), title:'Описание', content: 'Тема',}
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = useMemo(() => {
    const sortedPosts = [...posts]
    if (searchQuery[0] === '#') {
      return sortedPosts.filter(post => post.content.includes(searchQuery))
    }
    return sortedPosts
  }, [searchQuery, posts,])


  return (
    <div className="App">
      <button className='post__button' onClick = {createPost}>Создать</button>
      <input className='post__input'  onChange={(e) => {setSearchQuery(e.target.value)}}></input>
      <PostList  remove = {removePost} posts = {sortPosts} setPosts = {setPosts} />
    </div>
  )
}

export default App
