import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PryvX Documentation',
  description: 'PryvX Privacy-Enhancing Technology (PET) data collaboration platform documentation',
  lastUpdated: true,
  cleanUrls: false,
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/overview|^/features|^/use-cases|^/how-to-guide|^/api-reference' },
      { text: 'Solutions', link: '/solutions' }
    ],

    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.66 0 3 3.58 3 8s-1.34 8-3 8-3-3.58-3-8 1.34-8 3-8zm-4.6.9C6.1 6.24 5 8.99 5 12s1.1 5.76 2.4 7.1A9.96 9.96 0 0 1 4 12a9.96 9.96 0 0 1 3.4-7.1zm9.2 0A9.96 9.96 0 0 1 20 12a9.96 9.96 0 0 1-3.4 7.1c1.3-1.34 2.4-4.09 2.4-7.1s-1.1-5.76-2.4-7.1zM4.5 9h15M4.5 15h15" stroke="currentColor" stroke-width="0" fill="none"/></svg>' }, link: 'https://www.pryvx.com' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/PryvX/PryvX.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
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
          { text: 'Privacy-Enhancing Technologies', link: '/overview/privacy-enhancing-technologies' },
          { text: 'Confidential Clean Rooms', link: '/overview/confidential-clean-rooms' },
          { text: 'Deployment Models', link: '/overview/deployment-models' },
          { text: 'Platform UI', link: '/overview/platform-ui' }
        ]
      },
      {
        text: 'Features',
        collapsed: true,
        link: '/features',
        items: [
          { text: 'Secure Data Collaboration', link: '/features/secure-data-collaboration' },
          { text: 'Post-Quantum Cryptography', link: '/features/post-quantum-cryptography' },
          { text: 'Flexible Deployment', link: '/features/flexible-deployment' },
          { text: 'No-Code AI & Analysis', link: '/features/no-code-ai-analysis' }
        ]
      },
      {
        text: 'Use Cases',
        collapsed: true,
        link: '/use-cases',
        items: [
          { text: 'Telecom–Banking Fraud Prevention', link: '/use-cases/telecom-banking-fraud-prevention' },
          { text: 'Private Credit Scoring', link: '/use-cases/private-credit-scoring' },
          { text: 'Threat Intelligence Sharing', link: '/use-cases/threat-intelligence-sharing' },
          { text: 'IoT & Cybersecurity', link: '/use-cases/iot-cybersecurity' }
        ]
      },
      {
        text: 'How-To Guide',
        collapsed: true,
        link: '/how-to-guide',
        items: [
          { text: 'Creating a Workspace', link: '/how-to-guide/creating-a-workspace' },
          { text: 'Connecting a Data Source', link: '/how-to-guide/connecting-a-data-source' },
          { text: 'Defining a Collaboration Contract', link: '/how-to-guide/defining-a-collaboration-contract' },
          { text: 'Running a Joint Analysis', link: '/how-to-guide/running-a-joint-analysis' },
          {
            text: 'Reviewing Results',
            link: '/how-to-guide/reviewing-results',
            items: [
              { text: 'Verifying Computation Integrity', link: '/how-to-guide/reviewing-results/verifying-computation-integrity' }
            ]
          },
          {
            text: 'Exporting Insights',
            link: '/how-to-guide/exporting-insights',
            items: [
              { text: 'Audit Trail & Compliance Logs', link: '/how-to-guide/exporting-insights/audit-trail-and-compliance-logs' }
            ]
          }
        ]
      }
    ]
  }
})
