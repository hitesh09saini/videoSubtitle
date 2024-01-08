import { NextResponse } from 'next/server';
import upload from '@/middlewares/multer.middelware' // Adjust the path accordingly
import Video from '@/utils/schema';
import DBConnection from '@/utils/dbConnection';
import { cloudinaryURl } from '@/utils/cloudinary';

export const config = {
    api: {
        bodyParser: false, 
    },
};

export default async function handler(req, res) {
    try {
        await upload.single('video')(req, res); 
        await DBConnection();

        if (!req.file) {
            return NextResponse.json({
                success: false,
                error: 'Video not found',
            }, {
                status: 404,
            });
        }

        const result = await cloudinaryURl(req.file.path);

        if (!result) {
            return NextResponse.json({
                success: false,
                error: 'Video not uploaded',
            }, {
                status: 404,
            });
        }

        const link = {
            public_id: result.public_id,
            secure_url: result.secure_url,
        };

        const video = new Video({
            link
        });

        await video.save();

        return NextResponse.json({
            success: true,
            message: 'Data fetched successfully',
            video,
        }, {
            status: 200,
        });

    } catch (error) {
        console.error('POST Request Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Internal Server Error',
        }, {
            status: 500,
        });
    }
}
