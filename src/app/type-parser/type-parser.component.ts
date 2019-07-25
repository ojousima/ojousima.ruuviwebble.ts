import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-type-parser',
  templateUrl: './type-parser.component.html',
  styleUrls: ['./type-parser.component.css']
})
export class TypeParserComponent implements OnInit {

  @Input()  valueType:string; // For example U64, U32fU32, U8fU8U8fU8U32.
  @Input()  data:DataView;    // Full 11-byte data message.
  @Output() encoded:DataView; // Configurable data encoded into binary

  constructor() { }

  ngOnInit() {

  }
}
