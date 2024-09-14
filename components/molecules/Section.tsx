import { FC, ReactChild, ReactNode } from 'react';

export type SectionProps = {
    id: string
    children: ReactChild | SectionSlots
}

type SectionSlots = {
    content: ReactNode
    title?: string | ReactNode
    subtitle?: string
    darkMode?: boolean
}

const isObject = <T extends object>(value: any): value is T => typeof value === 'object' && typeof value !== 'function' && value != undefined
const areNamedSlots = (children: any): children is SectionSlots => isObject(children) && 'content' in children

// A template for named Sections we can scroll through:
export const Section: FC<SectionProps> = (props) => {

    const { id, children } = props;

    if (!children)
        throw new Error('Children are required for this component.');

    if (areNamedSlots(children)) {

        const { title, subtitle, darkMode, content } = children;

        return (
            <div className={"section" + id}>
                <div className="section-title">{title}</div>
                
                <div className="section-content" id={id}>
                    {content}
                </div>
            </div>
        );
    }
    else
        return <div className="section">{children}</div>;
};
