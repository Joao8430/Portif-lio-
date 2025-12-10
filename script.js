function enviarWhats(event) {
    // Previne o envio padrão do formulário para evitar recarregamento da página
    event.preventDefault();
    
    // Obtém os valores dos campos e remove espaços extras
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validação básica: verifica se os campos estão preenchidos
    if (!nome || !mensagem) {
        alert('Por favor, preencha os campos de nome e mensagem antes de enviar.');
        return;  // Sai da função se não estiver preenchido
    }
    
    const telefone = '5561984306624';  // Número de telefone (considere usar uma variável de ambiente para maior segurança)
    
    // Cria a mensagem formatada de forma mais clara
    const texto = `Olá! Meu nome é ${nome} e minha mensagem é: ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);  // Codifica a mensagem para URLs
    
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;  // Constrói a URL
    
    console.log('URL gerada para WhatsApp:', url);  // Log para depuração
    
    // Abre a URL em uma nova aba
    window.open(url, '_blank');
}
