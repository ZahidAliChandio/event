'use client'

import { useRef } from "react";

import Button from "../ui/button"
import classes from "./events-search.module.css"

// function EventSearch(props: { onSearch: (arg0: string, arg1: string) => void; }) {
function EventSearch({ onSearch }: { onSearch: (arg0: string, arg1: string) => void}) {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);
    function submitHandler(e: any) {
        e.preventDefault();
        // Exclamanation mark is used to tell typescript that the value is not null
        const selectedYear: string = yearInputRef?.current?.value!;
        const selectedMonth: string = monthInputRef?.current?.value!;
        onSearch(selectedYear, selectedMonth);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">Febuary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                    </select>
                </div>
            </div>
            <Button type="submit">Find Events</Button>
        </form>
    )
}

export default EventSearch;