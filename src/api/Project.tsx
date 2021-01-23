export interface ProjectAdd {
    name: string,
    category: string[],
    contents: string,
    reward: any,
    reward_duration: number,
    url: string,
    imageUrl?: string[],
    status: string,
    startAt: Date,
    deadlineAt: Date
};
export default null;