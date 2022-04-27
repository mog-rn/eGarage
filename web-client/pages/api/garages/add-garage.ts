import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async(req, res) => { 
    if (req.method === "POST") {
        const { garage_name, services_offered, location, phone, time_open, time_close, garage_image } = req.body;

        try {
            await prisma.garages.create({
                data: {
                    garage_name: garage_name,
                    
                }
            })
            }catch(err) {

            }
    }
}