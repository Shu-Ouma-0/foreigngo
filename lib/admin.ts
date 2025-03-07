import { auth } from "@clerk/nextjs";

const adminIds = [
    "user_2rCFFhvhVH3ve80pz3NYaPyX1iz",
    "user_2twlTpqyFXlM4oefR8EDfNyl0Vq",
];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};