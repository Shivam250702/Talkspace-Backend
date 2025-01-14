const crypto = require('crypto');
const hashService = require('./hash-service');
const twilio = require('twilio');

const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;

if (!smsSid || !smsAuthToken) {
    throw new Error('Twilio credentials are missing. Please set SMS_SID and SMS_AUTH_TOKEN.');
}

const twilioClient = twilio(smsSid, smsAuthToken, {
    lazyLoading: true,
});

class OtpService {
    generateOtp() {
        const otp = crypto.randomInt(1000, 9999); // Generates a 4-digit OTP
        return otp;
    }

    async sendBySms(phone, otp) {
        try {
            const message = await twilioClient.messages.create({
                to: phone,
                from: process.env.SMS_FROM_NUMBER,
                body: `Your codershouse OTP is ${otp}`,
            });
            console.log('SMS sent successfully:', message.sid);
            return message;
        } catch (error) {
            console.error('Error sending SMS:', error);
            throw new Error('Failed to send OTP via SMS');
        }
    }

    verifyOtp(hashedOtp, data) {
        const computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
