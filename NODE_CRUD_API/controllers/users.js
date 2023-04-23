import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
    console.log("Post route reached");
    console.log(req.body);
    const user = req.body;
  
    const userWithId = { ...user, id: uuidv4() };
    users.push(userWithId);
  
    res.send(
      `User with  the name${user.firsName + user.lastName} added to the database!`
    );
  }
  export const getUsers = (req, res) => {
    res.send(users);
  }

  export const getUser =(req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
  }

  export const deleteUser= (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user with the id ${id} deleted from the database.`);
  };

  export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firsName, lastName, age } = req.body;
    const userToBeUpadated = users.find((user) => user.id === id);
    if (firsName) userToBeUpadated.firsName = firsName;
  
    if (lastName) userToBeUpadated.lastName = lastName;
  
    if (age) userToBeUpadated.age = age;
  
    res.send(`user with the id ${id} updated from the database.`);
  };
