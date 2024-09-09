import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {

  let [state,setState] = useState({
    loading: false,
    contact : {
      name : "",
      photo: "",
      mobile : "",
      email :"",
      company: "",
      title: "",
      groupId: ""
    },
    groups: [],
    errorMessage : ""
  });
  return (
    <>
      <section className='add-contact'>
        {JSON.stringify(state.contact)}
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto vero nostrum! Molestiae repudiandae quos quasi, ea autem est nulla. Reprehenderit, soluta eum. Eos, magni! Ipsum beatae animi aperiam eaque!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action="">
              <div className="mb-2">
                  <input type="text"  className='form-control' placeholder='Enter Name'/>
              </div>
              
              <div className="mb-2">
                  <input type="text"  className='form-control' placeholder='photo url' />
              </div>
              <div className="mb-2">
                  <input type="number"  className='form-control' placeholder='mobile'/>
              </div>
              <div className="mb-2">
                  <input type="email"  className='form-control' placeholder='email'/>
              </div>
              <div className="mb-2">
                  <input type="text"  className='form-control' placeholder='company'/>
              </div>
              <div className="mb-2">
                  <input type="text"  className='form-control' placeholder='title'/>
              </div>
              <div className="mb-2">
                  <select className='form-control'>
                      <option value=""> Select a Group</option>
                  </select>
              </div>
                <div className="mb-2">
                  <input type="submit" className='btn btn-success' value="create" />
                   <Link to={'/contacts/list'} className='btn btn-dark ms-2'>close</Link>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddContact
