import api from '../../../../config/api';
import email from '../../../../config/email';

const apiConfig = api();
const emailConfig = email();

export const supportEmail = `${emailConfig.SUPPORT_NAME} <${emailConfig.SUPPORT_EMAIL}>`;

export const recoverPasswordSubject = 'Recover your password';

export function recoverPasswordTextForEmail(
  userId: string,
  token: string
): string {
  return `O link para recuperar a sua senha é o seguinte: ${apiConfig.API_URL}/auth/change-forgotten-password/${userId}/${token}`;
}

export function recoverPasswordHtmlForEmail(
  userId: string,
  token: string
): string {
  return `
                <body>
                    <main style="margin: 1rem; border-color: black; padding: 1rem">
                        <h3>
                            <a href="${apiConfig.API_URL}/auth/change-forgotten-password/${userId}/${token}" style="color: green; text-decoration: none; font-size: 1.7rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Clique aqui para redefinir sua senha</a>
                        </h3>
                    </main>
                </body>
            `;
}
