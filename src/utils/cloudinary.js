import cloudinary from 'cloudinary'
import fs from 'fs';

const cloudinaryURl = async (localFilePath) => {

    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: 'lms',
            gravity: 'face',
            crop: 'fill'
        })
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

const deleteCloudinaryUrl = async (publicId) => {
    await cloudinary.v2.uploader.destroy(publicId)
}

export {
    cloudinaryURl,
    deleteCloudinaryUrl,
}