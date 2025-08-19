import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/database.js';

const AgendaModel = sequelize.define(
    "Agenda",
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        data:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate:{
                isDate: true,
                isAfter: new Date().toISOString()
            }
        },
        hora:{
            type: DataTypes.TIME,
            allowNull: false,
            validate:{
                isBetween: {
                    args: ['17:30', '03:00'],
                    msg: "A hora agendada deve ser no período de funcionamento, entre 17:30 e 03:00."
                }
            }
        },
        cliente_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Clientes',
                key: 'id'
            }
        },
        colaborador_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Colaboradores',
                key: 'id'
            }
        },
        servico_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Servicos',
                key: 'id'
            }
        },
        status:{
            type: DataTypes.ENUM('marcado', 'confirmado', 'cancelado', 'concluido'),
            allowNull: false,
            validate:{
                isIn: {
                    args: [['marcado', 'confirmado', 'cancelado', 'concluido']],
                    msg: "O status deve ser 'marcado', 'confirmado', 'cancelado' ou 'concluido'."
                }
            }
        }
    },
    {
        tableName: 'Agenda',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
)

export default AgendaModel;