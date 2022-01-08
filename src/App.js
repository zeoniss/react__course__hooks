import Header from "./components/Header"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Content from "./components/Content"
import "./styles.css"

const App = () => (
  <div className='shop'>
    <Header />
    <div className='body'>
      <Menu />
      <Content />
    </div>
    <Footer />
  </div>
)
export default App
