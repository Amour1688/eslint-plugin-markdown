/**
 * @fileoverview Enables the processor for Markdown file extensions.
 * @author Brandon Mills
 */

"use strict";

const processor = require("./processor");
console.log(processor);

module.exports = {
    processors: {
        // ".md": processor,
        markdown: processor
    }
};
