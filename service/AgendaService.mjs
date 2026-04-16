import { Contato } from '../model/Contato.mjs';

const KEY = 'agenda_contatos';

export class AgendaService {
    getContatos() {
        const dados = localStorage.getItem(KEY);
        return dados ? JSON.parse(dados) : [];
    }

    saveContato(dados) {
        const erros = Contato.validar(dados);
        if (erros.length) throw new Error(erros.join(' | '));

        const lista = this.getContatos();
        const contato = new Contato(dados);
        lista.push(contato);
        
        localStorage.setItem(KEY, JSON.stringify(lista));
        return contato;
    }

    deleteContato(id) {
        const lista = this.getContatos().filter(c => c.id !== id);
        localStorage.setItem(KEY, JSON.stringify(lista));
    }
}