/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";


/* 
* Import
*/


import { addEventsOnElements } from "./utils/event.js";



export const segment = function ($segment, callback) {
    const /* {NodeList} */ $segmentBtns = $segment.querySelectorAll("[data-segment-btn] ");

    let /* {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector("[data-segment-btn].selected");

    addEventsOnElements($segmentBtns, "click", function () {
        $lastSelectedSegmentBtn.classList.remove("selected");

        this.classList.add("selected");

        $lastSelectedSegmentBtn = this;
        callback(this.dataset.segmentValue)
    })
}