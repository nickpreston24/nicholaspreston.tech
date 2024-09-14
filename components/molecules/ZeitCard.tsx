import { BasicProps } from './BasicProps'
import { FC } from 'react';

interface ZeitCardProps extends BasicProps {
    url: string;
    title?: string;
    text?: string;
}

export const ZeitCard: FC<ZeitCardProps> = (
    {
        url = null
        , title = ''
        , text = ''
    }: {
        url: string, title: string, text: string
    }) => {
    return (
        !title
            ? <></>
            : <>
                <a href={url || '_'} className="card">
                    {title && <h3>{title}</h3>}
                    {text && <p>{text}</p>}
                </a>
                {/* 
                    border: 1px solid #eaeaea;
                 */}
                <style jsx>
                    {`
                .card {
                    margin: 1rem;
                    border: 1px solid #eaeaea;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
            `}
                </style>
            </>
    )
}