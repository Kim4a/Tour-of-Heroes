import { Component } from '@angular/core';
import {MessageService} from  '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
