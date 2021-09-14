module.exports = (context, schema) => {

    return async (req, res, next) => {

        const result = schema.validate(req[context], { abortEarly: false })

        if (result.error) {

            const error = result.error.details

            return res.status(400).send(error)
        }

        return next()
    }
}