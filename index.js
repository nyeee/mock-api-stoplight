(async () => {
  const docs = document.getElementById('docs');
  const paths = {};
  const apiDescriptionDocument = {
    openapi: '3.1.0',
    info: {
      title: 'Some Awesome API',
      version: '1.0.0'
    },
    paths: paths
  };

  docs.apiDescriptionDocument = apiDescriptionDocument;
})();

