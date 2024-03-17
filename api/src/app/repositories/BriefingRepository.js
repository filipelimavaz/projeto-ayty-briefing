import { consulta } from '../database/conexao.js'

class BriefingRepository {

    create(briefing) {
        const sql = "INSERT INTO briefings SET ?";
        return consulta(sql, briefing, 'Não foi possível cadastrar')
    }

    findAll() {
        const sql = "SELECT * FROM briefings;"
        return consulta(sql, 'Não foi possível localizar')
    }

    findById(id) {
        const sql = "SELECT * FROM briefings WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar')
    }

    delete(id) {
        const sql = "DELETE FROM briefings WHERE id=?";
        return consulta(sql, id, 'Não foi possível deletar')
    }

    update(briefing, id) {
        const sql = "UPDATE briefings SET ? WHERE id=?";
        return consulta(sql, [briefing, id], 'Não foi possível atualizar')
    }
}

export default new BriefingRepository()
