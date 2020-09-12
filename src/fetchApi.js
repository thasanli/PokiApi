import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetching = (props) => {
    const [pokis, setPokis] = useState([])
    const [fetchBtn, setFetchBtn] = useState(false)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(data => {
                setPokis(data.data.results);
            }).catch(err => {
                console.log(err)
            })
    })

    const HandleBtn = () => {
        if (!fetchBtn) {
            setFetchBtn(true)
        } else {
            setFetchBtn(false)
        }
    }

    const displayPoki = () => {
        if (fetchBtn) {
            return (
                pokis.map((poki, index) => {
                    return (
                        <div key={index}  >{poki.name}</div>
                    );
                })
            );

        }

    }

    return (
        <div>
            <button onClick={HandleBtn} >Fetch it</button>
            { displayPoki()}
        </div>
    );
}

export default Fetching;