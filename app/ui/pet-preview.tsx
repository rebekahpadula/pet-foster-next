'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

useEffect

export default function PetPreview() {

    const [petData, setPetData] = useState([]);
    const [url, setUrl] = useState('https://api.rescuegroups.org/v5/public/animals/search/available/cats');

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/vnd.api+json",
                "Authorization": "SB2o2nWz",
            }
        })
        .then(response => response.json())
        .then(json => setPetData(json.data))
        // .then(json => setPetData(json))
        .catch(err => console.log(err));
    }, [petData, url]);


    return (
        <article className="pet-preview">
            <Image
            src="https://placedog.net/300/300"
            alt="pet name that will be from api"
            className="pet-preview__image"
            width="500"
            height="500"/>
            <h1>Pet name</h1>
            <ul>
                <li>Age: </li>
                <li>Breed: </li>
            </ul>
        </article>

    );
}

// this component is the full info for each pet, so photo, name, weight, personality description, etc.
// gets displayed when you click on a "pet preview" which is just the image and name of a pet that appears on the search results page or favorites page