// From: https://medium.com/@KevinBGreene/typescript-enums-and-polymorphism-with-type-matching-fc3dc74b031c

const enum MaybeType {
    SOME,
    NOTHING
}

interface Some<T> {
    type: MaybeType.SOME;
    value: T;
}

interface Nothing {
    type: MaybeType.NOTHING;
}

function Some<T>(value: T): Some<T> {
    return {
        type: MaybeType.SOME,
        value
    }
}

export function Nothing() {
    return {
        type: MaybeType.NOTHING
    };
}

export function withDefault<T>(defaultValue: T, maybe: Maybe<T>): T {
    switch (maybe.type) {
        case MaybeType.SOME:
            return maybe.value;
        case MaybeType.NOTHING:
            return defaultValue;
    }
}

export type Maybe<T> = Some<T> | Nothing;

export function identity<T>(value: T): T {
    return value;
}