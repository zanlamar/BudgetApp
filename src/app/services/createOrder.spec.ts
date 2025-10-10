import { ConfirmedSubmission } from './createOrder';
import { ContactFormData } from '../../types/types';

describe('ConfirmedSubmission', () => {
    let service: ConfirmedSubmission;

    const validFormData: ContactFormData = {
        userName: "Juanita Banana",
        userEmail: "juana@banana.com",
        userTelephone: "941244818"
    };

    const validServices = {
        web: { pages: 2, languages: 1 },
        ads: false,
        seo: false
    };

    beforeEach(() => {
        service = new ConfirmedSubmission();
    });

    describe('Happy Path', () => {
    it('should create submission with correct data', () => {
        const result = service.createSubmission(validFormData, validServices, 1000);

        expect(result.userName).toBe("Juanita Banana");
        expect(result.userEmail).toBe("juana@banana.com");
        expect(result.userPhone).toBe("941244818");
        expect(result.totalPrice).toBe(1000);
        expect(result.services).toEqual(validServices);
    });
});
});