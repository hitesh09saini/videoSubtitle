import { NextResponse } from "next/server";

import Video from "@/utils/schema";
import DBConnection from "@/utils/dbConnection";

export async function GET() {
    try {
        // await DBConnection();
        // const data = await Video.findById(params.videoId);

        // if (!data) {
        //     return NextResponse.json({
        //         success:false,
        //         error: "No data found",
        //     }, {
        //         status: 404,
        //     });
        // }


        return NextResponse.json({
            success: true,
            message: "data fetch successfully",
        }, {
            status: 200,
        });

    } catch (error) {
        console.error("GET Request Error:", error);
        return NextResponse.json({
            success:false,
            error: "Internal Server Error",
        }, {
            status: 500,
        });
    }
}
