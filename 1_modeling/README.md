# Modeling

## Introduction

Write a simple React **Editable Text Field** component

For the scope of this test, we just want to have a component that works with the following requirements :
- **Editable Field** has the following properties:
    - **name** : name indicating the title of the field
    - **value**  : value of the field that is editable
    - **mode** : either *read-only* or *edit* modes
- **Editable Field** has 2 modes : read-only and edit modes
- **Editable Field** is read-only by default and display like any other text (between <p></p> tag for example)

- On click on the field zone, it becomes editable (text are set into an input which can be modified by user), and a button "Validate" appears. On click on the "Validate" button, the text of the **Editable Field** becomes the text set on the input and the **Editable Field** comes back to read-only mode
- If user press Enter in edit mode, input text is validated and **Editable Field** comes back to read-only mode

Here is some views of the **Editable Field** :

*Editable Field on Read-only mode*

![Editable Field on Read-only mode](./read_mode.png)


*Editable Field on Edit mode*

![Editable Field on Edit mode](./edit_mode.png)

## Estimated Max Time
15min

## Scope

Browser Compatibility : minimum Internet Explorer 11, Chrome, Firefox
React Version :
- greater or equal than React 15 required
- React 16 preferred

Allowed Languages : Typescript, ES5, ES6