import { Typography, Icon } from '@material-ui/core'
import Link from 'next/link'
import classNames from 'classnames'
import { FC } from 'react';

interface StrongLinkProps {
    index: number,
    route: string,
    icon?: string,
    iconStyle: object,
    href: string
}

/** A button-link with nice MUI Typography */
//https://github.com/mui-org/material-ui/issues/16846
export const StrongLink: FC<StrongLinkProps> = ({
    index, icon, route, iconStyle, href
}) => {
    return (
        <Typography component="li" key={index}>
            {icon && <Icon className={classNames(icon, iconStyle)} />}
            {route &&
                <Link href={href}>
                    <a>
                        {name}
                    </a>
                </Link>}
        </Typography>)
}

export default StrongLink;