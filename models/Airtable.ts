enum Rating {
    'Novice' = 'Only tried it once or heard of it',
    'Advanced Beginner' = 'Light professional or hobby exposure',
    'Intermediat' = 'Normal professional usage and ability beyond basics',
    'Good' = 'Proficient at basics and adaptable to multiple use cases',
    'Proficient' = 'Higly skilled and can readily take on most problems'
}

/** My Portfolio base */
export class About {
    Name: string
    Notes: string
    Badge: string | Blob
}

export class Project {
    Name: string
    Media: Object
    Website: string
    Description: string
    Repository: string
    Tech: string[]
    Snippet: Object
    Contributors: Teammate[]
}

export class Technology {
    Name: string
    Notes: string
    'Last Used': Date
    'First Used': Date
    TimeUsed: number
    Media: object
    Scope: string[]
    Experiences: string
    'Self-Rating': number

    constructor(props) {
        // TODO: map the used dates to a friendly format with moment.
        // TODO: make a friendly from TimeUsed.
    }

}

export class SoftSkill {
    Name: string
    Notes: string
    Rating: string
    Enabled: boolean
}

export class Teammate {
    Email: string
    GitHub: string
    LinkedIn: string
    Name: string
    Portfolio: string
    Projects?: Project[]
}

/** Job Hunt base */
export class Contact {
    Email: string
    'Full Name': string
    Role: string
    Handles: string
    Face: string | Blob //Img
    Notes: string
    Company: string
    Phone: string
}