// demo from "https://stoplight.io/cors-proxy/https://raw.githubusercontent.com/stoplightio/studio-demo/master/reference/todos/todo.v1.yaml"

(async () => {
  let paths = {};
  let components = { examples: {}, schemas: {} };

  for (var [key, value] of Object.entries(window.files)) {
    const response = await fetch(value);
    const responseJSON = await response.json();
    for (var [subKey, subValue] of Object.entries(responseJSON)) {
      if (subKey == "examples" || subKey == "schemas") {
        components[subKey] = Object.assign(components[subKey], subValue);
      } else {
        paths[subKey] = subValue;
      }
    }
  }

  const apiDescriptionDocument = {
    openapi: '3.1.0',
    info: {
      title: 'Some Awesome API',
      version: '1.0.0'
    },
    components: components,
    paths: paths
  };

  setElemnt(apiDescriptionDocument);
})();

function setElemnt(params) {
  const docs = document.getElementById('docs');
  docs.apiDescriptionDocument = params;
}