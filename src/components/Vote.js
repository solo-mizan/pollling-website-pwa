import React from 'react';
import voteBG from '../assets/voteBG.png';

const Vote = () => {
    return (
        <div>
            <select className="select select-success w-full max-w-sm text-center m-5">
                <option disabled selected>Pick your favorite political party</option>
                <option>BJP Bharatiya Janata Party</option>
                <option>Indian National Congress</option>
                <option>BSP Bahujan Samaj Party</option>
                <option>CPI Communist Party of India</option>
                <option>CPM Communist Party of India (Marxist)</option>
            </select>
            <button className='btn btn-outline'>Confirm your vote</button>
        </div>
    );
};

export default Vote;