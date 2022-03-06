
// Get the element we want to edit
const rootElement = document.getElementById("target");

// Returns a template with the specified parameter content inside it
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

// This defines a function that both calls the API, handles the response and shoves it inside the element we selected
const insertFetchedElement = async (name) => {
   const theFetch = await fetch(`http://localhost:4200/hello-world/${name}`);

   const response = await theFetch.json();

   rootElement.innerHTML += makeElement(response.content);
}

// this calls the function that is above, manipulating the web page
insertFetchedElement('John');
