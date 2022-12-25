import React from "react";
import { useState } from "react";

const SignUp = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const [bio, setbio] = useState("");
    const [country, setcountry] = useState("");
    const [file, setfile] = useState({"name" : "Select File"});

    function validateEmail(x) {
        let rgx = /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/
        if (rgx.test(x)) {
            return true
        }
        return false
    }
    async function CreateUser() {
        if (!validateEmail(email)) {
            alert("Enter valid Email")
        }
        else if (password.trim().length === 0 || password.length < 8) {
            alert("Enter Valid password")
        }
        else {
            let formdata = new FormData()
            formdata.append("Name" , name)
            formdata.append("email" , email)
            formdata.append("phone" , phone)
            formdata.append("bio" , bio)
            formdata.append("country" , country)
            formdata.append("password" , password)
            formdata.append("photo" , file)
            let res = await fetch("http://localhost:5000/user/registeruser", { method: 'post', body: formdata});
            res = await res.json()
            if (res.status === false) {
                alert(res.msg)
            }
            else {
                setname("")
                setemail("")
                setpassword("")
                setphone("")
                setbio("")
                setcountry("")
                setfile()
                alert("user created successfully Login to see student list")
            }
        }
    }

    return (
        <div className="container" style={{ width: "600px", height: "550px", background: "brown", color: "white" }}>
            <form className=" align-self-center">
                <h1>Signup User</h1>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Phone number" value={phone} onChange={(e) => setphone(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Bio</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" placeholder="Write your bio" value={bio} onChange={(e) => setbio(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Country" value={country} onChange={(e) => setcountry(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Profile Image</label>
                    <div className="col-sm-10">
                        <input type="file" className="custom-file-input" id="validatedCustomFile"  onChange={(e) => setfile(e.target.files[0])} />
                        <label className="custom-file-label" for="validatedCustomFile">{file ? file.name : "Select file"}</label>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={CreateUser}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp