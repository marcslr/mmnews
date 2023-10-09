import React from "react"; // Make sure to import React

function Menu({ active, setActive, setCategory }) {
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" }, // Corrected typo: "Business" instead of "Buisness"
    { id: 3, name: "Entertainment", value: "entertainment" }, // Corrected typo: "Entertainment" instead of "Entertainement"
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sport", value: "sport" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  function onClick(id, value) {
    // Corrected function name to onClick
    setActive(id);
    setCategory(value);
  }

  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => onClick(link.id, link.value)} // Corrected onClick attribute
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
