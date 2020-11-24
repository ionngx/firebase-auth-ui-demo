import { Page } from '../models/page';

export const PAGES: Page[] = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    }, {
        title: 'Configuration',
        url: '/configuration',
        icon: 'settings'
    }, {
        title: 'String Resources',
        url: '/string-resources',
        icon: 'reader'
    },
    {
        title: 'Avatar',
        url: '/avatar',
        icon: 'person-circle'
    },
    {
        title: 'Provider Bar',
        url: '/provider-bar',
        icon: 'ellipsis-horizontal'
    },
    {
        title: 'Provider Stack',
        url: '/provider-stack',
        icon: 'list'
    },
    {
        title: 'Sign In',
        url: '/sign-in',
        icon: 'enter'
    },
    {
        title: 'Sign Up',
        url: '/sign-up',
        icon: 'person-add'
    }
];
