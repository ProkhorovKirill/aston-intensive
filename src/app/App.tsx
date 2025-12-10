import PostList from '../widgets/PostList/PostList';
import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import styles from '../widgets/PostList/postList.module.css';
import './App.css';
import MainLayout from '../shared/layouts/MainLayout';

function App() {

  return (

      <>
        <ThemeProvider>
            <MainLayout>
                <h1 className={styles.centralTitle}>Лента новостей</h1>
                <PostList />
            </MainLayout>
        </ThemeProvider>
      </>

  )
}

export default App