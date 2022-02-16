import React from 'react';

export default function Rows(props) {

    return (
        <div className='row'>
            <div>{props.name}</div>
            <div>{props.address.zipcode}</div>
            <div>{props.email}</div>
            <div className='location'>
                <div>{props.address.geo.lat}</div>
                <div>{props.address.geo.long}</div>
            </div>
            <div className='action'>
                <div>Edit</div>
                <div>Delete</div>
            </div>
        </div>
    )
}