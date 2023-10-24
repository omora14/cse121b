// Module to fetch external data
export function fetchData() {
    // Replace this URL with your own data source
    const dataURL = 'https://run.mocky.io/v3/feed470f-81ad-4a8e-8c5c-5c72753276bd';
  
    return fetch(dataURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }