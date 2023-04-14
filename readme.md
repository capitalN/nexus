- The task is to implement a single page React web application where you can access the details of Rick and Morty characters, with pagination, filter and search functionality.
- Refer to this API documentation - [**https://rickandmortyapi.com/documentation/**](https://rickandmortyapi.com/documentation/)
- On the initial load of the page, render the Rick and Morty characters in the form of cards.
- Use this API
  ```yaml
  https://rickandmortyapi.com/api/character
  ```
- Each card should have the picture of the character, with their name and the status of the character (Status will be either Alive, Dead or Unknown)

![                                                    Character Card Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f9b6c42-944a-4d7b-a570-1ac677379cbc/Rick__Morty.png)

- **Pagination** should be implemented here by displaying only 12 characters per page.
- Display the card in form of grids with **4 rows x 3 columns** per page.
- Clicking on any of the card following more information of the character should be shown on the dynamic route **`/character/<character_id>`**
  - Image of the Character
  - Name
  - Status
  - Species
  - Type
  - Gender
  - Origin
  - Location
- There should be a search bar at the top of the page, where the user can **search for characters**.
- The user should be able to **filter the character** by the following criteria
  - Filter By Status ( Select tag with “Alive”, “Dead” or “Unknown” as options)
  - Filter By Gender ( Select tag with “Male” or “Female” as options)
- The **Pagination**, **Search** and **Filter** functionality should all work together seamlessly.
- Refer the API documentation to understand the supported query parameters.


- React
- React Router
- API Requests
- Filter, Search, Pagination
- UI
- Code cleanliness