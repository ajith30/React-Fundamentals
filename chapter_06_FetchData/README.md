## React Folder Structure
- As per Documentation there is no mandetory way to structure our project.
- But given example project structure.
- Usually all the codes goes into src folder and any constants or comon functions will goes inside utils folder.

## Export and import in JS

### Export
- 1. Default Export
  export default <variable>

- 2. Named Export
  export {<variable>}

### Import
- 1. Importing default Export
  import <vriable> from "path"  
  -Note: while importing default exported variable we can modify the variable to any name and cane imported.

- 2. Export
  import {<variable>} from "path"



## Optional chaining

    const cardsWithRestaurants = allRes.data.cards.filter(card => 
       card.card &&
       card.card.card &&
       card.card.card.gridElements &&
       card.card.card.gridElements.infoWithStyle &&
       card.card.card.gridElements.infoWithStyle.restaurants !== undefined
     );