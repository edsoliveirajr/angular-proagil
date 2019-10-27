import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  eventos: any = [{ teste: '123' }, { teste: '456' }, { teste: '789' }];

  constructor(private http: HttpClient) {}
}
