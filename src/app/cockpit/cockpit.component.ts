import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({ 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  } 

  onAddBluePrint(nameInput) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  
}
