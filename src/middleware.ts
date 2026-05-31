import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Redireciona domínio antigo da Vercel para o domínio customizado (301 permanente)
  if (url.hostname === 'aluguel-de-brinquedos-six.vercel.app') {
    const redirectUrl = new URL(url.pathname + url.search, 'https://www.alugueldebrinquedorj.com.br');
    return new Response(null, {
      status: 301,
      headers: {
        Location: redirectUrl.toString(),
      },
    });
  }

  return next();
});
