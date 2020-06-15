import axios from 'axios';

const async fetched_cache = () => {
  await axios({
    url: 'https://reqres.in/api/users?page=1'
    adapter: jsonpAdapter
  }).then((res) => {     
       window.localStorage.setItem('data', res.data);
  });
}
fetched_cache();

console.log(window.localStorage.getItem('data'));
