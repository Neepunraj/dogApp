
import './App.css'
import BlogsSection from './components/BlogsSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
/* Created Component based  React Webapp
components are divided into
Header
Herp 
Blogs or Comment
Footer Section */

function App() {
  
  return (
    <>
      <Header />
      <HeroSection/>
      <BlogsSection />
      <Footer />
    </>
  )
}

export default App
