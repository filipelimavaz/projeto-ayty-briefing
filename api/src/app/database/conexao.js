import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bd_briefing'
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [briefing, id]} valores valores a serem passados para o sql
 * @param {string} mensagem mensagem de erro a ser exibida
 * @returns objeto da promisse
 */

export const consulta = (sql, valores='', mensagem) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) {
                return reject(mensagem)
            } else {
                const row = JSON.parse(JSON.stringify(resultado))

                for (let i = 0; i < row.length; i++) {
                    if (typeof row[i].data === 'string') {
                        row[i].data = new Date(row[i].data)
                    }
                    // Formatar a data para remover as informações de hora
                    row[i].data = row[i].data.toISOString().split('T')[0]
                }
                return resolve(row)
            }
        })
    })
}

export default conexao