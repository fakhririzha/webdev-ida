import cx from 'classnames';
import React from 'react';

const Footer = () => {
    return (
        <footer className={cx('bg-white', 'rounded-lg', 'shadow', 'm-4', 'dark:bg-gray-800')}>
            <div
                className={cx(
                    'w-full',
                    'mx-auto',
                    'max-w-screen-xl',
                    'p-4',
                    'md:flex',
                    'md:items-center',
                    'md:justify-between'
                )}
            >
                <span className={cx('text-sm', 'text-gray-500', 'sm:text-center', 'dark:text-gray-400')}>
                    © 2023{' '}
                    <a href='https://instagram.com/pemafasilkomti' className='hover:underline'>
                        Web Developer IDA
                    </a>
                    . All Rights Reserved.
                </span>
                <ul
                    className={cx(
                        'flex',
                        'flex-wrap',
                        'items-center',
                        'mt-3',
                        'text-sm',
                        'font-medium',
                        'text-gray-500',
                        'dark:text-gray-400',
                        'sm:mt-0'
                    )}
                >
                    <li>
                        <a href='#' className='me-4 md:me-6'>
                            Powered by PEMA FASILKOM TI 2023
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
