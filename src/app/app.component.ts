import { Component, AfterViewInit } from "@angular/core";
import { fromEvent, pipe } from "rxjs";
import { pluck, tap } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const click = fromEvent(document.querySelectorAll(".cell"), "click").pipe(pluck("srcElement"),
        tap((e: HTMLElement) => (e.style.background = this.getRandomColor()))
      )
      .subscribe();
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
