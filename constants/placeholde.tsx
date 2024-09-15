import {
  Heart,
  LucideIcon,
  MegaphoneIcon,
  MessageCircle,
  PaperclipIcon,
  Smile,
  User2Icon,
} from "lucide-react";

export type createGroupPlaceholderProps = {
  id: number;
  label: string;
  icon: LucideIcon;
};

export const CREATE_GROUP_PLACEHOLDER: createGroupPlaceholderProps[] = [
  {
    id: 0,
    label: "Taux d'engagement élevé",
    icon: MegaphoneIcon,
  },
  {
    id: 1,
    label: "Facile à configurer",
    icon: Heart,
  },
  {
    id: 2,
    label: "Messagerie de groupe",
    icon: MessageCircle,
  },
  {
    id: 3,
    label: "Créer des équipes pour vos étudiants",
    icon: User2Icon,
  },
  {
    id: 4,
    label: "Hébergé des vos cours en illimité",
    icon: PaperclipIcon,
  },
  {
    id: 5,
    label: "Simplifiez vos enseignements",
    icon: Smile,
  },
];
