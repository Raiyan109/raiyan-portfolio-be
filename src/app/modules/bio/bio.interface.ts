export type TSkills = {
    title: string;
    image: string;
}

export type TProjects = {
    image: string;
    title: string;
    description: string;
    features: [string];
    category: [string];
    feLive: string;
    beLive?: string;
    feGit?: string;
    beGit?: string;
    technologies: [string];
} 