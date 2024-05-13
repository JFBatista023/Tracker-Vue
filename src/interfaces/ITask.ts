import IProject from "./IProject";

export default interface ITask {
    seconds: number,
    description: string,
    project: IProject
}