"use strict";
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
console.log("\n");
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedItems = [1, "Hello", true, "World", false, "JavaScript"];
let StringsArray = mixedItems.filter((item) => typeof item === "string");
console.log(StringsArray);
console.log("\n");
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [80, 90, 100, 45, 56, 78, 64];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
