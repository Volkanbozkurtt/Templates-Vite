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
    title: "Hızlandırılmış Kodlar",
    description:
      "Güncellenmiş kodlar ( Sıkıştırılmış ve optimize edilmiş ) ile daha hızlı bir website",
  },
  {
    title: "Hızlı İndex",
    description:
      "Sayfa hızınız arttıkça Google sizi daha iyi tanır çünkü Google bot gezinti süresi 1.30 saniyedir.",
  },
  {
    title: "Özelleştirilmiş Arayüz",
    description:
      "Geliştirilen arayüzlerin ilhamını awwwards.com'da ki ödüllü sitelerden baz alıyoruz.",
  },
  {
    title: "Trafik Kalitesi",
    description:
      "Yenilenmiş ve güncellenmiş bir sitede son kullanıcı daha fazla vakit geçirerek etkileşiminizi arttıracaktır",
  },
];

export const pricingOptions = [
  {
    title: "Seo",
    price: "$350",
    features: [
      "3 Aylık Seo",
      "En çok aranan kelimeler",
      "Kullanıcının ilgi alanı",
      "Eksiksiz arama motoru kayıtları",
    ],
  },
  {
    title: "Pro",
    price: "$1000",
    features: [
      "Web Site Tasarımı",
      "Dijital Eksiksiz Kayıtlar",
      "Haritalandırma",
      "Google ADS Kurulumu",
    ],
  },
  {
    title: "Yıldız",
    price: "$2000",
    features: [
      "Global Web Site",
      "Seo Optimizasyonu",
      "Dijital Reklam",
      "Blog Geliştirme",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Ayhanlar Holding" },
  { href: "#", text: "DF Diş Group" },
  { href: "#", text: "Yalova Terma City" },
  { href: "#", text: "Ortaşlar Group" },
  { href: "#", text: "TRT1" },
];

export const platformLinks = [
  { href: "#", text: "İnstagram" },
  { href: "#", text: "X" },
  { href: "#", text: "GitHub" },
  { href: "#", text: "LinkEdin" },
  { href: "#", text: "Meta" },
];

export const communityLinks = [
  { href: "#", text: "FabGYM" },
  { href: "#", text: "BD Karavan Shop" },
  { href: "#", text: "Qlune" },
  { href: "#", text: "Ülker Medya" },
  { href: "#", text: "Portex Shine" },
];
