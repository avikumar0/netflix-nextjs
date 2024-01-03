import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db"; 

const CustomAdapter = PrismaAdapter(prisma);

export default CustomAdapter;
