import { TestBed } from '@angular/core/testing';
import { ServiceState } from '../services/serviceState-service';

describe('ServiceState' , () => {
    let service: ServiceState;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServiceState);
    });

    it('should start with no services selected', () => {
        expect(service.seoSelected$()).toBe(false);
        expect(service.adsSelected$()).toBe(false);
        expect(service.webSelected$()).toBe(false);
    });

    it('should initialize totalPrice to 0', () => {
        expect(service.totalPrice()).toBe(0);
    });

    it('should update SEO service selection', () => {
        service.updateService('seo', true, { pages: 2, languages: 1 });
        
        expect(service.seoSelected$()).toBe(true);
        expect(service.seoData$().pages).toBe(2);
        expect(service.seoData$().languages).toBe(1);
    });

    it('should calculate totalPrice when one service is selected', () => {
        service.updateService('seo', true, { pages: 1, languages: 1 });
    
        expect(service.totalPrice()).toBe(300);
    });

    it('should recalculate totalPrice when service is deselected', () => {
        service.updateService('seo', true, { pages: 1, languages: 1 });
        service.updateService('ads', true, { pages: 1, languages: 1 });
    
        const totalWithBoth = service.totalPrice();
    
        service.updateService('ads', false, { pages: 1, languages: 1 });
    
        expect(service.totalPrice()).toBeLessThan(totalWithBoth);
    });
});
