import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'vm'
import { tasksRef } from '../services/firebase'

// Source: https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
export function useTask(id) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState(null)

    useEffect(() => {
        const unsubscribe = tasksRef.doc(id).onSnapshot(doc => {
            setLoading(false)
            setTask(doc), err => setError(err)
        })
        return () => unsubscribe()
    }, [id])

    return { task, loading, error }
}


// function useTasks() {

//     const [error, setError] = useState(false)
//     const [loading, setLoading] = useState(true)
//     const [taskList, setTasks] = useState([])

//     useEffect(() => {

//         const unsubscribe = tasksRef.onSnapshot(snapshot => {

//             const list = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))

//             console.count('loaded')
//             setTasks(list), err => setError(err)
//             setLoading(false)
//         })

//         return () => unsubscribe()
//     })

//     return { taskList, loading, error }
// }

// export {
//     useTasks
// }

// const context = React.createContext(null)

// export const useTasks = () => {
//     const { tasksList } = useContext(context)
//     return tasksList
// }