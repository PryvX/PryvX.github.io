import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PryvX Documentation',
  description: 'PryvX PET data collaboration platform documentation',
  lastUpdated: true,
  cleanUrls: false,
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/overview|^/features|^/use-cases|^/how-to-guide' },
      { text: 'Solutions', link: '/solutions' },
      { text: 'Launch App', link: 'https://platform.pryvx.com' }
    ],

    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.66 0 3 3.58 3 8s-1.34 8-3 8-3-3.58-3-8 1.34-8 3-8zm-4.6.9C6.1 6.24 5 8.99 5 12s1.1 5.76 2.4 7.1A9.96 9.96 0 0 1 4 12a9.96 9.96 0 0 1 3.4-7.1zm9.2 0A9.96 9.96 0 0 1 20 12a9.96 9.96 0 0 1-3.4 7.1c1.3-1.34 2.4-4.09 2.4-7.1s-1.1-5.76-2.4-7.1zM4.5 9h15M4.5 15h15" stroke="currentColor" stroke-width="0" fill="none"/></svg>' }, link: 'https://www.pryvx.com' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 PryvX AB'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        link: '/overview',
        items: [
          { text: 'How PryvX Works', link: '/overview/how-pryvx-works' },
          { text: 'Privacy & PII Handling', link: '/overview/privacy-and-pii-handling' },
          { text: 'Collaboration Rooms', link: '/overview/collaboration-rooms' },
          { text: 'Query Permissions & Credits', link: '/overview/query-permissions-and-credits' },
          { text: 'Platform UI', link: '/overview/platform-ui' }
        ]
      },
      {
        text: 'Features',
        collapsed: true,
        link: '/features',
        items: [
          { text: 'Collaboration Rooms', link: '/features/collaboration-rooms' },
          { text: 'Local PII Hashing Tool', link: '/features/local-pii-hashing' },
          { text: 'Multi-Cloud Dataset Connections', link: '/features/multi-cloud-dataset-connections' },
          { text: 'No-Code AI Query Builder', link: '/features/no-code-ai-analysis' }
        ]
      },
      {
        text: 'Use Cases',
        collapsed: true,
        link: '/use-cases',
        items: [
          { text: 'Telecom Fraud Detection', link: '/use-cases/telecom-banking-fraud-prevention' },
          { text: 'Private Credit Scoring', link: '/use-cases/private-credit-scoring' },
          { text: 'Threat Intelligence Sharing', link: '/use-cases/threat-intelligence-sharing' },
          { text: 'Customer Overlap & Marketing Analytics', link: '/use-cases/customer-overlap-marketing-analytics' }
        ]
      },
      {
        text: 'How-To Guide',
        collapsed: true,
        link: '/how-to-guide',
        items: [
          { text: 'Creating a Collaboration Room', link: '/how-to-guide/creating-a-collaboration-room' },
          { text: 'Hashing PII Before Upload', link: '/how-to-guide/hashing-pii-before-upload' },
          { text: 'Adding a Dataset', link: '/how-to-guide/adding-a-dataset' },
          { text: 'Inviting Collaborators & Query Permissions', link: '/how-to-guide/inviting-collaborators-and-query-permissions' },
          { text: 'Building and Running a Task', link: '/how-to-guide/building-and-running-a-task' },
          {
            text: 'Reviewing Task Results',
            link: '/how-to-guide/reviewing-results',
            items: [
              { text: 'Understanding Task Status & Credits', link: '/how-to-guide/reviewing-results/understanding-task-status-and-credits' }
            ]
          },
          {
            text: 'Exporting Results',
            link: '/how-to-guide/exporting-insights',
            items: [
              { text: 'Generating an Audit & Compliance Report', link: '/how-to-guide/exporting-insights/generating-an-audit-compliance-report' }
            ]
          }
        ]
      }
    ]
  }
})
