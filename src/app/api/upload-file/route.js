import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
});

export async function POST(request) {
	try {
		const formData = await request.formData();
		const image = formData.get('fileToUpload');
		const data = await UploadImage(image);
		return Response.json({ success: true, fileURL: data }, { status: 200 });
	} catch (error) {
		console.error(error);
		return Response.json(error, { status: 500 });
	}
}

const UploadImage = async file => {
	try {
		const buffer = await file.arrayBuffer();
		const bytes = Buffer.from(buffer);

		const result = await new Promise((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream(
				{
					resource_type: 'raw',
					format: 'pdf',
					folder: 'CVs'
				},
				(err, result) => {
					if (err) {
						return reject(err.message);
					}
					resolve(result);
				}
			);

			uploadStream.end(bytes);
		});

		return result.secure_url;
	} catch (error) {
		throw new Error(error);
	}
};
