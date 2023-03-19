import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'


import {getUser,addUser} from "../Store/ActionCreaters/UserActionCreators"

export default function Signup() {
    var [data, setdata] = useState({

        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
     var users = useSelector((state)=>state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
           var d = users.find((item)=>item.username===data.username)
           if(d)
           alert("UserName Already Taken!!!")
           else{
            var item = {
                name:data.name,
                username:data.username,
                email:data.email,
                phone:data.phone,
                password:data.password,
                addressline1:"",
                addressline2:"",
                addressline3:"",
                pin:"",
                city:"",
                state:"",
                pic:"",
                role:"User",
            }
            dispatch(addUser(item))
            navigate("/login")
           }
        }
        
        else
            alert("password and confirm password does not match")
    }
      useEffect(()=>{
        dispatch(getUser())
    },[])

    return (
        <>
        <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/sl2.jpg')" }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9  text-center">

                                <h1 className="mb-0 bread"></h1>
                                <div className="container-fluid w-100 mt-5 my-5">

                                    <div className=' m-auto' style={{ width: "70%" }}>
                                        <h5 className='text-center bg-secondary p-2 text-light'>Signup Section</h5>
                                        <form className='' onSubmit={postData}>
                                            <div className="row mb-3">
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="name" id="name" onChange={getData} placeholder="Enter name: " className='form-control' />
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="username" id="username" onChange={getData} placeholder="Enter username: " className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="email" id="email" onChange={getData} placeholder="Enter email: " className='form-control' />
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="phone" id="phone" onChange={getData} placeholder="Enter phone: " className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="password" id="password" onChange={getData} placeholder="Enter password: " className='form-control' />
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <input type="text" name="cpassword" id="cpassword" onChange={getData} placeholder="Enter cpassword: " className='form-control' />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button className='btn btn-success w-100 btn-lg' type='submit'>Signup</button>
                                            </div>
                                        </form>
                                            <Link className='text-dark' to="/login">Already User? Login To Your Account</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                
        </>

    )
}


