# 📞 Agenda de Contatos - MVC Javascript

Este projeto é uma aplicação de Agenda Telefónica desenvolvida como parte de uma atividade de laboratório. O objetivo principal foi aplicar o padrão de arquitetura **MVC (Model-View-Controller)** utilizando JavaScript moderno (ES6+) e persistência de dados local.

## 🚀 Tecnologias Utilizadas

- **JavaScript (ES6+):** Uso de módulos (`import`/`export`), classes e arrow functions.
- **MVC Architecture:** Separação de responsabilidades em camadas.
- **LocalStorage:** Persistência de dados diretamente no navegador.
- **Bootstrap 5:** Framework CSS para um design responsivo e moderno.
- **CSS3:** Estilizações personalizadas para melhorar a experiência do utilizador.

## 🏗️ Estrutura do Projeto

A organização das pastas segue rigorosamente o padrão MVC:

```text
/project-root
│   index.html          # Estrutura da interface (View)
│   main.mjs            # Ponto de entrada (Entry Point)
│   style.css           # Estilizações personalizadas
│   package.json        # Configuração do tipo de módulo
│
├── /model
│       Contato.mjs     # Definição da entidade e validação
│
├── /controller
│       AgendaController.mjs # Orquestração entre View e Service
│
└── /service
        AgendaService.mjs    # Lógica de dados e LocalStorage
