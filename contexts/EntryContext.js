import React, { useState, useEffect } from 'react'
export const EntryContext = React.createContext()
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;

const EntryContextProvider = (props) => {

    const [entries, setState] = useState([])
    const baseName = props.baseName || 'Projects'
    const apiQuery = `https://api.airtable.com/v0/${baseId}/${baseName}?api_key=${apiKey}`;

    const fetchData = async () => {
        const call = await fetch(apiQuery);
        const data = await call.json();

        setState(data.records)
    }

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    useEffect(() => { fetchData(); }, []);

    return (
        <EntryContext.Provider value={{ ...entries }}>
            {props.children}
        </EntryContext.Provider>
    )
}

export default EntryContextProvider