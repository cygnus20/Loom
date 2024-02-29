export type Project = {
    id: number;
    userId: string;
    name: string;
    createdAt: number;
    tasks: Array<Task>;
    markUp: number;
    price: number;

}

export type Task = {
    id: number;
    name: string;
    materials: Array<Material>
    labourCost: number;
    price: number;
}

export type Material = {
    id: number
    name: string;
    costPerUnit: number;
    quantity: number;
    price: number;
}

export type InputMaterialDTO = {
    costPerUnit: string;
    quantity: string;
}