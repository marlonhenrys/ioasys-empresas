module.exports = {

    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'API Empresas',
        description: 'Trilha de aprendizagem - ioasys',
    },
    host: 'localhost:3333',
    basePath: '/',
    tags: [
        {
            name: 'User',
            description: 'CRUD'
        },
        {
            name: 'Authentication',
            description: 'Login'
        }
    ],
    schemes: [
        'http'
    ],
    consumes: [
        'application/json'
    ],
    produces: [
        'application/json'
    ],
    paths: {
        '/users': {
            post: {
                tags: [
                    'User'
                ],
                summary: 'Create a new user',
                parameters: [
                    {
                        name: 'user',
                        in: 'body',
                        description: 'User object that needs to create',
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
                        description: 'User created',
                    },
                    400: {
                        description: 'Bad Request'
                    },
                    422: {
                        description: 'Unprocessable Entity'
                    }
                }
            }
        },
        '/auth/login': {
            post: {
                tags: [
                    'Authentication'
                ],
                summary: 'Authenticate a user',
                parameters: [
                    {
                        name: 'credentials',
                        in: 'body',
                        description: 'Access credentials',
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
                        description: 'Authenticated user',
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
                        description: 'Unauthorized'
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

