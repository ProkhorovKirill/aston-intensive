import PostListContainer from '../widgets/PostList/PostList';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import CommentListConatiner from '../widgets/CommentList/ui/CommentList';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import './App.css';
import styles from '..//shared/ui/shared.module.css';
import MainLayout from '../shared/layouts/MainLayout';

function App() {

  return (

      <>

        <ThemeProvider>
          <MainLayout>
            <h1 className={styles.centralTitle}>Лента новостей</h1>
            <PostLengthFilter>
              <PostListContainer />
            </PostLengthFilter>
            <CommentListConatiner />
          </MainLayout>
        </ThemeProvider>
        
      </>

  )
}

export default App