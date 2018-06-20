"use strict";

/**
 * Copy characters from the given string beginning at the specified start
 * location through the specified number of characters.
 *
 * @param {string} string
 * @param {int} [start]
 * @param {int} [length]
 * @return {string}
 */
export default function copychars(string, start = 0, length) {
  if (typeof string !== "string" || string === "") {
    return "";
  }

  const end = Number.isInteger(length) ? start + length : undefined;

  return (" " + string.slice(start, end)).slice(1);
}
