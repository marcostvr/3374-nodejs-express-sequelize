const dataSource = require("../models")

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll()
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistroAtualizado = await dataSource[this.model].update(
            dadosAtualizados,
            {
                where: {
                    id: id, // id: id ou somente id por que quando o nome é o mesmo não precisa repetir
                },
            }
        )

        if (listaDeRegistroAtualizado[0] === 0) {
            return false
        }
        return true
    }

    async pegaUmRegistroPorId(id) {
        try {
            const estudante = await dataSource[this.model].findOne({
                where: {
                    id: id,
                },
            })
            console.log(`estudante: ${estudante.nome}`)
            return estudante
        } catch (erro) {
            console.log(`Erro ao buscar estudante: ${erro}`)
        }
    }
}

module.exports = Services
