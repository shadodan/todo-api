import twilio from '../../../../config/twilio';
import api from '../../../../config/api';

const apiConfig = api();
const twilioConfig = twilio();

export const recoverPasswordContact = twilioConfig.TWILIO_PHONE_NUMBER;

export function recoverPasswordTextForSms(
  userId: string,
  token: string
): string {
  return `O link para recuperar a sua senha é o seguinte: ${apiConfig.API_URL}/auth/change-forgotten-password/${userId}/${token}`;
}
