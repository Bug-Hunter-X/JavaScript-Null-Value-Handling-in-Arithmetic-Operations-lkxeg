# JavaScript Null Value Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling null values in arithmetic operations. The bug occurs when a function attempts to add two numbers, and one or both of the inputs might be null.

The original code handles null inputs by returning 0, which isn't always suitable.  The improved version provides a more flexible solution.