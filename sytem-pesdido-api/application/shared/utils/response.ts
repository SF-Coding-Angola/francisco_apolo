
export function errorMessage(message: string) {
    return {message: message, error: true}
}

export function notFound() {
    return {name: 'Not Found', message: 'registo não encontrado!'}
}

export function notSave() {
    return {name: 'Not Save', message: 'Erro ao salvar!'}
}

export function sucesso(data: any, message?: string) {
    return {data: data, message: message || 'Sucesso'}
}