# React Native To-Do List App

This is a simple React Native To-Do List app that allows users to create, view,
and manage their tasks. The app includes screens for listing tasks, viewing task
details, and logging in.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screens](#screens)
  - [Login](#login)
  - [List](#list)
  - [Details](#details)
- [Firebase Setup](#firebase-setup)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/Dragon2000v/react-native-todo-app
cd react-native-todo-list
npm install
```

Configuration Before running the app, you'll need to configure Firebase:

1. Create a new project in the Firebase Console.
2. Enable Email/Password Authentication in the Firebase Authentication settings.
3. Add a new Web App in Firebase and copy the Firebase configuration.
4. Replace the content in firebaseConfig.ts with your Firebase configuration.

```typeScript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

## Usage

To run the app, use the following command:

```bash
npm start
```

This will start the Expo development server. You can then open the app on an
emulator or a physical device using the Expo Go app.

### Screens

## Login

The Login.tsx screen allows users to sign up and sign in using their email and
password. It utilizes Firebase Authentication for handling the user
authentication.

- Sign Up: Creates a new user account with an email and password.
- Sign In: Authenticates an existing user with an email and password.

## List

The List.tsx screen displays a list of to-do items. Users can view their tasks
and navigate to the details screen for more information on each task.

## Details

The Details.tsx screen provides detailed information about a selected task.
Users can view task details and make updates if needed.

### Firebase Setup

Ensure that you have set up Firebase correctly and initialized it in your app.
You should have a Firebase configuration file (firebaseConfig.ts) in your
project.

Dependencies

- React Native
- Firebase Authentication Check the package.json for a complete list of
  dependencies.
