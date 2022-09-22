/* eslint-disable */
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Posts } from '../../components/Posts/index';
import './styles.css';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
