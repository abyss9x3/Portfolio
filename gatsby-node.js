const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // Generate a slug from file path if not provided in frontmatter
    const generatedSlug = createFilePath({ node, getNode, basePath: 'content/posts' });

    createNodeField({
      node,
      name: 'slug',
      value: node.frontmatter.slug ? node.frontmatter.slug : generatedSlug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        path: node.fields.slug, // ✅ now always defined
      },
    });
  });
};
