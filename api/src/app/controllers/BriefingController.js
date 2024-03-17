import BriefingRepository from '../repositories/BriefingRepository.js'

class BriefingController {

    // Cadastro
    async store(req, res) {
        try {
            const briefing = req.body
            const row = await BriefingRepository.create(briefing)
            res.status(201).json(row)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    // Pesquisa todos
    async index(req, res) {
        try {
            const row = await BriefingRepository.findAll()
            res.status(200).json(row)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    // Pesquisa por id
    async show(req, res) {
        try {
            const id = req.params.id
            const row = await BriefingRepository.findById(id)
            if (row) res.status(200).json(row)
            else res.status(404).json({ error: 'Briefing não encontrado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    // Atualiza
    async update(req, res) {
        try {
            const id = req.params.id
            const briefing = req.body
            const row = await BriefingRepository.update(briefing, id)
            if (row) res.status(200).json(row)
            else res.status(404).json({ error: 'Briefing não encontrado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    // Apaga
    async delete(req, res) {
        try {
            const id = req.params.id
            const row = await BriefingRepository.delete(id)
            if (row) res.status(200).json({ message: 'Briefing deletado com sucesso' })
            else res.status(404).json({ error: 'Briefing não encontrado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }
}

export default new BriefingController()
