import React from 'react'
import { FiMenu } from "react-icons/fi";
import classes from "./Header.module.css"


function lowerHeader() {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
            <FiMenu />

                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Costumer Services</li>
            <li>Registery</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>

    </div>
  )
}

export default lowerHeader