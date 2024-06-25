import {
  CompassRegular,
  CompassSolid,
  HomeRegular,
  HomeSolid,
  LiveRegular,
  LiveSolid,
  ProfileSidebar,
  UserGroupRegular,
  UserGroupSolid,
  UserLeftRegular,
  UserLeftSolid,
} from '~/assets/icons';
import config from '~/config';
import { FooterMenuType, NavigationType } from './SidebarTypes';

const NAVIGATION: NavigationType[] = [
  {
    id: 'home-sidebar',
    title: 'for you',
    iconSolid: <HomeSolid />,
    iconRegular: <HomeRegular />,
    to: config.routes.home,
  },
  {
    id: 'explore-sidebar',
    title: 'explore',
    iconSolid: <CompassSolid />,
    iconRegular: <CompassRegular />,
    to: config.routes.explore,
  },
  {
    id: 'following-sidebar',
    title: 'following',
    iconSolid: <UserLeftSolid />,
    iconRegular: <UserLeftRegular />,
    to: config.routes.following,
  },
  {
    id: 'friends-sidebar',
    title: 'friends',
    iconSolid: <UserGroupSolid />,
    iconRegular: <UserGroupRegular />,
    to: config.routes.friends,
  },
  {
    id: 'live-sidebar',
    title: 'live',
    iconSolid: <LiveSolid />,
    iconRegular: <LiveRegular />,
    to: config.routes.live,
  },
  {
    id: 'profile-sidebar',
    title: 'profile',
    iconSolid: <ProfileSidebar />,
    iconRegular: <ProfileSidebar />,
    to: config.routes.profile,
  },
];

const FOOTER_MENU: FooterMenuType[] = [
  {
    id: 'footer-company',
    title: 'Company',
    list: [
      {
        id: 'footer-about',
        label: 'About',
        to: '/',
      },
      {
        id: 'footer-newsroom',
        label: 'Newsroom',
        to: '/',
      },
      {
        id: 'footer-contact',
        label: 'Contact',
        to: '/',
      },
      {
        id: 'footer-careers',
        label: 'Careers',
        to: '/',
      },
    ],
  },
  {
    seeMore: true,
    id: 'footer-program',
    title: 'Program',
    list: [
      {
        id: 'footer-tiktok-for-good',
        label: 'TikTok for Good',
        to: '/',
      },
      {
        id: 'footer-advertise',
        label: 'Advertise',
        to: '/',
      },
      {
        id: 'footer-tiktok-live-creator-networks',
        label: 'TikTok LIVE Creator Networks',
        to: '/',
      },
      {
        id: 'footer-developers',
        label: 'Developers',
        to: '/',
      },
      {
        id: 'footer-transparency',
        label: 'Transparency',
        to: '/',
      },
      {
        id: 'footer-tiktok-rewards',
        label: 'TikTok Rewards',
        to: '/',
      },
      {
        id: 'footer-tiktok-embeds',
        label: 'TikTok Embeds',
        to: '/',
      },
    ],
  },
  {
    seeMore: true,
    id: 'footer-terms-policies',
    title: 'Terms & Policies',
    list: [
      {
        id: 'footer-help',
        label: 'Help',
        to: '/',
      },
      {
        id: 'footer-safety',
        label: 'Safety',
        to: '/',
      },
      {
        id: 'footer-terms',
        label: 'Terms',
        to: '/',
      },
      {
        id: 'footer-privacy-policy',
        label: 'Privacy Policy',
        to: '/',
      },
      {
        id: 'footer-privacy-center',
        label: 'Privacy Center',
        to: '/',
      },
      {
        id: 'footer-creator-academy',
        label: 'Creator Academy',
        to: '/',
      },
      {
        id: 'footer-community-guidelines',
        label: 'Community Guidelines',
        to: '/',
      },
    ],
  },
  {
    id: 'footer-channels',
    seeMore: true,
    title: 'Channels',
    list: [
      {
        id: 'footer-dance',
        label: 'Dance',
        to: '/',
      },
      {
        id: 'footer-arts',
        label: 'Arts',
        to: '/',
      },
      {
        id: 'footer-food-and-drink',
        label: 'Food and Drink',
        to: '/',
      },
      {
        id: 'footer-tourism',
        label: 'Tourism',
        to: '/',
      },
      {
        id: 'footer-production-and-manufacturing',
        label: 'Production and Manufacturing',
        to: '/',
      },
      {
        id: 'footer-vehicles-and-transportation',
        label: 'Vehicles and Transportation',
        to: '/',
      },
      {
        id: 'footer-relationship',
        label: 'Relationship',
        to: '/',
      },
      {
        id: 'footer-tiktok-style',
        label: 'TikTok Style',
        to: '/',
      },
      {
        id: 'footer-athletics',
        label: 'Athletics',
        to: '/',
      },
      {
        id: 'footer-hobbies',
        label: 'Hobbies',
        to: '/',
      },
    ],
  },
];

export { NAVIGATION, FOOTER_MENU };
