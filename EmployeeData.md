# An SPA that displays employee's data

Please refer to the file EmployeeDataset.json for source data.

Build a React Single Page Application displaying an employee dataset in the following format:

The application should have two views which can be toggled through tabs. The first view is compulsory and the second one will fetch you bonus points.
- (Compulsory) Table View:
  * The first tab should show a table view of the data where salaries are aggregated by location. (Aggregate can refer to either mean or median of the _currSalary_. You can chose whatever you want). Refer to TableMockup.png for sample table view. For each location, aggregate the salary across different employees and display the output value in the table. The columns should be (Location, Salary).
- (*Bonus) Chart View:
  * The second tab should show a bar chart of the dataset where the x axis represents the locations and the y axis represents aggregated salaries.

(Compulsory) Additionally, we would like you to build search capability using search box for all the locations from the dataset. 
By default, all locations are displayed on the chart and table. When searching a location, both chart and table show the data relevant to the selected locations.

## Provided

To save you time, we have provided the following things:
- A React boilerplate application skeleton
- A dataset where each datapoint is the data of a single employee(EmployeeDataset.json)
- A design mockup for the table view

## Requirements

- The application must work 
- The code should be production ready (tested, documented, etc)
- The table component should look as close to the mockup provided. Since we aren't providing a design mockup for the other components,
  its ok to ignore the look and feel for them and focus on functionality.

## Library Suggestions

You could use any library of your choice to build the application. To point you in the right direction, here are some suggestions -

- Charting library for the bar chart - https://github.com/reactchartjs/react-chartjs-2, https://github.com/plouc/nivo
- State Management - You could simply use react props and state, react context api, redux, mobx, or any other setup you are comofortable with.
- UI Components - For tabs, search box, you could use Material Ui, Evergreen UI, Ant Design, etc
- Styling - We prefer to avoid inline styles in react. Instead you should use a popular css-in-js solution such as 
  https://styled-components.com/, https://emotion.sh/docs/introduction, https://material-ui.com/styles/basics/, bootstrap, tailwindcss, or just stylesheets.
- Testing - React Testing Library, Jest, Enzyme, etc

Good luck!
