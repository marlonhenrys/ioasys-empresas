const { extend } = require('indicative/validator')

module.exports = [

    extend('unique', {
        async: true,

        compile(args) {
            if (args.length !== 1)
                throw new Error('Unique rule needs the model name')

            return args
        },

        async validate(data, field, args) {
            const fieldValue = data.original[field]
            const [modelName] = args

            if (modelName) {
                const Model = require(`../app/models/${modelName}`)
                const row = await Model.findOne({
                    where: {
                        [field]: fieldValue
                    }
                })
                if (!row) return true
            }

            return false
        }
    }),

    extend('numeric', {
        async: true,

        compile(args) {
            return args
        },

        async validate(data, field) {
            const fieldValue = data.original[field]
            const reg = new RegExp('^\\d+$');

            return reg.test(fieldValue)
        }
    })
]