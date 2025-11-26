import './App.css';
import PostListContainer from '../widgets/PostList/PostList';
import styles from '..//shared/ui/shared.module.css';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import Header from '../widgets/LayoutHeader/Header';
import CommentListConatiner from '../widgets/CommentList/ui/CommentList';


function App() {

  return (

      <>
        <ThemeProvider>
            <Header/>
        </ThemeProvider>
        <h1 className={styles.centralTitle}>Лента новостей</h1>
        <PostListContainer />
        <CommentListConatiner />
      </>

  )
}

export default App