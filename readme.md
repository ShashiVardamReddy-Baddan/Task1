# Breif description of the implementation of Task-1
In src directory ,it has two folders named db and models.

In models, i have described the schema of server in server.js file.

In db, i have made the connection of mongodb to the project.

In index.js i have created the object of express for listening to the postman requests, then created 5 rest api endpoints for creating server, reading servers, reading servers by id, reading servers by name, deleting server.

# Endpoints working visualisation:
step-1 : started the nodejs server (index.js)
![Screenshot (774)](https://user-images.githubusercontent.com/63971239/228334654-7443a959-f058-46a1-8515-cfb5db8cde73.png)

step-2 : add server endpoint
![Screenshot (776)](https://user-images.githubusercontent.com/63971239/228334966-3c3fc9e7-e889-4710-8d2f-1c6918e7b969.png)

step-3 : servers table view through mongodb compass
![Screenshot (777)](https://user-images.githubusercontent.com/63971239/228335370-211a5fc8-200d-4e99-b297-a6b61b41f205.png)

step-5 : display servers
![Screenshot (778)](https://user-images.githubusercontent.com/63971239/228335648-9cee26e3-6a22-4936-ba1f-0e5898a284cb.png)

step-6 : display server by id
![Screenshot (779)](https://user-images.githubusercontent.com/63971239/228335750-99f36bad-731f-4c64-9c7e-81fd76b59f7a.png)

step-7 : delete server by id
![Screenshot (780)](https://user-images.githubusercontent.com/63971239/228335992-4fcdf271-bf2b-479f-aa82-51928b98eaf8.png)

servers table view through mongodb compass after deletion
![Screenshot (782)](https://user-images.githubusercontent.com/63971239/228336181-a12a626c-9e04-46c3-a6d1-7062cbfbec51.png)

step-7 : display server by name
![Screenshot (781)](https://user-images.githubusercontent.com/63971239/228336490-5d12a4b0-4574-4ab7-bddc-6f584c59be0b.png)
