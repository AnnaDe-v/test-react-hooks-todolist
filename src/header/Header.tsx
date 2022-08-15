import React from 'react';
import styles from './Header.module.css';
import '../styles.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.header__inner}>
                    <a href="" className="logo">
                        <img src="" alt=""/>
                    </a>
                    <nav className={styles.menu}>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link">Main</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">ToDoList</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;