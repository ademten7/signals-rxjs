import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserShellComponent } from "./users/user-shell/user-shell.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserShellComponent]
})
export class AppComponent {
  title = 'signals-rxjs';
}
