import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewItem: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [description,setDescription] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [errors,setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const validate = () => {
        const err = [];
        if(lastName.length > 20) err.push("lastName must not exceed 20 characters.")
        if (description.length > 100) err.push("Order Description must not exceed 100 characters.");
        if (quantity < 1 || quantity > 20) err.push("Quantity must be between 1 and 20.");
        return err;

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validateErrors = validate();

        if (validateErrors.length > 0) {
            setErrors(validateErrors);
            return
        }

        try {
            axios.post('http://localhost:5182/api/PostOrder', {
                firstName,
                lastName,
                description,
                quantity
            });
            navigate("/");
        }
        catch (error) {
            console.error("Failed to submit a order");
        }

    }
    return (
        <>
        <div>
            <h1>New orders</h1>
            {
                errors.length > 0 &&
                <ul>
                    {errors.map((error,i) => <li key={i}>{error}</li>)}
                </ul>
                
            }
            <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={20} />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required maxLength={20} />
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required maxLength={100} />
                    </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <input type="text" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                    </div>
                    <button type="submit">Submit</button>
                
            </form>
        </div>
        </>
    )
};
export default NewItem;
