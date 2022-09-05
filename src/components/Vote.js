import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import voteBG from '../assets/voteBG.png';

const Vote = () => {
    const [option, setOption] = useState('');

    const handleChange = (e) => {
        setOption(e.target.value);
    }

    useEffect(() => {
    }, [option, setOption])

    const handleConfirmVote = () => {
        if (localStorage.getItem('isVoted')) {
            toast.warning('You have already voted!')
        }
        else {
            localStorage.setItem('isVoted', option)
            toast.success('Your vote has been received!')
        }
    }

    return (
        <div className='items-center justify-center text-center mx-auto'>
            <div>
                <select className="select select-success w-full max-w-sm text-center m-5" onChange={handleChange}>
                    <option disabled selected>Pick your favorite political party</option>
                    <option>BJP Bharatiya Janata Party</option>
                    <option>Indian National Congress</option>
                    <option>BSP Bahujan Samaj Party</option>
                    <option>CPI Communist Party of India</option>
                    <option>CPM Communist Party of India (Marxist)</option>
                </select>
                {
                    localStorage.getItem('isVoted') ? <h3 className='text-xl font-mono text-center m-5 text-success'> You voted for {localStorage.getItem('isVoted')} </h3> :
                        <h3 className='text-xl font-mono text-center m-5 text-error'>Your vote didn't cast yet...</h3>
                }
                <button className='btn btn-outline' onClick={handleConfirmVote}>Confirm your vote</button>
            </div>
        </div>
    );
};

export default Vote;