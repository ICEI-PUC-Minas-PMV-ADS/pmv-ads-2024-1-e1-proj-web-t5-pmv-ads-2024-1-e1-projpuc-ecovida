# Template Padrão da Aplicação

## Estrutura do Layout Padrão

O layout padrão consiste em uma estrutura comum a todas as páginas da aplicação. Ele inclui o ícone da aplicação, um título e uma descrição, seguidos por um espaço reservado para o conteúdo específico da página, como formulários ou outros elementos.


![tela-exemplo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projpuc-ecovida/blob/main/documentos/img/Cadastro_tela_feito.png)

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
