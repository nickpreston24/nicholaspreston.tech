import { createState, useState } from '@hookstate/core';

const settingsState = createState({
    isEditableInline: true,
    isScopedUpdateEnabled: true,
    isHighlightUpdatesEnabled: true
})

export function useSettingsState() {
    const state = useState(settingsState)

    return ({
        get isEditableInline() {
            return state.isEditableInline.get()
        },
        toogleEditableInline() {
            state.isEditableInline.set(p => !p)
        },
        get isScopedUpdateEnabled() {
            return state.isScopedUpdateEnabled.get()
        },
        toogleScopedUpdate() {
            state.isScopedUpdateEnabled.set(p => !p)
        },
        get isHighlightUpdateEnabled() {
            return state.isHighlightUpdatesEnabled.get()
        },
        toogleHighlightUpdate() {
            state.isHighlightUpdatesEnabled.set(p => !p)
        }
    })   
}
