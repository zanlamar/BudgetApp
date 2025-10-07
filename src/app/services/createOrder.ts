import { Injectable } from '@angular/core';
import { SubmissionData, ContactFormData } from '../../types/types';

@Injectable({
  providedIn: 'root'
})

export class ConfirmedSubmission {
    createSubmission(
        formData: ContactFormData,
        services: 
            { web?: { pages: number; languages: number }; ads: boolean; seo: boolean }, 
            totalPrice: number 
        ): SubmissionData {
        return {
            id: 0,
            userName: formData.userName,
            userEmail: formData.userEmail,
            userPhone: formData.userTelephone,
            totalPrice: totalPrice,
            services: services,
            createdAt: new Date()
        };
    }
}