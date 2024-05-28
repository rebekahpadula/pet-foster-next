import Image from 'next/image';

export default function PetPreview() {
    return (
        <article className="pet-preview">
            <Image
            src="https://placedog.net/500"
            alt="pet name that will be from api"
            className="pet-preview__image"/>
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