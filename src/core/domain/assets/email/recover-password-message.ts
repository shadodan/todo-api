export function recoverPasswordMessage(recoverPasswordLink: string): string {
  return `
                <body>
                    <main style="margin: 1rem; border-color: black; padding: 1rem">
                        <h3>
                            <a href="${recoverPasswordLink}" style="color: green; text-decoration: none; font-size: 1.7rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Clique aqui para redefinir sua senha</a>
                        </h3>
                    </main>
                </body>
            `;
}
