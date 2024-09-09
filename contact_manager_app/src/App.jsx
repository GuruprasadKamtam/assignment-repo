import React from 'react'
import { Routes,Route,Navigate} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactLIst/ContactList";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import Spinner from './components/contacts/spinner/Spinner';


const App = () => {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </>
  )
}

export default App
