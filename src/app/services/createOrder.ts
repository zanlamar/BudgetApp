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

        if (totalPrice <= 0) {
            throw new Error('Total price must be greater than 0');
        }
            
        if (!formData.userName || formData.userName.trim() === '') {
            throw new Error('Name is required');
        }
            
        if (!formData.userEmail || formData.userEmail.trim() === '') {
            throw new Error('Valid email is required');
        }
            
        if (!formData.userTelephone || formData.userTelephone.trim() === '') {
            throw new Error('Phone number is required');
        }
            
        const hasServices = services.web || services.ads || services.seo;
        if (!hasServices) {
            throw new Error('At least one service must be selected');
        }
            
        if (services.web) {
            if (services.web.pages < 1) {
                throw new Error('Pages must be at least 1');
            }
            if (services.web.languages < 1) {
                throw new Error('Languages must be at least 1');
            }
        } return {
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