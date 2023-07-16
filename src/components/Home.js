import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";


const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords don't match");
        } else if (username < 4){
            toast.error("Username must be at least 4 characters long");
        } else if (password < 6){
            toast.error("Password must be at least 6 characters long");
        } else {
            toast.success("Account created successfully for " + username);
        }

    };

    

    return (
        <div>
        <h1>Home</h1>
        </div>
    );
    }

export default Home;