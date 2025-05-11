import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import API_URL from '../src/config';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${API_URL}/send`,
                { firstName, lastName, email, phone, date, time, address },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            toast.success(data.message);
            // Clear form fields
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            setAddress("");
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!');
        }
    };

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form onSubmit={handleReservation}> {/* onSubmit used here */}
                            <div>
                                <input
                                    type='text'
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type='date'
                                    placeholder='date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input
                                    type='time'
                                    placeholder='time'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <button type="submit">
                                RESERVE NOW{" "}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;







