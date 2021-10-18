const multer = require('multer');
const path = require('path');

const saveImage = () => {
    const photoFile = path.resolve(__dirname, '../../uploads/');
    // console.log(photoFile);

    const storage = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, photoFile);
        },

        filename(req, file, cb) {
            cb(null, `${req.params.id}.jpeg`);
        },
    });

    return multer({ storage });
};

module.exports = saveImage();