import Image from "next/image";
import axios from "axios";

const name =  axios.get('http://localhost:8080/v1/acount');


export default function Home() {
  return  <h1>{ name } </h1>
}
