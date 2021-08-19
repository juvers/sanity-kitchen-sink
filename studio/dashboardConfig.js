export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '611e01c33fae4b99263da24e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ks7gpzo2',
                  apiId: '059941fb-68a4-4ac2-a398-313a88635900'
                },
                {
                  buildHookId: '611e01c334ad05c4edaacbae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-44bmtx3t',
                  apiId: 'f6bc9e6e-9976-499a-903b-6ed4f8902e3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juvers/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-44bmtx3t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
