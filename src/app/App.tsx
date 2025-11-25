import './App.css';
import PostList from '../widgets/PostList/PostList';
import styles from '../widgets/PostList/postList.module.css';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import Header from '../widgets/LayoutHeader/Header';

function App() {

  return (

      <>
        <ThemeProvider>
            <Header/>
            <h1 className={styles.centralTitle}>Лента новостей</h1>
            <PostList />
        </ThemeProvider>
      </>

  )
}

export default App