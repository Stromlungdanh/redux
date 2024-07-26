import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { useDispatch, useSelector } from 'react-redux'
// import {RootState} from './redux/store'
import { decrement, increment } from './redux/counter/counterSlide'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { Button } from 'react-bootstrap'
import Header from './components/header'
import TabsContent from './components/tabs.content'
import UsersTable from './components/users.table'

function App() {
  // const count = useSelector((state: RootState) => state.counter)
  // const count = useAppSelector(state => state.counter)
  
  return (
    <>
      <Header/>
      <TabsContent/>
     
    </>
  )
}

export default App
