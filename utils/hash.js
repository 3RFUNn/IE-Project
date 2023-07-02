import bcrypt from "bcryptjs";

export const generatePasswordHash = async (password) => {
    return await bcrypt.hash(password, Number(process.env.HASHSALT) || 10);
};

export const comparePasswordHash = async (hash, password) => {
    return await bcrypt.compare(password, hash);
};
