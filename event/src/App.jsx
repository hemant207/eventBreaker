import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TicketPage from './pages/TicketPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AddEvents from './components/AddEvents'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AdminDashboard from './components/AdminDashboard'
import AdminProfile from './components/AdminProfile'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import axios from 'axios'
import { useEffect } from 'react'
import userState from './value/atom/user'
import token_data from './value/atom/token'
import AdminHomePage from './pages/AdminHomePage'
import Header from './components/Header'
import SucessPayment from './pages/SucessPayment'
import CanclePayment from './pages/CanclePayment'



function App() {

 // const stripePromise = loadStripe('pk_test_51NoTOxC3DLIb7WypNd57rc27o7XLsog5GDU9QR2eOmxyjXZc0PP6fWWwXEz5X1EZnQEoLSFsNokc6A8YXOyELtY100BkuCeOV5'); // Replace with your actual publishable key

  return (
    <>
    <RecoilRoot>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
  
    <Router>
    <Init/>
    <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tickets' element={<TicketPage/>}/>
          <Route path='admin' element={<AdminHomePage/>}/>
          <Route path='/admin/login' element={<LoginPage/>}/>
          <Route path='/admin/signup' element={<SignupPage/>}/>
          <Route path='/admin/addevents' element={<AddEvents/>}/>
          <Route path='/admin/home' element={<AdminDashboard/>}/>
          <Route path='/admin/profile' element={<AdminProfile/>}/>
          <Route path='/success' element={<SucessPayment/>}/>
          <Route path='/cancle' element={<CanclePayment/>}/>
        </Routes>
      </Router>
      <Footer/>
  
      </LocalizationProvider>
      </RecoilRoot>
    </>
  )
}

export default App

function Init(){

  const token = document.cookie.split("=")[1];
  const setUserInfo = useSetRecoilState(userState);
  const setToken = useSetRecoilState(token_data);
 

  useEffect(()=>{
    axios.get('https://server-eventbreaker.onrender.com/admin/me',{headers:{Authorization:token}}).then((res)=>{
      console.log(res.data);
      setUserInfo(res.data.admin_data);
      setToken(token);
    })
  },[])
}
