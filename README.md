*/*/ RAEDME file /*/*

## Objective
This lab demonstrates the use of different CSS selectors to style an HTML page about AI in Web Design.

## 1. Universal and Type Selectors
- Used the universal selector `*` to apply a default `font-family: sans-serif` and `line-height: 1.6` to all elements.
- Set the body background color to `#f4f4f4`.
- Centered all `<h1>` and `<h2>` headings and gave them a dark blue color `#336699`.
- Added `margin-bottom: 1em` to all `<p>` elements for readability.

## 2. Class and ID Selectors
- The paragraph with ID `#special` has a light yellow background (`#fffacd`) and `padding: 10px`.
- Elements with class `.hello` are green (`#28a745`) and bold.

## 3. Descendant and Child Selectors
- Only the `<h2>` elements that are direct children of `.main-content` and `.ai-tools` are uppercase.
- All `<li>` elements inside `.ai-tools` use `list-style-type: square`.
- Added `padding-left: 20px` to `<ul>` inside `.ai-tools`.

## 4. Attribute Selectors
- Styled `input[type="text"]` with a border and padding.
- Gave `input[type="submit"]` a blue background and white text.

## 5. Pseudo-classes and Pseudo-elements
- All `<a>` links are blue .
- On hover, links have no underline and become darker blue.
- Visited links change to gray (`#6c757d`).
- Inputs in focus get a `2px solid blue` border.

### Purpose of `:focus` Pseudo-class
The `:focus` pseudo-class is used to style an element when it is **active** or **selected** by the user, such as when typing in a text box.  
It improves **user experience and accessibility**, showing the user which field is currently active.

## HTML Page Structure
<html>
 └── <body>
      ├── <header>
      │     ├── <h1> Main Title </h1>
      │     └── <p> Introduction paragraph </p>
      │
      ├── <div class="main-content">
      │     ├── <h2> Section Title </h2>
      │     ├── <p> Paragraphs about AI in design </p>
      │     └── <p id="special"> Highlighted paragraph </p>
      │
      ├── <div class="ai-tools">
      │     ├── <h2> AI Tools </h2>
      │     ├── <p> Description paragraph </p>
      │     └── <ul>
      │           ├── <li> GitHub Copilot </li>
      │           ├── <li class="hello"> Tabnine </li>
      │           ├── <li> Snyk Code </li>
      │           └── <li> ChatGPT for code generation </li>
      │         </ul>
      │
      ├── <div class="challenges">
      │     ├── <h2> Challenges and Ethics </h2>
      │     ├── <p> Ethical paragraph </p>
      │     └── <p> Privacy and bias paragraph </p>
      │
      ├── <footer>
      │     ├── <h2> Join the Conversation </h2>
      │     ├── <form> (inputs, labels, checkbox, and submit button) </form>
      │     └── <p> Links (normal and visited) </p>
      │
      └── <hr>

## BY
**Anfel Bouchetit** & **Anfel Benghorieb**  
M1.STIC  
2025/2026
