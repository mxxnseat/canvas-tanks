export default async function clickPosibleTimer() {
    return await new Promise(resolve => {
        setTimeout(() => resolve(this.config.clickDisable = true), 200);
    });
}