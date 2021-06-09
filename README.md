# BizinBiz take-home assignment submission
Demo can be found at: https://bizinbiz-demo.netlify.app/

## Overview

All required features as well as the bonus ChartView tab are implemented. 

- TableView displays a list of unique locations and their corresponding **average** salaries that is calculated by averaging all current salaries belonging to that particular location. A total of average salaries currently in the table is displayed in the last row of the table.
- ChartView displays a bar-chart of locations vs average salaries.
- All data in both the table and the chart is searchable using location name.

## Prerequisites

* [Node Package Manager](https://nodejs.org/en/)
* [Create-React-App](https://github.com/facebook/create-react-app)
* [TypeScript](https://www.typescriptlang.org/download)

## Installation


1. Clone the repo:
   ```sh
   git clone https://github.com/vaibhavpras/interview
   ```
2. Navigate to the project directory:
   ```sh
   cd ./interview/frontend
   ```
1. Install dependencies:
   ```sh
   npm install
   ```
   If you face errors related to ```react-tabs ```, try installing it separately
   ```sh
   npm install @types/react-tabs
   ```
   If the error persists, try using yarn instead.
   
1. Serve to your `localhost`: 
   ```sh
   npm start
   ```

## Final Thoughts

This was quite an easy coding assignment. However, I did face a few challenges:

Firstly, I have never worked with TypeScript before, so I had to begin with learning the fundamentals of TypeScript. It was not hard to grasp the basic concepts of TS since I have previous experience with JavaScript, which TS is a superset of, and statically-typed languages like Java. My code does work fine, but I'm not sure if I have correctly implemented certain TypeScript features like type-declaration for dynamic objects. I do plan on continuing with learning TypeScript since I had planned to pick it up eventually anyway.

Secondly, my Linux machine was giving me problems with installing dependencies. So, it took me a while to debug those issues and this assignment ended up taking more time than I expected. And since I have to attend to something important today, I am on a bit of a time crunch and will not be able to implement unit tests. If that is something that will play a large factor in my application's decision, please let me know and I will try implementing it.

