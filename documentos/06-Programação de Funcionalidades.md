# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

## Tela de Cadastro

![Tela de Cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projpuc-ecovida/blob/main/documentos/img/Cadastro_tela_feito.png)

#### Requisito atendido

[RNF-03]: A aplicação deve ser responsiva, funcionando de forma eficaz em dispositivos móveis e desktops.

[RNF-04]: A aplicação deve ter tempos de resposta rápidos para manter uma experiência fluida.

[RNF-05]: A solução deve ser desenvolvida utilizando tecnologias atuais e de fácil manutenção.

#### Artefatos da funcionalidade

- HTML: `index.html`
- CSS: `index.css`
- JS: `script.js`

#### Estrutura de Dados

A lista de usuários é armazenada no Local Storage como um array de objetos, onde cada objeto representa um usuário e contém os seguintes campos:

```json
[
  {
    "NM_User": "string",
    "TX_Password": "string"
  },
  {
    "NM_User": "string",
    "TX_Password": "string"
  },
  ...
]
```

#### Instruções de acesso

Para acessar a tela de cadastro, abra o arquivo `index.html` dentro de codigo-fonte/cadastro em um navegador web.

#### Responsável

Desenvolvimento da estrutura HTML e estilos CSS:
- Ryan Aragão

Implementação do formulário de cadastro:
- Claudius Suetonio de Abreu Domingues Junior

Validação e cadastro do usuário:
- Carine Nascimento Marques
