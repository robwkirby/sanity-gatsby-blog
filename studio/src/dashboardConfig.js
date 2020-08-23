export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f42910dc86c1031f7dfb343',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qg5mvxyw',
                  apiId: 'bb82b3aa-fdc0-425f-bee2-e781866ba6bb'
                },
                {
                  buildHookId: '5f42910d618e313cc3a4bf58',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rgifsd8r',
                  apiId: '5a441948-8817-468c-a2ce-24a76104baa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robwkirby/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rgifsd8r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
