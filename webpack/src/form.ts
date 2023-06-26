export const formData = (form: HTMLFormElement) => {  // Create a function that accepts a form of the type HtmlForm
  const inputs = form.querySelectorAll('input');  // Gets all the input from the form
  let values: { [prop: string]: string } = {};  // Values is an object with the key as the input id and the value as the input value
  inputs.forEach(input => {         // All the properties in our object must be of type string
    values[input.id] = input.value;
  });
  return values;
}

