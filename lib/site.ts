export const siteConfig = {
  name: "Highland Church",
  tagline: "Love Jesus, live like Jesus, lead others to Jesus.",
  address: "2926 Big Horn Avenue",
  city: "Cody, WY 82414",
  phone: "307-296-2688",
  email: "hello@highlandchurch.us",
  treasurerEmail: "treasurer@highlandchurch.us",
  serviceTimes: "Sundays @ 10am & 5pm",
  youtubeChannelId: "UCNDq_fUX-Z1SdPPXtpM1kig",
  youtubeHandle: "https://www.youtube.com/@highlandchurch2926",
  spotifyPodcast:
    "https://open.spotify.com/show/1NcuM6Xy65UBNqRVVEYd2Y",
  latestSermonVideoId: "EapWsfVbLvc",
};

export const churchCenter = {
  giving: "https://highlnd.churchcenter.com/giving",
  baptism: "https://highlnd.churchcenter.com/people/forms/785973",
  pastoralCare: "https://highlnd.churchcenter.com/people/forms/790371",
  hospitalVisit: "https://highlnd.churchcenter.com/people/forms/835751",
  babyDedication: "https://highlnd.churchcenter.com/people/forms/835824",
  wedding: "https://highlnd.churchcenter.com/people/forms/786025",
  prayer: "https://highlnd.churchcenter.com/people/forms/835740",
  connect: "https://highlnd.churchcenter.com/people/forms/993355",
  serve: "https://highlnd.churchcenter.com/people/forms/993334",
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Our church",
    href: "#",
    children: [
      { label: "Our Staff", href: "/our-team" },
      { label: "What we believe", href: "/what-we-believe" },
      { label: "Youth", href: "/youth" },
      { label: "Kids Ministry", href: "/kids-ministry" },
      { label: "Prayer", href: "/prayer-2" },
      {
        label: "Pastoral care",
        href: churchCenter.pastoralCare,
        external: true,
      },
      { label: "Baptism", href: churchCenter.baptism, external: true },
    ],
  },
  { label: "Events", href: "/upcoming-events" },
  { label: "Messages", href: "/messages" },
  { label: "Connect", href: "/connect" },
  { label: "Contact", href: "/contact" },
  { label: "Give", href: "/give" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/upcoming-events" },
  { label: "What we believe", href: "/what-we-believe" },
  { label: "Messages", href: "/messages" },
  {
    label: "Pastoral Care",
    href: churchCenter.pastoralCare,
    external: true,
  },
  { label: "Baptism", href: churchCenter.baptism, external: true },
];
