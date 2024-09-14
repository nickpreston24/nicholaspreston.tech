import { useRouter } from 'next/router'
import { FC } from 'react';
import { BasicProps } from './BasicProps';

interface ZeitLinkProps extends BasicProps {
    url: string
    hoverOnColor?: string
    hoverOffColor?: string
}

/**
 * A smart link that handles both urls and SPA routes
 */
export const ZeitLink: FC<ZeitLinkProps> = ({
    children, url, hoverOffColor, hoverOnColor
}) => {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.pathname === url
            ? hoverOnColor || 'blue'
            : hoverOffColor || 'black',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(url)
    }

    return (
        <a
            href={url}
            onClick={handleClick}
            style={style}
        >
            {children}
        </a>
    )
}

export default ZeitLink
