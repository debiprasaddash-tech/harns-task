import React from 'react'
import { useState } from 'react'

const FormTest = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    const [allData, setAllData] = useState([])

    // function handleSubmit() {

    // }
    const handleSubmit = () => {
        setAllData([...allData,
        {
            id: allData.length != 0 ? allData.length + 1 : 1,
            name,
            email,
            mobile,
            address
        }
        ])
    }

    console.log(allData)
    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p>Name</p>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p>Email</p>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p>Mobile</p>
                <input type="number" onChange={(e) => { setMobile(e.target.value) }} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p>Address</p>
                <textarea onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Submit</button>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((data, index) => {
                        return <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.address}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default FormTest