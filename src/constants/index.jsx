import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Anasayfa", href: "#" },
  { label: "Hakkımda", href: "#" },
  { label: "Referanslarım", href: "#" },
  { label: "İletişim", href: "#" },
];

export const testimonials = [
  {
    user: "Batuhan KARASU",
    company: "Proje Dent",
    image: user1,
    text: "Biz volkanla 4. yılı tamamladık artık. Reklam, web yazılım ve tasarım alanında kendisinden destek alıyoruz. Gerçekten çok başarılı, başarılarının devamını diliyorum.",
  },
  {
    user: "Arda KEMENT",
    company: "Dent KEMENT",
    image: user2,
    text: "Biz Volkan bey ile Web yazılım ve tasarım alanlarında çalışıyoruz. Yakında cliniciğimizin inşaatı tamamlanacak ve reklam alanında da kendisi ile ilerlemeyi düşünüyoruz. ",
  },
  {
    user: "Nedim AYHAN",
    company: "Ayhanlar Holding",
    image: user3,
    text: "Biz mobil app alanında volkan beyden destek almayı tercih ettik. Oldukça başarılı protatipler ve tasarımlar çıkarttı karşımıza. Çalışmalarımıza Volkan ile devam etmekten mutluluk duyuyoruz.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Yazılım Geliştirme",
    description:
      "Web sitenizin kaynak kodlarını revize ederek sayfa hızı ve müşteri deneyimi için en iyi hale getirebilirim.",
  },
  {
    icon: <Fingerprint />,
    text: "Seo Geliştirme",
    description:
      "Google'da reklamsız öne çıkabilmek için SEO geliştirmeleri yapabilirim.",
  },
  {
    icon: <ShieldHalf />,
    text: "Dijital Reklamlar",
    description:
      "Dijital reklamlarınızı Dünya'nın her yerinde potansiyel müşterilerinize ulaştırabilirim.",
  },
  {
    icon: <BatteryCharging />,
    text: "Tasarım",
    description:
      "Üst düzey tasarımlar ile rakiplerinizin önüne geçmenizi sağlayabilirim.",
  },
  {
    icon: <PlugZap />,
    text: "Haritalar",
    description:
      "Google, Apple ya da Yandex gibi haritalarda adresinizin kaydınız sağlayabilirim.",
  },
  {
    icon: <GlobeLock />,
    text: "Google Rakip Analizi",
    description:
      "Google'da rakiplerinize karşı ne durumda olduğunuzu size gösterebilirim.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
