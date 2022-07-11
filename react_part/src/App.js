import { AddTask } from "./AddTask";

function App() {
  return <AddTask />;
}

export default App;

// Sending data from react to express

//const url = localhost:4000/api/users/register;
// const usersData= [];

// let getData = () => {
// axios.get(url)
//    .then(res => usersData.push(res.data))
//    .catch(err => console.log(err.data))
// }

// Receiving data from react to express

// const reactData = [{ id: 1, name:' Tom'}, { id: 2, name:' Sarah'}];
// const url = localhost:4000/api/users/register;

// let sendData = () => {
// axios.post(url, reactData)
//    .then(res => console.log('Data send'))
//    .catch(err => console.log(err.data))
// }
