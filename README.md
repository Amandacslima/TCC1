# UFPR Virtual - TCC1 (Front-End)

Protótipo de uma plataforma virtual de aprendizagem desenvolvida para o Trabalho de Conclusão de Curso.

A proposta do UFPR Virtual é ampliar a experiência acadêmica dos estudantes, conectando conteúdos das disciplinas, trilhas de exploração profissional, colaboração entre alunos, oportunidades e diferentes formas de aprendizagem.

## 🎯 Sobre o projeto

A plataforma foi pensada como uma evolução dos ambientes virtuais de aprendizagem tradicionais. Além de disponibilizar materiais e atividades, o sistema busca apoiar o estudante na construção da sua trajetória acadêmica e profissional.

## ✨ Funcionalidades planejadas

- Dashboard com disciplinas, prazos e progresso;
- Trilhas de exploração de nichos, como DevOps, Dados e Segurança da Informação;
- Módulos de aprendizagem com vídeos, textos, PDFs e playgrounds interativos;
- Fórum para troca de dúvidas e conhecimentos;
- Mentoria voluntária entre estudantes;
- Matchmaking de equipes para projetos;
- Painel de oportunidades acadêmicas e profissionais;
- Portfólio automático com projetos e atividades;
- Dashboard para professores acompanharem o desenvolvimento das turmas;
- Indicadores para apoiar o uso responsável de Inteligência Artificial.

## 💻 Tecnologias e Versões

Para que o projeto rode perfeitamente na máquina de todos os membros do grupo, é estritamente necessário utilizar as versões abaixo:

- **Node.js**: v22.18.0
- **NPM (Package Manager)**: v10.9.3
- **Angular CLI**: v20.1.5
- **Estilização**: Tailwind CSS v4 + PostCSS
- **Linguagem**: TypeScript / HTML / CSS

## 🚀 Guia de Instalação para a Equipe

Para configurar o ambiente de desenvolvimento localmente, siga os passos abaixo:

### 1. Instalação do Node.js
Verifique se você possui o Node instalado rodando `node -v` no terminal. Caso não tenha a versão `22.18.0`, faça o download no [site oficial do Node.js](https://nodejs.org/) ou utilize o NVM (Node Version Manager) para instalar a versão correta.

### 2. Instalação do Angular CLI
Com o Node instalado, abra o terminal e instale o Angular CLI globalmente na mesma versão do projeto:
```bash
npm install -g @angular/cli@20.1.5
```

### 3. Clonar e Configurar o Repositório
Navegue até a pasta onde deseja salvar o projeto e clone o repositório:
```bash
git clone https://github.com/Amandacslima/TCC1.git
cd TCC1
```

Em seguida, instale todas as dependências do projeto:
```bash
npm install
```

### 4. Rodando o Projeto
Para iniciar o servidor local de desenvolvimento, execute:
```bash
ng serve
```
Abra o navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente caso você altere qualquer arquivo fonte.

## 🛠️ Comandos Úteis do Angular

O Angular CLI possui ferramentas nativas para agilizar o desenvolvimento:

- **Criar novos componentes**: 
  ```bash
  ng generate component nome-do-componente
  ```
- **Fazer o Build do projeto (Produção)**: 
  ```bash
  ng build
  ```
  Isso irá compilar o projeto para a pasta `dist/`.

Para uma lista completa de comandos geradores (como services, directives, pipes), rode `ng generate --help` ou consulte a [Documentação Oficial do Angular CLI](https://angular.dev/tools/cli).

## 🎨 Identidade visual

A interface utiliza como cores principais:

- **Azul-marinho**: `#0B1F3A`
- **Azul de destaque**: `#1468D8`
- **Preto**: `#111827`
- **Branco**: `#FFFFFF`
- **Cinza claro**: `#F5F7FB`