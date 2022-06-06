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

  const sortedPosts = useMemo(() => {
    const buba = [...posts]
    if (searchQuery[0] === '#') {
      return buba.filter(post => post.content.includes(searchQuery))
    }
    return buba
  }, [searchQuery, posts,])


  return (
    <div className="App">
      <button className='post__button' onClick = {createPost}>Создать</button>
      <input className='post__input'  onChange={(e) => {setSearchQuery(e.target.value)}}></input>
      <PostList  remove = {removePost} posts = {sortedPosts} setPosts = {setPosts} />
    </div>
  )
}

export default App
