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
        <form className="classes.form p-4 bg-white rounded-md flex justify-between flex-col md:flex-row gap-4 w-11/12 max-w-[40rem] my-8 mx-auto shadow-[0_1px_4px_rgba(0,0,0,0.2)]" onSubmit={submitHandler}>
            <div className="classes.controls w-full md:w-10/12 flex gap-4 flex-col">
                <div className="classes.control flex flex-1 gap-4 items-center justify-between">
                    <label htmlFor="year font-bold">Year</label>
                    <select id="year" ref={yearInputRef} className="w-3/4 md:w-full bg-white rounded-md p-1" title="year">
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
            <Button type="submit" className="w-full md:w-1/5 py-1 px-2 bg-teal-500 text-teal-100 rounded border border-[#03be9f]">Find Events</Button>
        </form>
    )
}

export default EventSearch;