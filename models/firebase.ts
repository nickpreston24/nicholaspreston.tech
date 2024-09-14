import isDev from "helpers/environment";

export class Task {
    id: string;
    title: string;
    done: boolean;
    status: string;
    notes: string;
    started_at: Date;
    completed_at: Date;
    updated_at: Date;
    due_at: Date;
    expires_at: Date;

    constructor(props) {
        return Task.Create(props)
    }

    static Create(props = null) {
        isDev() && console.log('props :>>', props)
        return {
            ...props,
            title: props?.title || "",
            notes: props?.notes || "",
            done: props?.done || false,
            createdAt: props?.createdAt || Date.now()
        }
    }

}