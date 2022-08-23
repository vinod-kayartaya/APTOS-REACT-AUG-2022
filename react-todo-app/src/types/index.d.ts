export { };

declare global {
    interface Window {
        increasePriority: Function;
        decreasePriority: Function;
    }
}