import React from "react";


export default function footer () {

    const currentYear = new Date().getFullYear();
    
    return <p> Copyright © 2019 {currentYear}  </p>
}