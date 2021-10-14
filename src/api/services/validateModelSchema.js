const validateModelSchema = async (model, callback) => {
    const isValid = model.validate((err) => {
        if (err) {
            callback(false);
        }
        callback(true);
    });
    return isValid;
};

module.exports = validateModelSchema;