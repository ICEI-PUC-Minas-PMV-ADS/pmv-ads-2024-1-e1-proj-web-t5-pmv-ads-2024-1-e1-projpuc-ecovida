# Template Padrão da Aplicação

## Estrutura do Layout Padrão

O layout padrão consiste em uma estrutura comum a todas as páginas da aplicação. Ele inclui o ícone da aplicação, um título e uma descrição, seguidos por um espaço reservado para o conteúdo específico da página, como formulários ou outros elementos.


![tela-exemplo](https://media.discordapp.net/attachments/737069685333557319/1239294580998799451/Cadastro_tela_feito.png?ex=66426685&is=66411505&hm=d0516c900c0beb06a2362430372f5dea2d1d09776cf6b6b87432cd60a2e804f8&=&format=webp&quality=lossless&width=980&height=592)

### Título

Bem-Vindo ao EcoVida!

### Descrição

Crie sua conta EcoVida para ter acesso total aos recursos educacionais e ferramentas interativas para um mundo mais sustentável.

### Conteúdo

Aqui entra o conteúdo específico da página, como formulários de cadastro, login, ou qualquer outro elemento relevante para a funcionalidade da página.

Exemplo de formulário de cadastro:

```html
 <form method="post" id="form-cadastro">
      
      <input type="text" nome="nome" placeholder="Digite seu usuário" id="usuario" autofocus>
      <input type="password" nome="senha" placeholder="Digite sua senha" id="senha">
      <input type="password" nome="senha" placeholder="Repita sua senha" id="confirmeSenha">
      
      <button type="submit" id="btnCadastro">Cadastrar</button>
      
          
      </form>
