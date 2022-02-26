export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6215f204ec3468cccd36b876',
                  title: 'Sanity Studio',
                  name: 'jesse-alvarado-nextjs-studio',
                  apiId: '2267cb8b-9351-4f07-ab76-b0deab2d8039'
                },
                {
                  buildHookId: '6215f20473d3241e7117914b',
                  title: 'Landing pages Website',
                  name: 'jesse-alvarado-nextjs',
                  apiId: '8d3d5be6-62e0-43c4-9281-ead64f341938'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alvara/jesse-alvarado-nextjs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jesse-alvarado-nextjs.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently Edited Posts', order: '_updatedAt desc', limit: 10, types: ['post'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
