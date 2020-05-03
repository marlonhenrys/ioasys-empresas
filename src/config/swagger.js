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
            description: 'Operations about user'
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
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                produces: [
                    'application/json'
                ],
                responses: {
                    201: {
                        description: 'User created',
                        schema: {
                            '$ref': '#/definitions/User'
                        }
                    },
                    422: {
                        description: 'Unprocessable Entity'
                    }
                }
            },
        }
    },
    securityDefinitions: {
        Authorization: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    },
    definitions: {
        User: {
            required: [
                'name',
                'phone',
                'password',
                'type',
                'email'
            ],
            properties: {
                id: {
                    type: 'integer',
                    uniqueItems: true
                },
                name: {
                    type: 'string'
                },
                email: {
                    type: 'string',
                    uniqueItems: true
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
                },
                createdAt: {
                    type: 'string'
                },
                updatedAt: {
                    type: 'string'
                }
            }
        },
    }
}

