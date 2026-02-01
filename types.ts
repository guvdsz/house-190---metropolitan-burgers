import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  tags: string[];
}

export interface LocationInfo {
  city: string;
  phone: string;
  whatsappLink: string;
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}