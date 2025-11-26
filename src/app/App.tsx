import './App.css';
import PostListContainer from '../widgets/PostList/PostList';
import styles from '../widgets/PostList/postList.module.css';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import Header from '../widgets/LayoutHeader/Header';

function App() {

  return (

      <>
        <ThemeProvider>
            <Header/>
            <h1 className={styles.centralTitle}>Лента новостей</h1>
            <PostListContainer />
        </ThemeProvider>
      </>

  )
}

export default App