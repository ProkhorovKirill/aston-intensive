import './App.css'
import PostList from '../widgets/PostList/PostList'
import styles from '../widgets/PostList/postList.module.css'

function App() {

  return (

      <>
        <h1 className={styles.centralTitle}>Лента новостей</h1>
        <PostList />
      </>

  )
}

export default App