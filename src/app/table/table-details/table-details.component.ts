import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-details]',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  @Input() id: string;
  @Input() username: string;
  @Input() email: string;
  constructor() { }

  ngOnInit(): void {
  }

}
