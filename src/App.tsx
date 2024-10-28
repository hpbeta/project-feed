import { Header } from "./components/Header.tsx";

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, PostType } from "./components/Post.tsx";


const posts: PostType[] =  [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hpbeta.png',
      name: 'João Lucas',
      role: 'Dev Frontend'
    },
    content: [
      { type: 'paragraph', content:  'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },    
    ],
    publishedAt: new Date('2024-10-21 22:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Kaick',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content:  'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },    
    ],
    publishedAt: new Date('2024-10-17 22:00:00')
  },
]

function App() {
  return (
    <div>

      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          
        
        <main>
        {
          posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))
        }
        </main>
      </div>
    </div>
  );
}

export default App;
