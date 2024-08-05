export const Deg2Rad = (theta: number): number => {
    return (theta * Math.PI) / 180;
}

export const  generateId = (length: number): number => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}