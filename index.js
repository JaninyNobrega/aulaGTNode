const fs = require('fs');
const os = require('os');
const chalk = require('chalk');

console.log('Sistema Operacional:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Usuário', os.userInfo());

console.log(chalk.blue('Olá, Mundo!'));
console.log(chalk.green.bold('Olá, Mundo em negrito!'));
console.log(chalk.red.underline.bgWhite('Olá, Mundo sublinhado!'));

fs.writeFileSync('mensagem.txt', 'Olá, Mundo!');

const conteudo = fs.readFileSync('mensagem.txt', 'utf-8');

console.log(chalk.yellow(conteudo));

fs.writeFileSync('boasvindas.txt', 'Bem-vindo ao Node.js!');
console.log(chalk.green('Arquivo criado com sucesso!'));

const boasVindas = fs.readFileSync('boasvindas.txt', 'utf-8');
console.log(chalk.blue(boasVindas));

// // 3. Crie uma função chamada `logMensagem(mensagem, tipo)` que imprima mensagens com as seguintes cores:
// - tipo `'info'` → azul
// - tipo `'sucesso'` → verde
// - tipo `'erro'` → vermelho
// - tipo `'alerta'` → amarelo

function logMensagem(mensagem, tipo) {
    switch (tipo) {
        case 'info':
            console.log(chalk.blue('[INFO]'),mensagem);
            break;
        case 'sucesso':
            console.log(chalk.green('[SUCESSO]'),mensagem);
            break;
        case 'erro':
            console.log(chalk.red('[ERRO]'),mensagem);
            break;
        case 'alerta':
            console.log(chalk.yellow('[ALERTA]'),mensagem);
            break;
        default:
            log.console(mensagem);
    }
}

logMensagem('Conexão reestabelecida', 'alerta');

// Crie um programa que tente apagar o arquivo criado. Use `fs.existsSync()` antes de `fs.unlinkSync()` para verificar. Use a função `logMensagem()`
//     - Se conseguir, mostre:  Arquivo apagado com sucesso! (sucesso)
//     - Se não existir, mostre:  Arquivo não encontrado. (erro)

if (fs.existsSync('boasvindas.txt')){
    fs.unlinkSync('boasvindas.txt')
    logMensagem('Arquivo apagado com sucesso!', 'sucesso')
}else{
    logMensagem('Arquivo não encontrado', 'erro')
}