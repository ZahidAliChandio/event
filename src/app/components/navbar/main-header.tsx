'use client'
import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
    return (
        <header className="w-full flex justify-between items-baseline h-20 py-4 px-[10%] bg-gray-900">
            <div className="text-4xl md:text-2xl text-teal-200 h-full flex justify-center items-center font-['Fira', sans-serif]">
                <Link href="/" className="text-[#94fdfd]">NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events" className="text-2xl md:text-base text-[#74dacc]">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}  

export default MainHeader;