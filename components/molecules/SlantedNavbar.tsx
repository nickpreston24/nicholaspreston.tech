import React from 'react';
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Link from 'next/link';
import { navButtons } from '../../constants';

export const SlantedNavbar = () => {

    return (
        <div className="container">
            <div className="navigation-wrapper">
                <div className="navigation-button">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navigation-menu">
                    <ul>
                        {navButtons.map(({ name, route, icon }, index) =>
                            <Typography component="li" key={index}>
                                {icon && <Icon className={classNames(icon)} />}
                                {/* <Link to={route}>{name}</Link> */}
                                <Link href={route}>
                                    <a>{name}</a>
                                </Link>
                            </Typography>)}
                    </ul>
                </div>
            </div>
            <style jsx>{`   
                .navigation-wrapper {
                    position: relative;
                }

                .navigation-button {
                    will-change: transform;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    position: fixed;
                    z-index: 1;
                    top: 40px;
                    right: 100px;
                    background: transparent;
                    cursor: pointer;
                }

                .navigation-button .fa {
                    border: 2px solid white;
                    border-radius: 3px;
                    padding: 10px;
                    color: white;
                }

                .navigation-menu ul li {
                    list-style: none;
                    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                    font-weight: 300;
                    color: hsl(0, 0%, 70%);
                }

                .navigation-menu {
                    content: '';
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 50%;
                    background: white;
                    height: 100%;
                    transform: skewX(0deg) translate(100%, 0);
                    transform-origin: top right;
                    transition: all .2s ease-in;
                    /* z-index: -1; */
                }

                .navigation-menu ul {
                    transform: skewX(-8deg);
                    transform-origin: top left;
                    position: fixed;
                    right: 120px;
                    top: 120px;
                    width: 400px;
                    text-align: right;
                }

                .navigation-menu ul li {
                    position: relative;
                    z-index: 999;
                    font-size: 32px;
                    color: hsl(0, 0%, 10%);
                    line-height: 64px;
                }

                .navigation-menu ul li a {
                    border: none;
                    color: hsl(0, 0%, 10%);
                    text-decoration: none;
                }

                .navigation-menu.active {
                    transform: skew(8deg) translate(0, 0);
                }

                .navigation-menu li {
                    opacity: 0;
                    transform: translate(0, 10px);
                    transition: all 0s ease-in .3s;
                }

                .navigation-menu.active li {
                    opacity: 1;
                    transform: translate(0, 0);
                    transition: all 0.2s ease-in 0s;
                }

                .navigation-menu.active li:nth-child(1) {
                    transition-delay: .3s;
                }

                .navigation-menu.active li:nth-child(2) {
                    transition-delay: .4s;
                }

                .navigation-menu.active li:nth-child(3) {
                    transition-delay: .5s;
                }

                .navigation-menu.active li:nth-child(4) {
                    transition-delay: .6s;
                }

                .navigation-menu.active li:nth-child(5) {
                    transition-delay: .7s;
                }

                .navigation-menu.active li:nth-child(6) {
                    transition-delay: .8s;
                }
            `}</style>
        </div>
    )
}

export default SlantedNavbar;