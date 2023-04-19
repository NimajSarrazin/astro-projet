import React from "react";
import { HiOutlineSun, HiOutlineRss,} from "react-icons/hi";
import Button from "./btn/Button";

export default function Navbar()
 {
  return (
    <nav className="flex justify-between p-12 mx-auto">
      <div className="flex space-x-3">
        <img src="img/rocket.png" alt="" className="w-9"/>
        <p>AstrosWind</p>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="">Landing</a>
        </li>
        <li>
          <a href="">Pages</a>
        </li>
        <li>
          <a href="">Widgets</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
      <div className="flex items-center space-x-8">
        <HiOutlineSun />
        <HiOutlineRss />
        <Button title="Download" />
      </div>
    </nav>
  );
}
