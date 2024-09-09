import React from 'react';
import { Link } from 'react-router-dom';

const EditContact = () => {
  return (
    <>
        <section className='add-contact'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary fw-bold">Edit Contact</p>
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
                  <input type="submit" className='btn btn-primary' value="update" />
                   <Link to={'/contacts/list'} className='btn btn-dark ms-2'>close</Link>
                </div>
              </form>
              
            </div>
            <div className="col-md-6">
              <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='contact-img'/>
            </div>
          </div>
        </div>
      </section>  
 
    </>
  )
}

export default EditContact;
