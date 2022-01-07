<div align="center">
    <img alt="School of Code" src="./images/soc-logo.png" width="60" />
</div>
<h1 align="center">
  ⚛️ Hackathon: React-athon! ⚛️
</h1>

## Task

Use the skills in React we've been learning all week to create a to do list app.

Use the requirements here to plan out your MVP of your app - users should be able to add a todo to the list and delete items off of the list displayed on the view. Architect your components according to the component tree below. Each of your components should have the state and behavior listed below.

You'll need to initialize your app with [create-react-app](https://create-react-app.dev/docs/getting-started/) in this repository. Remember to organize your folder structure so you have a components folder within your `src` with a subfolder for every component.

Once you finish your MVP and have met all the requirements in state and behavior, plan out and develop additional features. Be creative! Some ideas:

- Style it up with CSS so your UI looks polished and is easy to use.
- Add additional functionality to your todos. This could include the ability to cross off as well as delete, the ability to rank todos by date and/or priority, the ability to categorize todos, etc.
- Are there any libraries or APIs you could use to add features to your todo list?

## Requirements

### Component Tree

- App
  - Input
    - text input
    - add to list button
  - List
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
        ...

### App

_state_

- list of to dos

_behaviour_

- add item to list
- remove item from list
- render an Input and List

### Input

_state_

- text

_props_

- add function

_behaviour_

- render an input field and a button
- change of input text will update state of this component
- button click will call the add function from props with value of input

### List

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a `ul`

### List item

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index
