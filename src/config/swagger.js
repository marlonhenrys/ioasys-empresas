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
            name: 'Users',
            description: 'API for users in the system'
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
                    'Users'
                ],
                summary: 'Create new user in system',
                parameters: [
                    {
                        name: 'user',
                        in: 'body',
                        description: 'User that we want to create',
                        schema: {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                produces: [
                    'application/json'
                ],
                responses: {
                    200: {
                        description: 'New user is created',
                        schema: {
                            '$ref': '#/definitions/User'
                        }
                    }
                }
            },
            get: {
                tags: [
                    'Users'
                ],
                summary: 'Get all users in system',
                responses: {
                    200: {
                        description: 'OK',
                        schema: {
                            '$ref': '#/definitions/Users'
                        }
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
    },
    definitions: {
        User: {
            required: [
                'email',
                'name'
            ],
            properties: {
                id: {
                    type: 'string',
                    uniqueItems: true
                },
                email: {
                    type: 'string',
                    uniqueItems: true
                },
                name: {
                    type: 'string'
                },
                created_at: {
                    type: 'string',
                    format: 'date',
                    default: 'now'
                }
            }
        },
        Users: {
            type: 'array',
            $ref: '#/definitions/User'
        }
    }
}

