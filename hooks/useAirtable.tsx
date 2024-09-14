import React, { useContext, createContext, useState, useEffect } from 'react'

import {
    SoftSkill,
    Teammate,
    Project,
    Technology,
    About,
    mapToDto,
} from '../models'

import Airtable from 'airtable'

/** Airtable Hook */
const apiKey = process.env.AIRTABLE_API_KEY
const baseId = process.env.AIRTABLE_RESUME_BASE
const apiUri = 'https://api.airtable.com/v0/'

const airtableContext = createContext(null)

export const useAirtable = () => useContext(airtableContext)

/** Provider HOC */
export function ProvideAirtableApi({ children }) {
    const projects = useAirtableProvider()
    return <airtableContext.Provider value={projects}>{children}</airtableContext.Provider>
}

const taskBaseId = process.env.REACT_APP_AIRTABLE_TASKS_BASE
const firebaseAPIkey = process.env.REACT_APP_API_KEY

/**Helpers */
export const makeReadQuery = (baseName = null) => `${apiUri}${baseId}/${baseName}?api_key=${apiKey}` // TODO: Make this inline for now.  Func is not working well here.
export const getTable = async (tableName: string) =>
    (await fetch(makeReadQuery(tableName))).json()

/** API */
function useAirtableProvider() {

    const [about, setAbout] = useState<About[]>([])
    const [projects, setProjects] = useState<Project[]>([])
    const [teammates, setTeammates] = useState<Teammate[]>([])
    const [softSkills, setSoftSkills] = useState<SoftSkill[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([])

    const getProjects = async () => {
        const call = await fetch(makeReadQuery('Projects'))

        const data = await call.json()
        let fields = data.records.map(r => r.fields)
        setProjects(mapToDto(fields, Project))
    }

    const getTeammates = async () => {
        const call = await fetch(makeReadQuery('Teammates'))

        const data = await call.json()
        let fields = data.records.map(r => r.fields)
        setTeammates(mapToDto(fields, Teammate))
    }

    const getAbout = async () => {
        const call = await fetch(makeReadQuery('About'))

        const data = await call.json()
        let fields = data.records.map(r => r.fields)
        setAbout(mapToDto(fields, About))
    }

    const getSoftSkills = async () => {

        const data = await getTable('SoftSkills')
        let fields = data.records.map(r => r.fields)
        let softSkills = mapToDto(fields, SoftSkill)
        setSoftSkills(softSkills)
    }


    const getTechnologies = async () => {

        const data = await getTable('Technologies')
        let fields = data.records.map(r => r.fields)
        let softSkills = mapToDto(fields, SoftSkill)
        setSoftSkills(softSkills)
    }


    // Initialize here
    useEffect(() => {
        if (!apiKey || !baseId) {
            console.warn('Invalid api keys, could not fetch any Airtable data')
            return
        }
        getProjects()
            .catch(console.info)
        getTeammates()
            .catch(console.info)
        getAbout()
            .catch(console.info)
        getTechnologies()
            .catch(console.info)
        getSoftSkills()
            .catch(console.info)
    }, [])

    // Pass back any results you want
    return {
        projects,
        teammates,
        about,
        technologies,
        softSkills,

        getTechnologies,
    }
}