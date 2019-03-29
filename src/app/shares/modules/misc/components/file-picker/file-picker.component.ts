import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {

  @Input() name : string
  @Input() placeholder : string
  @Input() change : Function = (f : any) => console.debug(f) 

  selectedFile? : File

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event : any) {
    let files = event.srcElement.files
    if(files.length > 0) {
      this.selectedFile = files[0]
    }
    this.change(this.selectedFile);
  }

  public clear() {
    this.selectedFile = null
  }
}
