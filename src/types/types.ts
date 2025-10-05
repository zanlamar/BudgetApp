export interface ContactFormData {
  userName: string;
  userEmail: string;
  userTelephone: string;
}

export interface SubmissionData {
    userName: string;
    userEmail: string;
    userPhone: string;
    totalPrice: number;
    services: {
        web?: { pages: number; languages: number };
        ads: boolean;
        seo: boolean;
    };

}

