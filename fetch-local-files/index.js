// Fetch the data from the .json file and display each persons name and age like this: "John is 20".

fetch("people.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person) => {
      const div = document.createElement("div");
      div.innerHTML = `${person.name} is ${person.age} years old.`;
      document.body.appendChild(div);
    });
  });
