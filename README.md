# Unexpected Layout with Flexbox and Inline Button Content in Tailwind CSS

This repository demonstrates a common issue encountered when using Tailwind CSS with Flexbox and inline content within buttons.  The default behavior of Flexbox items to stretch can lead to unexpected layout results.

## Problem

The `bug.js` file contains a simple example of a button and paragraph in a flex container. The button's inline content causes it to expand, pushing the paragraph away.

## Solution

The `bugSolution.js` file provides a fix by using the `shrink-0` utility class on the button to prevent it from expanding beyond its content's width.  This ensures the items maintain their natural size within the flex container. This ensures the button does not stretch beyond its content, leading to a better layout.