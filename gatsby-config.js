module.exports = {
  siteMetadata: {
    title: "Gatsby e-commerce store",
    description: "",
    author: "Marek Rogala",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-layout",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 400,
              linkImagesToOriginal: false
          }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: 
        {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
