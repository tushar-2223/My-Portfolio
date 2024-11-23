import { NavitemType } from '@/lib/types';
import { LuHome, LuUser, LuStickyNote, LuBox, LuMail } from 'react-icons/lu';

export const Navitem: NavitemType[] = [
    {
        id: 1,
        name: 'Home',
        icon: <LuHome />,
        link: '/'
    },
    {
        id: 2,
        name: 'About me',
        icon: <LuUser />,
        link: '/About'
    },
    {
        id: 3,
        name: 'Blogs',
        icon: <LuStickyNote />,
        link: '/Blogs'
    },
    {
        id: 4,
        name: 'Projects',
        icon: <LuBox />,
        link: '/Projects'
    },
    {
        id: 5,
        name: 'Contact me',
        icon: <LuMail />,
        link: '/Contact'
    },
]