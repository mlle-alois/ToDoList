import {EmailSenderServiceImpl} from "../email-sender-service-impl";

describe('Email Sender Test', () => {
    const emailSenderService = new EmailSenderServiceImpl();
    describe('Test mail for 2 remaining items function', () => {
        it('Should return true when calling', () => {
            expect(emailSenderService.sendMailFor2RemainingItems()).toEqual(true);
        })
    })
})
