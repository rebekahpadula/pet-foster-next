'use client'; // for client side rendering

import { useState, useEffect, useCallback } from 'react';
import PetPreview from '@/app/ui/pet-preview';

export default function Form() {
    const [allSpecies, setAllSpecies] = useState();
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [resultsLoaded, setResultsLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const speciesUrl = 'https://api.rescuegroups.org/v5/public/animals/species';
    const fetchOptions = { 
        method: 'GET', 
        headers: {
            "Content-Type": "application/vnd.api+json",
            "Authorization": "SB2o2nWz",
        }
    };

    const getSpecies = useCallback(() => {
        fetch(
            speciesUrl,
            {
                method: 'GET', 
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "Authorization": "SB2o2nWz",
                }
            },
        ).then((response) => {
            return response.json();
        }).then((response) => {
            console.log("filtered response ", response);
                return response.data.map(function(species: any) {
                    return <option key={species.id}>{species.attributes.plural.toLowerCase()}</option>
                });
        }).then((responseOptions) => {
            setAllSpecies(responseOptions);
        });
    }, [speciesUrl])

    useEffect(() => {

        getSpecies();

    }, [getSpecies]);

    function search() {
        console.log(selectedSpecies);

        fetch(
            `https://api.rescuegroups.org/v5/public/animals/search/available/${selectedSpecies}`,
            fetchOptions,
        ).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            return response;
        }).then((response) => {
            // create const like for options, then assign const to state
            // setResultsLoaded to true
            if(response.data) {
                return response.data.map(function(availablePet: any) {
                    return (
                        <PetPreview availablePet={availablePet} key={availablePet.id}/>
                    )
                })
            } else {
                return <p>No {selectedSpecies} are available right now...</p>
            }
        }).then((availablePets) => {
            setResults(availablePets);
            setResultsLoaded(true);
        })
    }

    return (
        <>
            <section className="form">
                <label htmlFor="species">Species</label>
                <select
                    id="species"
                    value={selectedSpecies}
                    onChange={e => setSelectedSpecies(e.target.value)}
                >
                    <option>Select</option>
                    {allSpecies}
                </select>
                <button className="button" onClick={search}>Search</button>
            </section>
            <section className="results">
                {resultsLoaded ? (
                    results
                ) : (
                    <p>Select a type of pet so you can see all available babies</p>
                )}
            </section>
        </>
    );
}