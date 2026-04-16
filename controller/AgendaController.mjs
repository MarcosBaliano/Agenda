import { AgendaService } from '../service/AgendaService.mjs';

const svc = new AgendaService();

export function renderTabela() {
    const tbody = document.getElementById('tbl-contatos');
    const lista = svc.getContatos();

    tbody.innerHTML = lista.length === 0
        ? `<tr><td colspan="4" class="text-center text-muted">Nenhum contato salvo.</td></tr>`
        : lista.map(c => `
            <tr>
                <td>${c.nome}</td>
                <td>${c.telefone}</td>
                <td>${c.email}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="removerContato('${c.id}')">Excluir</button>
                </td>
            </tr>
        `).join('');
}

export function adicionarContato(form) {
    // Captura os dados do formulário e instancia via Service
    const dados = Object.fromEntries(new FormData(form));
    try {
        svc.saveContato(dados);
        form.reset();
        renderTabela();
        mostrarAlerta('Contato adicionado com sucesso!', 'success');
    } catch (e) {
        mostrarAlerta(e.message, 'danger');
    }
}

export function removerContato(id) {
    if (!confirm('Tem certeza que deseja excluir este contato?')) return;
    svc.deleteContato(id);
    renderTabela();
}

function mostrarAlerta(msg, tipo) {
    const div = document.getElementById('alerta');
    div.className = `alert alert-${tipo}`;
    div.textContent = msg;
    div.classList.remove('d-none');
    setTimeout(() => div.classList.add('d-none'), 3000);
}