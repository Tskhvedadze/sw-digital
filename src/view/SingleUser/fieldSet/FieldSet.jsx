import React from 'react'

import './FieldSet.scss'

export const FieldSet = ({
    imageUrl,
    prefix,
    name,
    lastName,
    jobDescriptor,
    email,
    ip,
    jobArea,
    jobType,
    company,
    address,
}) => {
    return (
        <>
            <img src={imageUrl} alt={name} className='image' />
            <fieldset className='left__info'>
                <legend>Info</legend>
                <div>
                    <strong>
                        {prefix} {name} {lastName}
                    </strong>
                </div>
                <div>
                    <i>{jobDescriptor}</i>
                </div>
                <br />
                <div>
                    <span>Email</span>: {email}
                </div>
                <div>
                    <span>Ip Address</span>: {ip}
                </div>
                <div>
                    <span>Ip Address</span>: {ip}
                </div>

                <div>
                    <span>Job Area</span>: {jobArea}
                </div>
                <div>
                    <span>Job Type</span>: {jobType}
                </div>
            </fieldset>
            <fieldset className='right__info'>
                <legend className='right__info--legend'>Address</legend>
                <div>
                    <strong>
                        {company.name} {company.suffix}
                    </strong>
                </div>
                <div>
                    <span>City</span>: {address.city}
                </div>
                <div>
                    <span>Country</span>: {address.country}
                </div>
                <div>
                    <span>State</span>: {address.state}
                </div>
                <div>
                    <span>Street Address</span>: {address.streetAddress}
                </div>

                <div>
                    <span>ZIP</span>: {address.zipCode}
                </div>
            </fieldset>
        </>
    )
}
