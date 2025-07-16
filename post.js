class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.timestamp = new Date();
}
}

function createPost(content, author) {
	return new Post(content, author);
}
