import { SidebarConfig } from '@vuepress/theme-default';

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Guide',
      collapsible: true,
      children: [
        '/README.md',
        '/getting-started/adding-workflow.md',
        '/getting-started/element-selector.md',
      ],
    },
    {
      text: 'Blocks',
      collapsible: true,
      children: [
        {
          text: 'General',
          collapsible: true,
          children: [
            '/blocks/trigger.md',
            '/blocks/execute-workflow.md',
            '/blocks/delay.md',
            '/blocks/export-data.md',
            '/blocks/repeat-task.md',
            '/blocks/webhook.md',
            '/blocks/loop-data.md',
            '/blocks/loop-breakpoint.md',
            '/blocks/blocks-group.md',
          ],
        },
        {
          text: 'Browser',
          collapsible: true,
          children: [
            '/blocks/active-tab.md',
            '/blocks/new-tab.md',
            '/blocks/new-window.md',
            '/blocks/proxy.md',
            '/blocks/go-back.md',
            '/blocks/go-forward.md',
            '/blocks/close-tab.md',
            '/blocks/take-screenshot.md',
            '/blocks/browser-event.md',
          ],
        },
        {
          text: 'Web Interaction',
          collapsible: true,
          children: [
            '/blocks/event-click.md',
            '/blocks/get-text.md',
            '/blocks/element-scroll.md',
            '/blocks/link.md',
            '/blocks/attribute-value.md',
            '/blocks/forms.md',
            '/blocks/javascript-code.md',
            '/blocks/trigger-event.md',
            '/blocks/switch-to.md',
            '/blocks/upload-file.md',
          ],
        },
        {
          text: 'Online Services',
          collapsible: true,
          children: [
            '/blocks/google-sheets.md',
          ],
        },
        {
          text: 'Conditions',
          collapsible: true,
          children: [
            '/blocks/conditions.md',
            '/blocks/element-exists.md',
          ],
        },
      ],
    },
    {
      text: 'API Reference',
      collapsible: true,
      children: [
        '/api-reference/data-columns.md',
        '/api-reference/reference-data.md',
        '/api-reference/global-data.md',
        '/api-reference/blocks.md',
      ],
    },
  ],
}