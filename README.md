# TREINE JÁ Quiz

Um site de quiz interativo para o TREINE JÁ, desenvolvido para ser hospedado no GitHub Pages.

## Sobre o Projeto

Este projeto é um site de quiz interativo baseado no arquivo JSON "XQUIZ-NatáliaFit Site.json". O site consiste em 3 telas principais:

1. **Tela de Boas-vindas**: Apresenta o desafio TREINE JÁ e seus benefícios
2. **Tela de Perguntas**: Permite que o usuário selecione opções sobre suas inseguranças corporais
3. **Tela de Resultados**: Mostra uma análise das respostas e oferece uma solução

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador para testar localmente

## Implantação no GitHub Pages

Para implantar este site no GitHub Pages:

1. Certifique-se de que este repositório está no GitHub (ProjetoWindsurf)
2. Acesse as configurações do repositório no GitHub
3. Na seção "GitHub Pages", selecione a branch "main" como fonte
4. Clique em "Save" e aguarde alguns minutos para que o site seja publicado
5. O site estará disponível em `https://[seu-usuario].github.io/ProjetoWindsurf/`

## Personalização

Para personalizar o quiz:

1. Edite o arquivo `quiz-data.json` para alterar as perguntas e respostas
2. Adicione suas próprias imagens na pasta `images/`
3. Ajuste os estilos em `css/styles.css` conforme necessário

## Estrutura de Arquivos

```
ProjetoWindsurf/
│
├── index.html           # Página principal do site
├── css/
│   └── styles.css       # Estilos do site
├── js/
│   └── quiz.js          # Funcionalidades do quiz
├── images/              # Pasta para imagens
│   └── ...              # Suas imagens aqui
├── quiz-data.json       # Dados do quiz em formato simplificado
└── README.md            # Este arquivo
```

## Próximos Passos

- Adicionar mais perguntas ao quiz
- Implementar sistema de pontuação
- Adicionar animações mais elaboradas
- Integrar com sistemas de análise (Google Analytics, etc.)
