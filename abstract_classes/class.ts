// If create a class there is need to use constructor

// if create a class using abstract --
// show error while creating object
// const SC =new TakePhoto("test","test") --error

// not able to make object is class created using abstract

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
}

class Instagramm extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
}

// const SC =new TakePhoto("test","test")
