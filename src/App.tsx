
import { Suspense , lazy} from 'react'
import './App.css'
const Home = lazy(() => import('./pages/Home'))
import { ThemeProvider } from './components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Footer from './components/Footer'
import ContectWhatsapp from './components/Whatsapp'
 const About = lazy(() => import('./pages/About'))
const Services = lazy (()=> import('./pages/Services'))
const Products = lazy (()=>import('./pages/Product'))
const Contact = lazy (()=> import('./pages/Contact'))
import TopScrollbutton from './components/TopScrollbutton'
import AutoScroll from './components/AutoScroll'


function App() {


  return (
    <>
    <Suspense fallback={
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-red-500" />

        {/* Text */}
        <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>}>
    <ThemeProvider  >
      <AutoScroll/>
      <Layout/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/product' element={<Products/>} />
              <Route path='/contact' element={<Contact/>} />

               <Route path='*' element={<Home/>} />

            </Routes>
            <ContectWhatsapp/>
            <TopScrollbutton/>
 <Footer/>
 </ThemeProvider>
   </Suspense>
    </>
  )
}

export default App
