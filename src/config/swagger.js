module.exports = {

  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API Empresas',
    description: 'Trilha de aprendizagem - ioasys'
  },
  host: 'localhost:3333',
  basePath: '/',
  tags: [
    {
      name: 'Autenticação',
      description: 'Login'
    },
    {
      name: 'Usuário',
      description: 'CRUD'
    },
    {
      name: 'Empresa',
      description: 'CRUD'
    }
  ],
  schemes: [
    'http',
    'https'
  ],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  paths: {
    '/login': {
      post: {
        tags: [
          'Autenticação'
        ],
        summary: 'Autenticar um usuário',
        parameters: [
          {
            name: 'credentials',
            in: 'body',
            description: 'Credenciais de acesso',
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string'
                },
                password: {
                  type: 'string'
                }
              },
              required: [
                'email',
                'password'
              ]
            }
          }
        ],
        responses: {
          200: {
            description: 'Usuário autenticado',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer'
                },
                name: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                },
                type: {
                  type: 'string'
                },
                enterprise_id: {
                  type: 'integer'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                token: {
                  type: 'string'
                }
              }
            }
          },
          401: {
            description: 'Não autorizado'
          }
        }
      }
    },
    '/users': {
      post: {
        tags: [
          'Usuário'
        ],
        summary: 'Criar um novo usuário',
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'Dados do usuário que será criado',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                },
                password: {
                  type: 'string'
                },
                type: {
                  type: 'string'
                },
                enterprise_id: {
                  type: 'integer'
                }
              },
              required: [
                'name',
                'phone',
                'email',
                'password',
                'type'
              ]
            }
          }
        ],
        responses: {
          204: {
            description: 'Usuário criado'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      },
      get: {
        tags: [
          'Usuário'
        ],
        summary: 'Listar usuários existentes',
        responses: {
          200: {
            description: 'Lista de usuários',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer'
                  },
                  name: {
                    type: 'string'
                  },
                  email: {
                    type: 'string'
                  },
                  phone: {
                    type: 'string'
                  },
                  type: {
                    type: 'string'
                  },
                  enterprise_id: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          400: {
            description: 'Erro na requisição'
          }
        }
      },
      patch: {
        tags: [
          'Usuário'
        ],
        summary: 'Atualizar status de usuários existentes',
        parameters: [
          {
            name: 'users, status',
            in: 'body',
            description: 'Lista de usuários que terão o status atualizado',
            schema: {
              type: 'object',
              properties: {
                users: {
                  type: 'array',
                  items: {
                    type: 'integer'
                  }
                },
                status: {
                  type: 'string'
                }
              },
              required: [
                'users',
                'status'
              ]
            }
          }
        ],
        responses: {
          204: {
            description: 'Status atualizados com sucesso'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      }
    },
    '/users/{id}': {
      get: {
        tags: [
          'Usuário'
        ],
        summary: 'Buscar um usuário existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID do usuário a ser pesquisado',
            required: true,
            type: 'integer'
          }
        ],
        responses: {
          200: {
            description: 'Usuário encontrado',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer'
                },
                name: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                },
                type: {
                  type: 'string'
                },
                enterprise_id: {
                  type: 'integer'
                }
              }
            }
          },
          400: {
            description: 'Erro na requisição'
          }
        }
      },
      put: {
        tags: [
          'Usuário'
        ],
        summary: 'Atualizar um usuário existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID do usuário a ser atualizado',
            required: true,
            type: 'integer'
          },
          {
            name: 'user',
            in: 'body',
            description: 'Dados do usuário que serão atualizados',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                }
              }
            }
          }
        ],
        responses: {
          204: {
            description: 'Usuário atualizado com sucesso'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      },
      delete: {
        tags: [
          'Usuário'
        ],
        summary: 'Excluir um usuário existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID do usuário a ser excluído',
            required: true,
            type: 'integer'
          }
        ],
        responses: {
          204: {
            description: 'Usuário excluído com sucesso'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      }
    },
    '/enterprises': {
      post: {
        tags: [
          'Empresa'
        ],
        summary: 'Criar uma nova empresa',
        parameters: [
          {
            name: 'enterprise',
            in: 'body',
            description: 'Dados da empresa que será criada',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                cnpj: {
                  type: 'string'
                },
                description: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                },
                manager_id: {
                  type: 'integer'
                }
              },
              required: [
                'name',
                'phone',
                'cnpj',
                'description',
                'manager_id'
              ]
            }
          }
        ],
        responses: {
          204: {
            description: 'Empresa criada'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      },
      get: {
        tags: [
          'Empresa'
        ],
        summary: 'Listar empresas existentes',
        responses: {
          200: {
            description: 'Lista de empresas',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string'
                  },
                  name: {
                    type: 'string'
                  },
                  cnpj: {
                    type: 'string'
                  },
                  description: {
                    type: 'string'
                  },
                  phone: {
                    type: 'string'
                  },
                  manager_id: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          400: {
            description: 'Erro na requisição'
          }
        }
      }
    },
    '/enterprises/{id}': {
      get: {
        tags: [
          'Empresa'
        ],
        summary: 'Buscar uma empresa existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID da empresa a ser pesquisada',
            required: true,
            type: 'integer'
          }
        ],
        responses: {
          200: {
            description: 'Empresa encontrada',
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer'
                },
                name: {
                  type: 'string'
                },
                cnpj: {
                  type: 'string'
                },
                description: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                },
                manager_id: {
                  type: 'integer'
                }
              }
            }
          },
          400: {
            description: 'Erro na requisição'
          }
        }
      },
      put: {
        tags: [
          'Empresa'
        ],
        summary: 'Atualizar uma empresa existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID da empresa a ser atualizada',
            required: true,
            type: 'integer'
          },
          {
            name: 'enterprise',
            in: 'body',
            description: 'Dados da empresa que serão atualizados',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                description: {
                  type: 'string'
                },
                phone: {
                  type: 'string'
                }
              }
            }
          }
        ],
        responses: {
          204: {
            description: 'Empresa atualizada com sucesso'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      },
      delete: {
        tags: [
          'Empresa'
        ],
        summary: 'Excluir uma empresa existente',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID da empresa a ser excluída',
            required: true,
            type: 'integer'
          }
        ],
        responses: {
          204: {
            description: 'Empresa excluída com sucesso'
          },
          400: {
            description: 'Erro na requisição'
          },
          422: {
            description: 'Erro de validação dos dados'
          }
        }
      }
    }
  },
  securityDefinitions: {
    Authorization: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  }
}
