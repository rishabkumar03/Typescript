abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSomething(): void
    getReelTime(): number{
        // some complex analysis
        return 3
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSomething(): void {
        console.log("Something something hello hunny bunny");
        
    }
}

const rishab = new Instagram("check", "check", 3)

rishab.getReelTime()