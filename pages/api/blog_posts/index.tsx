import type { NextApiRequest, NextApiResponse } from 'next'
 
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient()
export   default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
 let users=  await prisma.user.findMany();
  res.status(200).json(users)
}