import React from "react";


export default function footer () {

    const currentYear = new Date().getFullYear();

    return  (
    <footer><p> Copyright ©  {currentYear}  </p></footer>
    );
}