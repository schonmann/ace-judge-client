export interface NavItem {
    displayName: string;
    active: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
}