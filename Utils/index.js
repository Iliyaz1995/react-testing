export const testForElement = (component, attr) => {
    const element = component.find(`.${attr}`);
    return element;
}