import AgendaModel from "../modules/agenda/models/agenda.model.js";
import ClienteModel from "../modules/clientes/models/cliente.model.js";
import ColaboradorModel from "../../src/modules/colaboradores/models/colaborador.models.js";
import EstoqueModel from "../modules/estoque/models/estoque.model.js";
import Pagamento from "../modules/pagamentos/models/pagamento.model.js";
import ProdutosModel from "../modules/produto/models/model.js";
import RelatorioModel from "../modules/relatorios/models/relatorio.model.js";
import ServicoModel from "../modules/servicos/models/servico.model.js";
import UsuarioModel from "../modules/usuarios/models/usuario.model.js";
import VendaModel from "../modules/vendas/models/venda.model.js";

ClienteModel.hasMany(AgendaModel);
AgendaModel.belongsTo(ClienteModel)

ColaboradorModel.hasMany(AgendaModel);
AgendaModel.hasMany(ServicoModel);
AgendaModel.hasOne(ClienteModel)
AgendaModel.hasOne(ColaboradorModel)
AgendaModel.hasMany(ServicoModel)