const db = require("./banco")

const Agendamentos = sequelize.define("agendamentos",{
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    origem: {
        type: Sequelize.STRING
    },
    data_contato: {
        type: Sequelize.DATE
    },
    observacao: {
        type: Sequelize.STRING
    },

})

//Agendamentos.sync({force: true})

module.exports = Agendamentos