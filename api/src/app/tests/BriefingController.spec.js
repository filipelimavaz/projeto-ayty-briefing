import BriefingController from '../controllers/BriefingController.js'
import BriefingRepository from '../repositories/BriefingRepository.js'

jest.mock('../repositories/BriefingRepository.js')

describe("Briefing Controller", () => {
    const briefingInfo = [
        {
            nome_do_cliente: "George",
            descricao_da_necessidade_do_cliente: "Desejo uma API REST",
            estado_do_briefing: "Aprovado"
        },
        {
            nome_do_cliente: "Maria",
            descricao_da_necessidade_do_cliente: "Desejo um aplicativo móvel",
            estado_do_briefing: "Negociação"
        },
        {
            nome_do_cliente: "João",
            descricao_da_necessidade_do_cliente: "Preciso de um website",
            estado_do_briefing: "Finalizado"
        }
    ]

    let createdBriefingIds = []

    const mockStore = async (briefing) => {
        const request = { body: briefing }
        const reply = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        const response = await BriefingController.store(request, reply)
        if (response && response.id) {
            createdBriefingIds.push(response.id)
        }
        return { request, reply }
    }

    test("Deve criar todos os briefings", async () => {
        expect(BriefingRepository.create).toHaveBeenCalledTimes(briefingInfo.length)
        await Promise.all(briefingInfo.map(async briefing => {
            const { reply } = await mockStore(briefing)
            expect(reply.status).toHaveBeenCalledWith(201)
        }))
    })

    test("Deve alterar o nome do briefing", async () => {
        const newName = "Novo Nome"
        await Promise.all(createdBriefingIds.map(async id => {
            const request = { params: { id }, body: { nome_do_cliente: newName } }
            const reply = { status: jest.fn().mockReturnThis(), json: jest.fn() }
            await BriefingController.update(request, reply)
            expect(BriefingRepository.update).toHaveBeenCalledWith(id, { nome_do_cliente: newName })
        }))
    })

    test("Deve deletar todos os briefings criados", async () => {
        await Promise.all(createdBriefingIds.map(async id => {
            await BriefingController.delete({ params: { id } }, { status: jest.fn(), json: jest.fn() })
            expect(BriefingRepository.delete).toHaveBeenCalledWith(id)
        }))
    })

    beforeEach(async () => {
        createdBriefingIds = []
        await Promise.all(briefingInfo.map(briefing => mockStore(briefing)))
    })

    afterEach(async () => {
        await Promise.all(createdBriefingIds.map(async id => {
            await BriefingRepository.delete(id)
        }))
    })
})
