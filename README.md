# back-crud-proj

second project to the 3rd blue's module

segundo projeto do terçeiro modulo com algumas atualizações em relação ao C.R.U.D anterior

features:

# permanençia de dados

utilizando o banco de dados mongoDb é possivel a permanencia dos dados cadastrados no formulário,
com a possibilidade de adicionar, excluir, editar, visualizar e buscar por indece (id)

# correção de falhas do sistema\*

foram corrigidos os seguintes bugs:

# getById\*

# id invalido\*

com essa correção nao será posivel buscar um Id inexistente,
ocasionando assim no retorno de uma mensagem referente ao erro

# id não existente\*

logo após a exclusão de um id quando era feita a busca a rota retornava um objeto vazio
com a a atulização a rota retorna uma mensagem referente ao id exlcuido

# add\*

# dados faltando no formulário\*

na versão anterior era possivel enviar os dados faltando imformação, agora com a atualização, todos os dados são tratados de forma individual para que possa ser corrigido o erro

# delete\*

# id inexistente\*

com a atualização foram corrigidos os bugs dos ids inexistentes
agora caso o Id não exista a rota retornará um erro para que o usuario possa verificar ee corrigir

# nota\*

atualização v0.0.1

# create\*

corrigido: dados incompletos

# getById\*

corrigido:id invalido, id inexistente

# delete\*

corrrigido:Id inexistente
