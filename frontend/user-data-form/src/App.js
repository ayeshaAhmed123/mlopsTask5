import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitUserData = () => {
        fetch('http://127.0.0.1:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="App">
            <h2>User Data Form</h2>
            <form id="userDataForm">
                Name: <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
                Email: <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
                <button type="button" onClick={submitUserData}>Submit</button>
            </form>
        </div>
    );
}

export default App;
