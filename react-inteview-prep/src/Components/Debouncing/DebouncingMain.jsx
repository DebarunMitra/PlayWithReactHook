import React, {useState, useEffect} from 'react'

function DebouncingMain() {

    const [pin, setPin] = useState(700001);
    const [postOffice, setPostOffice] = useState({});
    const [loading, setLoading] = useState(true);

    

    useEffect(()=>{

        const getData = setTimeout(() => {
            setLoading(true);
            fetch(`https://api.postalpincode.in/pincode/${pin}`)
            .then(res => res.json())
            .then(data=>{
                console.log(data[0].PostOffice[0]);
                setPostOffice(data[0].PostOffice[0]);
                setLoading(false);
            })
        }, 2000);

        return () => clearTimeout(getData);
    }, [pin]);

    const handleChange = (e) => {
        setPin(e.target.value);
    }

    const printPostOffice = (postOffice) => {
        return (
            <div>
                <ul style={{listStyle: 'none'}}>
                    <li>Name: {postOffice?.Name}</li>
                    <li>Division: {postOffice?.Division}</li>
                    <li>District: {postOffice?.District}</li>
                    <li>Region: {postOffice?.Region}</li>
                    <li>State: {postOffice?.State}</li>
                    <li>Block: {postOffice?.Block}</li>
                    <li>BranchType: {postOffice?.BranchType}</li>
                    <li>Circle: {postOffice?.Circle}</li>
                    <li>Country: {postOffice?.Country}</li>
                </ul>
            </div>
        )
    }

  return (
    <div>
        <input type={'text'} value={pin} onChange={(e)=>handleChange(e)} maxLength={6} required />
        <div>
            {!loading?printPostOffice(postOffice):'Loading...'}
        </div>
    </div>
  )
}

export default DebouncingMain