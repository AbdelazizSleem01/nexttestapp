import { getSlug } from "./Slugify";

export async function getPosts() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await fetchData.json();
    return posts;
}


export async function getPhoto() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await fetchData.json();
    return photos;
}


export async function getPost(name) {
    const posts = await getPosts()
    const post = posts.filter(item => getSlug(name) === getSlug(item.name))[0];
    return post;
}
