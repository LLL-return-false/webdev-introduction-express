
// Get the element we want to edit
const rootElement = document.getElementById("target");

const makeElement = (content) => {
   return `
   <div>
      <p id="returned">
         If the server responded, the returned data is:<br/>
      </p>
      <p id="response">${content}</p>
   </div>
   `
}

const insertFetchedElement = async (name) => {
   const theFetch = await fetch(`http://localhost:4200/hello-world/${name}`);

   const response = await theFetch.json();

   rootElement.innerHTML += makeElement(response.content);
}

insertFetchedElement('John');
