
export interface ServiceData {
  pages: number;
  languages: number;
}

export interface ServiceChangeEvent {
  isSelected: boolean;
  pages: number;
  languages: number;
}

export interface ContactFormData {
  userName: string;
  userEmail: string;
  userTelephone: string;
}

export interface SubmissionData {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  totalPrice: number;
  services: {
    web?: { pages: number; languages: number };
    ads: boolean;
    seo: boolean;
  };
  createdAt?: Date;
}

