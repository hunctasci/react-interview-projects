import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChilren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChilren,
      [getCurrentLabel]: !displayCurrentChilren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChilren);

  return (
    <li>
      <div className='menu-item'>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChilren[item.label] ? (
              <FaMinus color='white' size={25} />
            ) : (
              <FaPlus color='white' size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChilren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
