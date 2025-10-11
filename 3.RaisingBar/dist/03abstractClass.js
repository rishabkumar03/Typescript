class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex analysis
        return 3;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSomething() {
        console.log("Something something hello hunny bunny");
    }
}
const rishab = new Instagram("check", "check", 3);
rishab.getReelTime();
export {};
//# sourceMappingURL=03abstractClass.js.map