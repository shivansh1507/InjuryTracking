# Injury Tracking System

This is a web application for tracking and managing injury reports. Users can create, view, update, and delete injury reports. 

[Front-End Deployment-](https://injurytracking.netlify.app/)

![Screenshot-](https://raw.githubusercontent.com/shivansh1507/InjuryTracking/master/Desktop/Lief/injury-tracking-system/Injury-tracking.jpg)

![Screenshot Login Page Auth0-](https://raw.githubusercontent.com/shivansh1507/InjuryTracking/master/Desktop/Lief/injury-tracking-system/Injury-tracking%20login.jpg)

The application includes the following features:


## Features

### 1. Report Management

- **Create, View, Update, and Delete Injury Report:**
  Users can perform CRUD operations on injury reports, including providing the name of the reporter, date & time of the injury, and details for each area encircled on the body map.

- **Body Map:**
  Users can encircle different areas of injury on a body map image, and the system automatically labels each circle with a number.

- **List of Injuries:**
  For each encircled area, users can provide details of the injury.

### 2. List of Reports

- **View List/Table of All Injuries:**
  Users can see a table of all reported injuries, including the name, date/time of injury, and date of the report.

- **Sorting:**
  Users can sort the list/table by name, date/time of injury, or date of the report.

- **Search:**
  Users can search for specific injuries by name.

- **Filter:**
  Users can filter injuries by the start and end date of the injury and date of the report.

### 3. User Authentication

- **Register/Login/Logout:**
  Users can register for an account using a username and password. Additionally, users can log in and log out of their accounts.

- **Authentication Providers:**
  Users have options for Google login and email login.

- **Task History:**
  Authenticated users can view a history of their tasks.

## Tech Stack

- **Front-end:**
  - React.js 
  - React Context for state management.
  - 
- **Authentication:**
  - Auth0 for user authentication.
  - Options for Google login and email login.
