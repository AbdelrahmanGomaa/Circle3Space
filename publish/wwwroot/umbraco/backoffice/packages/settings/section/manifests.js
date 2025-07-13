import { UMB_SETTINGS_SECTION_ALIAS } from './constants.js';
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS } from '@umbraco-cms/backoffice/section';
export const manifests = [
    {
        type: 'section',
        alias: UMB_SETTINGS_SECTION_ALIAS,
        name: 'Settings Section',
        weight: 800,
        meta: {
            label: '#sections_settings',
            pathname: 'settings',
        },
        conditions: [
            {
                alias: UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS,
                match: UMB_SETTINGS_SECTION_ALIAS,
            },
        ],
    },
];
