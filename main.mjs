import { renderTabela, adicionarContato, removerContato } from './controller/AgendaController.mjs';

// Expõe funções globalmente para serem acessadas pelo HTML
Object.assign(window, {
    adicionarContato,
    removerContato
});

// Inicializa a tabela de contatos ao carregar a página
document.addEventListener('DOMContentLoaded', renderTabela);