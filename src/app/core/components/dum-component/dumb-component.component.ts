import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DumbComponent {
  private readonly subClassConstructor!: Function;
  private readonly subClassNgOInit!: Function;

  constructor() {
    this.subClassConstructor = this.constructor;
    this.subClassNgOInit = (this as any).ngOnInit;

    if (this.subClassNgOInit) {
      this.trowError("it should not use ngOninit");
    }

    if (this.isEmptyConstrutor() || arguments.length !== 0) {
      this.trowError("it should not inject services");
    }
  }

  private isEmptyConstrutor(): boolean {
    return this.subClassConstructor.toString().split("(")[1][0] !== " )";
  }
  private trowError(reason: string): void {
    throw new Error(
      `Component "${this.subClassConstructor.name}" is a DumbComponent, ${reason}`,
    );
  }
}
