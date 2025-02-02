import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { Environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ToastModule, RippleModule],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent implements OnInit {
  constructor(private _titleService: Title) {
    _titleService.setTitle(Environment.APP_NAME);
  }

  ngOnInit() {
    if (Environment.VERSION_DESCRIPTION.activeAlert) {
      window.alert(Environment.VERSION_DESCRIPTION.message);
    }
  }
}
