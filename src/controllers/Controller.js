class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async pegaTodos(req, res) {
    try {
      const listaDeRegistros =
        await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      //
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
	console.log(`id no atualiza do controller: ${id}`)
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: `id não foi atualizado` });
      } else {
        return res
          .status(200)
          .json({ mensagem: `Registro atualizado com sucesso!` });
      }
    } catch (erro) {
      //
    }
  }
}

module.exports = Controller;
