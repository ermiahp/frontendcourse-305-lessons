export const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

export const baseURL = (query) => `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
export const imageUrl = (farm, server, id, secret) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;