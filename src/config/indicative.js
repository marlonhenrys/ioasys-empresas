const validator = require('indicative/validator')
const ApplicationError = require('../app/utils/errorHandler')

class MyCustomFormatter {
    addError(error, field, rule, args) {
        throw new ApplicationError(error, rule == 'required' ? 400 : 422)
    }

    toJSON() {

    }
}

validator.configure({
    formatter: MyCustomFormatter
})

validator.extend('unique', {
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
})

validator.extend('numeric', {
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
