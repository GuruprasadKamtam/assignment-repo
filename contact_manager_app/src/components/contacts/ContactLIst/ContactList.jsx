import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../spinner/Spinner";

const ContactList = () => {

  const [state,setState] = useState({
    loading : false,
    contacts : [],
    errorMessage : ""
  });

  useEffect(()=>{
    let getData = async()=>{
      try{
        setState({...state,loading: true});
        let response = await ContactService.getAllContacts();
        console.log(response.data);  
        setState({
          ...state,
          loading: false,
          contacts: response.data
        });
      }catch(error){
        setState({
          ...state,
          loading : false,
          errorMessage : error.message
        });
        console.log(error.Mesage);
        
      }
    };getData();
  },[])

  let {loading,contacts,errorMessage} = state;
  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"></i>New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam repellat natus recusandae cum id iure architecto officia
                  itaque ab assumenda excepturi rerum dolorem ex fugit cumque,
                  adipisci accusantium ratione saepe?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <button type="submit" className="btn btn-outline-dark">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
{
  loading ? <Spinner/> : <>
      <section className="contact-lsit">
        <div className="container">
          <div className="row">
            {
              contacts.length > 0 && contacts.map((contact)=>(

                <div className="col-md-6" key={contact.id}>
              <div className="card my-2">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-4">
                    <img src={contact.photo} alt="" className="img-fluid contact-img"/>
                  </div>
                  <div className="col-md-7">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name : <span className="fw-bold">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile : <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Email : <span className="fw-bold">{contact.email}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-1 d-flex flex-column align-items-center">
                    <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                    <i className="fa fa-eye"/>
                    </Link>
                    <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
                    <i className="fa fa-pen"/>
                    </Link>
                    <Link to={`contacts/view/:contactId`} className="btn btn-danger my-1">
                    <i className="fa fa-trash"/>
                    </Link>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
              ))
            }
            
          </div>
        </div>
      </section>
  </>
}
  
    </>
  );
};

export default ContactList;
