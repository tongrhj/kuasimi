const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');

const posts = fs.readdirSync('./src/posts').map(postFilename => {
  const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
    encoding: 'utf8'
  });
  const postFrontMatter = frontMatter(postContent);
  return {
    title: postFrontMatter.attributes.title,
    slug: postFrontMatter.attributes.slug,
    html: marked(postFrontMatter.body)
  }
});

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
