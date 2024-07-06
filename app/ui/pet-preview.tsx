'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import heartSvg from '@/public/heart.svg';
import noImageAvailable from '@/public/no-image-available.png';

interface Props {
    availablePet: any; // need a better type......
};

export default function PetPreview({
    availablePet,
}: Props) {

    return (
        <article 
        key={availablePet.id}
        className="pet-preview"
        >
            <div className="pet-preview__content">
                <Image
                    src={availablePet.attributes.pictureThumbnailUrl || noImageAvailable}
                    alt=""
                    className="pet-preview__image"
                    width="100"
                    height="100"
                /> 
                <h1>{availablePet.attributes.name}</h1>
                <ul>
                    <li>Age: {availablePet.attributes.ageGroup}</li>
                    <li>Breed: {availablePet.attributes.breedSecondary || availablePet.attributes.breedString}</li>
                </ul>
            </div>
            <button className="favorite-button">
                <Image
                    src={heartSvg}
                    alt=""
                    width="24"
                    height="24">
                </Image>
            </button>
        </article>
    )
}

// this component is the full info for each pet, so photo, name, weight, personality description, etc.
// gets displayed when you click on a "pet preview" which is just the image and name of a pet that appears on the search results page or favorites page