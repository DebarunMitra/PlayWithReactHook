import React, {useState} from 'react'

function CustomForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    

    const handleSubmit = () => {
        let name = document.getElementById("name"),
            email = document.getElementById("email"),
            phone = document.getElementById("phone"),
            password = document.getElementById("password"),
            gender = document.getElementById("gender");

        if(
            (name.value === "" || name.value === null) || 
            (email.value === "" || email.value === null) ||
            (phone.value === "" || phone.value === null) ||
            (password.value === "" || password.value === null) ||
            (gender.value === "" || gender.value === null)
        ){
            alert("All The Fields Are Required!");
            return false;
        }
    }


    const validateEmail = (e) => {
        let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailValue = e.target.value;

        if(!mailFormat.test(emailValue)){
            document.getElementById(e.target.id).style.border = "1px solid red";
        }else{
            document.getElementById(e.target.id).style.border = "1px inset black";
        }
    }

    const validatePhone = (e) => {
        let phValue = e.target.value;

        if(phValue.length < 10){
            document.getElementById(e.target.id).style.border = "1px solid red";
        }else{
            document.getElementById(e.target.id).style.border = "1px inset black";
        }
    }

    const validatePassword = (e) => {
        let passFormatStrong =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        let mediamFormatPassword = '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';
        let passValue = e.target.value;

        if(!passFormatStrong.test(passValue)){
            document.getElementById(e.target.id).style.border = "1px solid red";
            document.getElementById("passStatus").innerText = "Strong"; 
        }else{
            document.getElementById(e.target.id).style.border = "1px inset black";
        }
        
    }

    const handleOnChange  = (e) => {

        if(e.target.id === "name"){
            let nameValue = e.target.value;
            setName(nameValue);
        }

        if(e.target.id === "email"){
            let emailValue = e.target.value;
            setEmail(emailValue);
        }
        
        if(e.target.id === "phone"){
            let phValue = e.target.value;

            if(phValue.length<=10){
                setPhone(phValue);
            }
        }

        if(e.target.id === "password"){
            let passwordValue = e.target.value;
            setPassword(passwordValue);
        }
    }

    
  return (
    <div>
        <h1>The Form</h1>
        <form id="mainForm" onSubmit={()=>handleSubmit()}>
            <div className='formContent'>
                <label>Name:&nbsp;
                    <input type="text" id="name" name="name" onChange={(e)=>handleOnChange(e)} value={name} />
                </label>
            </div><br/>
            <div className='formContent'>
                <label>Email:&nbsp;
                    <input type="text" id="email" name="email" onBlur={(e)=>validateEmail(e)} onChange={(e)=>handleOnChange(e)} value={email} />
                </label>
            </div><br/>
            <div className='formContent'>
                <label >Phone:&nbsp;
                    <input type="number" id="phone" name="phone" onBlur={(e)=>validatePhone(e)} onChange={(e)=>handleOnChange(e)} value={phone} />
                </label>
            </div><br/>
            <div className='formContent'>
                <label>Password:&nbsp;
                    <input type="password" id="password" name="password" onBlur={(e)=>validatePassword(e)} value={password} />
                    <span id="passStatus">&nbsp;status</span>
                </label>
            </div><br/>
            <div className='formContent'>
                <label >Gender:&nbsp;
                    <select name="gender" id="gender"> 
                        <option value="">--Select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </div><br/>
            <div className='formContent'>
                <button type="submit" id="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CustomForm;