module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
      'Usuario',
      {
        cpf: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
          allowNull: false
        },
        nome: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        login: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        senha: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        datNasc: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'Usuario',
      }
    );
  
    return Usuario;
  };
  