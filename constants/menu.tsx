import { Compass, CreditCard, HomeIcon, LucideIcon } from "lucide-react";

export type ConstantsMenuProps = {
  section?: boolean;
  integration?: boolean;
  id: number;
  label: string;
  icon: LucideIcon;
  link: string;
};

export const LANDING_PAGE_MENU: ConstantsMenuProps[] = [
  {
    id: 0,
    label: "Accueil",
    icon: HomeIcon,
    link: "/",
    section: true,
  },
  {
    id: 1,
    label: "Tarifs",
    icon: CreditCard,
    link: "/pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explorer",
    icon: Compass,
    link: "/explore",
    section: true,
  },
];
