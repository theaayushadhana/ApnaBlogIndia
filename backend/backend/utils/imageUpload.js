import cloudinary from 'cloudinary';


cloudinary.config({
    cloud_name: 'dqjuudks6',
    api_key: '747171876497445',
    api_secret: 'kAQedxtPBjW3wjQ138Pc8MCq6jI',
});

export const uploadImage = async(file) => {
    const result = await cloudinary.v2.uploader.upload(file.path);
    return result.secure_url;
}
