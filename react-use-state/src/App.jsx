import Header from './components/header.jsx'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>

    </>
  )
}

export default App