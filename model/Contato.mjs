export class Contato {
    constructor({ id = null, nome, telefone, email }) {
        this.id = id ?? Date.now().toString();
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

   // model/Contato.mjs
static validar(dados) {
    const erros = [];
    if (!dados.nome?.trim()) erros.push('Nome é obrigatório');
    
    // Validação de apenas números para o telefone
    const apenasNumeros = /^[0-9]+$/;
    if (!dados.telefone?.trim()) {
        erros.push('Telefone é obrigatório');
    } else if (!apenasNumeros.test(dados.telefone)) {
        erros.push('O telefone deve conter apenas números');
    }

    if (!dados.email?.trim()) erros.push('E-mail é obrigatório');
    return erros;
}
}